import { Controller, Get, Req, Res, VERSION_NEUTRAL, Version } from '@nestjs/common';
import { AppService } from './app.service';
//import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
//import App from "../../demo-frontend/src/App";
import AppWithNavDemo from "../../demo-frontend/src/AppWithNavDemo";
//import AppWithNavDemo from "demo-frontend/src/AppWithNavDemo";
import { Response } from 'express';
import { initialContentMap as iCM } from './global/backend.settings';
import { assetMap as aM } from './global/backend.settings';
import * as acceptLangParser from 'accept-language-parser';

//import { join } from 'path';
//import { I18nextProvider } from 'react-i18next';
import { RequestExtended as Request } from './global/app.interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  //Prepare for ssr for this controller from global settings
  //below, feel free to add more data fields as your logic requires, to the initialContentMap below
  //you can also do this at Request level.
  initialContentMap = { ...iCM, 'title': 'Welcome to demo Hello World!' }

  //localesRootPath = join(__dirname, '../../../..', 'demo-frontend','dist','locales');
  //initialI18nStore = dirTree(this.localesRootPath);


  assetMap = { ...aM, initialContentMap: this.initialContentMap }
  /* //Below could be here but I have centralized the common fields in app.settings.tsx
  initialContentMap = {
    'title': 'Hello World',
    'description': 'Hello World description',
    'hello-message': this.appService.getHello()
  }

  assetMap = {
    'styles.css': '/assets/index-sExkHz8B.css',
    'main.js': '/assets/index-6SY6p8Oi.js',
    'manifest': '/manifest.webmanifest',
    'vite-plugin-pwa:register-sw': '/registerSW.js',
    initialContentMap: this.initialContentMap,
    baseUrl: '/web'
  };
  */


  @Get('web*')
  @Version(VERSION_NEUTRAL)//applies to no version
  getHelloWithSsr(@Req() req: Request, @Res() res: Response) {
    let assetMap = {
      ...this.assetMap,
      baseUrl: "/web",
      initialContentMap: {
        ...this.initialContentMap, 'hello-message': this.appService.getHello(),
        initialLanguage: 'en-US',
        initialI18nStore: {}
      }
    } //override the base Url with req route since it could be influenced by version, etc.

    const entryPoint = [assetMap['main.js']];

    const { pipe, abort: _abort } = renderToPipeableStream(
      <StaticRouter location={req.url}>
        <AppWithNavDemo assetMap={assetMap} />
      </StaticRouter>,
      {
        bootstrapScriptContent: `window.assetMap = ${JSON.stringify(assetMap)};`,
        //bootstrapScripts: entryPoint,
        bootstrapModules: entryPoint,
        onShellReady() {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          pipe(res);
        },
        onShellError() {
          res.statusCode = 500;
          res.send("<!doctype html><p>Loading...</p>");
        },
      }
    );
  }


  @Get('web*')
  @Version('1')//applies to v1
  getHelloWithSsrV1(@Req() req: Request, @Res() res: Response) {
    let assetMap = {
      ...this.assetMap,
      baseUrl: "/v1/web",
      initialContentMap: { ...this.initialContentMap, 'hello-message': this.appService.getHello() }
    } //override the base Url with req route since it could be influenced by version, etc.


    const entryPoint = [assetMap['main.js']];

    const { pipe, abort: _abort } = renderToPipeableStream(
      <StaticRouter location={req.url}>
        <AppWithNavDemo assetMap={assetMap} />
      </StaticRouter>,
      {
        bootstrapScriptContent: `window.assetMap = ${JSON.stringify(assetMap)};`,
        //bootstrapScripts: entryPoint,
        bootstrapModules: entryPoint,
        onShellReady() {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          pipe(res);
        },
        onShellError() {
          res.statusCode = 500;
          res.send("<!doctype html><p>Loading...</p>");
        },
      }
    );
  }


  @Get('web*')
  @Version('2')//applies to v2
  getHelloWithSsrV2(@Req() req: Request, @Res() res: Response) {
    //Let's attempt to get the language of the user's browser, so we can adjust initial translation language
    //console.log(`req.headers["accept-language"] = ${req.headers["accept-language"]}`);
    const acceptLanguage = acceptLangParser.parse(req.headers["accept-language"]);
    
    /*//as per i18n ssr. This style involving middleware is not in use
    //const context = {}; //see https://github.com/i18next/react-i18next/blob/master/example/razzle-ssr/src/server.js#L78

    // First preferred language
    const initialLanguage = req.i18n.languages[0];

    // Fill initialI18nStore with only the necessary namespaces.
    const initialI18nStore = {};
    //const usedNamespaces = req.i18n.reportNamespaces.getUsedNamespaces();
    const usedNamespaces = req.i18n.options.ns;

    req.i18n.languages.forEach((language: string | number) => {
      initialI18nStore[language] = {};

      usedNamespaces.forEach((namespace: string | number) => {
        initialI18nStore[language][namespace] =
          req.i18n.services.resourceStore.data[language][namespace];
      });
    });

    */

    //update assetMap
    //prepare language region format. Add lead dash (-) to region, if any
    const clientFirstAcceptLanguageRegion = acceptLanguage[0].region?`-${acceptLanguage[0].region}`:'';
    const clientFirstAcceptLanguage = `${acceptLanguage[0].code}${clientFirstAcceptLanguageRegion}`
    let assetMap = {
      ...this.assetMap,
      baseUrl: "/v2/web",//override the base Url with req route since it could be influenced by version, etc.
      initialContentMap: { ...this.initialContentMap, 'hello-message': this.appService.getHello() },
      //initialLanguage: initialLanguage,
      //initialI18nStore: initialI18nStore,
      clientFirstAcceptLanguage
    }

    const entryPoint = [assetMap['main.js']];

    const { pipe, abort: _abort } = renderToPipeableStream(
      //Below commented out is for when I use i18n middleware
      //@ts-ignore
      /*<I18nextProvider i18n={req.i18n}><StaticRouter context={context} location={req.url}>
          <AppWithNavDemo assetMap={assetMap} />
        </StaticRouter>
      </I18nextProvider>,*/
      <StaticRouter location={req.url}>
        <AppWithNavDemo assetMap={assetMap} />
      </StaticRouter>,
      {
        bootstrapScriptContent: `window.assetMap = ${JSON.stringify(assetMap)};`,
        //bootstrapScripts: entryPoint,
        bootstrapModules: entryPoint,
        onShellReady() {
          res.statusCode = 200;
          res.setHeader("Content-type", "text/html");
          pipe(res);
        },
        onShellError() {
          res.statusCode = 500;
          res.send("<!doctype html><p>Loading...</p>");
        },
      }
    );
  }

  @Get('/hello')
  getHello() {
    return ("Hello World from backend - versionless!");
  }

  @Version(['1'])//applies to v1
  @Get('/hello')
  getHelloV1() {
    return ("Hello World from backend - version 1!");
  }

  @Version(['2'])//applies to v2
  @Get('/hello')
  getHelloV2() {
    return ("Hello World from backend - version 2!");
  }
}
