import {defineMiddleware} from "astro/middleware";

// metodo desde adentro, el fucnionamiento 

// export const onRequest = defineMiddleware(( request, next)=>{
//     // esta respuesta nos entrega muchas cosas con las que podemos trabajar
//     console.log(request);
//     if(request.url.pathname === "/login"){
//         return new Response("Login", {
//             status: 200,
//             headers: {
//                 "Content-Type": "text/plain"
//             }
//         })
//     } else{
//         return next();
//     }
// });

// metodo magico de clerk
// -------------------------------------------------------
import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";
// esta e sla ruta que vamos a proteger
const protectedRoutes = createRouteMatcher(["/Dropbox"]);
// una ves asignamos la proteccion autentificamso a los usaurios y vemos la respuesta del contexto, extraemos el userId de auth().
export const onRequest = clerkMiddleware((auth, context)=>{
    // redirectToSignIn redirige a la pagina de login
    const {userId, redirectToSignIn} = auth();
    if(protectedRoutes(context.request) && !userId){
        return redirectToSignIn();
    }

});