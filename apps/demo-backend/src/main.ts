import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

//Attempt to setup i18next middleware
//import * as i18nextMiddleware from 'i18next-http-middleware'; //requires npm install i18next-http-middleware
//import * as Backend from "i18next-fs-backend";
//import * as i18next from 'i18next'; //requires i18next installation
//import path, { join } from 'path';
//import fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //app.setGlobalPrefix('v1', { exclude: [''] });//better to exclude the base url that is on ssr mode
  app.enableVersioning({
    type: VersioningType.URI,
    prefix: 'v', //this is actually the default, if not indicated
    //defaultVersion: '1' In case you need a global version tagging where there is no explicitly declared version
    // or
    //defaultVersion: ['1', '2']
    // or
    //defaultVersion: '1' 
  });

  //Attempt to setup locale middleware for use in ssr endpoint of controller
  //The idea is to wire up i18next to request object

  //const localesPath = join(__dirname, '../../../../', 'demo-backend','src','locales');
  
  /*i18next
    
    .use(i18nextMiddleware.LanguageDetector)
    //@ts-ignore
    .use(Backend)
    .init({
      debug: false,
      preload: ['en', 'en-US', 'fr'],
      ns: ['public', 'adm'],
      defaultNS: 'public',
      backend: {
        loadPath: `${localesPath}/{{lng}}/{{ns}}.json`,
        addPath: `${localesPath}/{{lng}}/{{ns}}.missing.json`,
      }
    }//, (err, t) => {
      // init set content
      //console.log(t);
      //console.log(err);
      // console.log('INIT DONE');}
    );
*/

/* //expose the underlying http server
  const httpInstance = app.getHttpAdapter().getInstance();

  httpInstance.use(
    //@ts-ignore
    i18nextMiddleware.handle(i18next, {
      //ignoreRoutes: [], // or function(req, res, options, i18next) // return true to ignore 
      removeLngFromUrl: false // removes the language from the url when language detected in path
    })
  )
*/

  await app.listen(3000);
}
bootstrap();
