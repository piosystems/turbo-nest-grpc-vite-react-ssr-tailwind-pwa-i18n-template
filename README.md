# To experience my present turbo monorepo template:


## Note the following about my turbo-based monorepo: 

### 1. There are three workspaces in my turbo monorepo namely ***apps***, ***hms-apps*** and ***packages***. Identify the folders in the codebase now!. This ReadMe is a quick outline to get you going but you may need my classnotes to fully appreciate the template.


### 1. Workspace ***apps*** illustrates (as we saw in class):
> Routing (V6)
> Internationalization with i18next
> Progress Web Apps (PWA)
> SSR
> Code splitting
> Tailwind with Flowbite
> ...

### 2. Workspace ***hms-apps*** illustrates:
> Microservice with gRPC as transporter
>
> Shadcn/ui (inspired by https://ui.shadcn.com/docs)
>
> Dark/light mode switching (see my users-demo-frontend /@/components/mode-toggle.tsx inspired by https://ui.shadcn.com/docs/dark-mode/vite)
>
> Use of useReactTable for data table / grid (see my users-demo-frontend/src/components/DisplayUsers.tsx inspired by https://tanstack.com/table)
>
> Navigation (see my users-demo-frontend /src/components/navigation folder, inspired by https://ui.shadcn.com/docs/components/navigation-menu)
>
> React-query for server query caching (see my users-demo-frontend/src/App.tsx and users-demo-frontend/src/components/Users.tsx inspired by https://tanstack.com/query/latest/). 

### Workspace ***packages*** contains shared libraries (inspired by https://turbo.build/repo/docs/handbook/sharing-code)


## Installations to experience my template:

> Git clone my https://github.com/piosystems/turbo-nest-grpc-vite-react-ssr-tailwind-pwa-i18n-template.git
> 
> Run ***npm install*** from turbo root to install all dependencies
>
> Run ***npm install copyfiles -g***
>
> To further modify ***.proto*** files and generate the equivalent ***.ts***, you will need to download Protocol Buffers for your OS from https://github.com/protocolbuffers/protobuf/releases and see my slides and codes about how it was used. I also setup the following script in turbo’s ***package.json*** for repeated use
***"hms:gen:identity.ts:from:proto": "../protoc-25.1-osx-x86_64/bin/protoc --plugin=../node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=./ --ts_proto_opt=nestJs=true ./proto/identity.proto"***


## Dev, Build, Startups

> With installations done, you can startup the two apps. See the script section in my turbo root’s ***package.json***.
> 
### For dev mode:
> ***npm run dev*** (for ***apps***)
> ***npm run hms:dev*** (for ***hms-apps***)
> 
### For build
> 
> ***npm run build*** (for apps)
> 
If there was code and/or css change before build, you will need to update the 'main.js' and 'styles.css' entries in ***assetMap***, setup in ***apps/demo-backend/src/backend.settings.ts***. The new names generated are in ***dist/assets***  of ***demo-frontend***. ***npm run build*** again, after adjustment.
>
> ***npm run hms:build*** (for ***hms-apps***)
> 
### For production start/stop with pm2 use:
>
> ***npm run hms:start:all*** (for start).
> 
> ***npm run hms:stop:all*** (for stop).
>

## Experience It!

### With ***npm run dev*** or ***npm start***, you should have access to:
>
> http://localhost:3000/web, 
> http://localhost:3000/v1/web, 
> http://localhost:3000/v2/web 
as per ***apps*** ***demo-backend*** and ***apps*** ***demo-frontend***.


<img width="299" alt="image" src="https://github.com/piosystems/turbo-nest-grpc-vite-react-ssr-tailwind-pwa-i18n-template/assets/3983248/1fb0746b-4c94-4b92-b1a3-81117221a860">


### With ***npm run hms:dev*** you should have access to:

> http://localhost:5173/view-users

<img width="422" alt="image" src="https://github.com/piosystems/turbo-nest-grpc-vite-react-ssr-tailwind-pwa-i18n-template/assets/3983248/06baadce-efb2-4642-86fa-20c22d20f82b">

### With  ***npm run hms:start:all*** after ***hms:build*** the following should be running:
> api-gateway
> identity
You can use ***npm run hms:stop:all*** to stop them.

#### To connect to api-gateway from frontend,
> With ***npm run preview*** you should have already built ***users-demo-frontend*** running and talking to ***identity*** via ***api-gateway***.
> 
> Now you should see http://localhost:4173/view-users.
> 
![image](https://github.com/piosystems/turbo-nest-grpc-vite-react-ssr-tailwind-pwa-i18n-template/assets/3983248/0c584d59-870e-4bf3-8b03-29f61b6acdc9)


#### Your EXERCISE: 
Serve ***users-demo-frontend*** from ***api-gateway*** so that there will be no need to run a separate ***npm run preview*** process for it. In other words, when done, you should be able to see something like http://localhost:3002/v1/view-users if combined and served from ***api-gateway***. Incorporate SSR as well, in your exercise. Take a clue from my ***apps*** template where I serve ***demo-frontend*** build from ***demo-backend*** and also did SSR.



