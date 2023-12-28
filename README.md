To experience my present turbo monorepo template:


Note: 
In my turbo monorepo, apps illustrates many frontend features + ssr, we already saw in class; 
hms-apps illustrates microservice with gRPC as transporter;
Here, I used shadcn/ui and implemented dark/light mode switching, navigation, react-query for server query caching.

Installations:
Git clone from GitHub url
Run npm install from turbo root to install all dependencies
Run npm install copyfiles -g
To further modify .proto files and generate the equivalent .ts, you will need to download Protocol Buffers for your OS from https://github.com/protocolbuffers/protobuf/releases and see my slides and codes about how it was used. I also setup the following script in turbo’s package.json for repeated use
"hms:gen:identity.ts:from:proto": "../protoc-25.1-osx-x86_64/bin/protoc --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/identity.proto"

With installations done, you can startup the two apps. See the script section in turbo root’s package.json.
For dev mode
npm run dev (for apps)
npm run hms:dev (for hms-apps)
For build
npm run build (for apps)
If there was code and/or css change before build, you will need to update the ‘main.js’ and ‘styles.css’ entries in assetMap, setup in apps/demo-backend/src/backend.settings.ts. The new names generated are in dist/assets folder demo-frontend. Run build again, after adjustment.
npm run hms:build (for hms-apps)
For production start/stop with pm2 use:
npm run hms:start:all
npm run hms:stop:all

With npm run dev or npm start, you should have access to:
http://localhost:3000/web, http://localhost:3000/v1/web, http://localhost:3000/v2/web  should be available as per apps/ backend and apps/frontend

<img width="299" alt="image" src="https://github.com/piosystems/turbo-nest-grpc-vite-react-ssr-tailwind-pwa-i18n-template/assets/3983248/1fb0746b-4c94-4b92-b1a3-81117221a860">




With npm run hms:dev (or  npm run hms:start:all after hms:build), you should have access to http://localhost:5173

<img width="422" alt="image" src="https://github.com/piosystems/turbo-nest-grpc-vite-react-ssr-tailwind-pwa-i18n-template/assets/3983248/06baadce-efb2-4642-86fa-20c22d20f82b">






