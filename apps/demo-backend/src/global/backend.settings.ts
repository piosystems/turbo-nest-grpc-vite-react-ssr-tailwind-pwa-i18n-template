export const initialContentMap = {
  'title': 'Hello World',
  'description': 'Hello World description'
}

export const assetMap = {
  'styles.css': '/assets/index-0fxx1tdA.css',
  'main.js': '/assets/index-0Hv7_DWP.js',
  'manifest': '/manifest.webmanifest',
  'vite-plugin-pwa:register-sw': '/registerSW.js',
  'additional-styles': [],//sufficient to drop flowbite.min.css in src/assets folder, to be incorporated at build time
  //'additional-jss': ["https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js", "/custom-assets/flowbite/dist/datepicker.min.js"],//manually copied to public asset folder from node-modules
  'additional-jss': ["/cassets/flowbite/dist/flowbite.min.js", "/cassets/flowbite/dist/datepicker.min.js"],//manually copied to public asset folder from node-modules
  initialContentMap,
  baseUrl: '/',
  initialI18nStore: {},//to be used later with middleware
  initialLanguage: "en-US",//to be used later with middleware
  clientFirstAcceptLanguage:""//for passing req accept-language for lang adjustment. Better to have a setting for it.
};