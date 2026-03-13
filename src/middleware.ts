import { clerkMiddleware, createRouteMatcher } from "@clerk/astro/server";

const protectedRoutes = createRouteMatcher(["/Dropbox"]);

export const onRequest = clerkMiddleware((auth, context) => {
  const { userId, redirectToSignIn } = auth();
  if (protectedRoutes(context.request) && !userId) {
    return redirectToSignIn();
  }
});