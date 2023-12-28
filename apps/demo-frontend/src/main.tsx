//import React from 'react'
import { hydrateRoot } from 'react-dom/client';
//import App from './App.tsx'
import './index.css'
import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppWithNavDemo from './AppWithNavDemo.tsx';
//import App from './App.tsx';

// import i18n
import './global/i18n.js'; //ignoring TS for now. To use TS see https://www.i18next.com/overview/typescript
import Loading from './global/Loading.tsx';

//Use below in dev mode
/*createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense loading={<Loading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
  
)
*/
//use below only for production where you have ssr setup
//@ts-ignore
//hydrateRoot(document, <App assetMap={window.assetMap} />);
//@ts-ignore
hydrateRoot(document, <React.StrictMode><Suspense loading={<Loading />}><BrowserRouter><AppWithNavDemo assetMap={window.assetMap} /></BrowserRouter></Suspense></React.StrictMode>);


