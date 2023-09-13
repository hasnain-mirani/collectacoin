/*
import { withAuth } from "next-auth/middleware"
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/signin' || path === '/' || path === '/verifyemail'
  const token = request.cookies.get('token')?.value || ''


// if(adminPath && token ) {
//   return NextResponse.redirect(new URL('/adminpanel', request.nextUrl))
// }
  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/userdashboard', request.nextUrl))
  } 

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
  // }  if (!adminPath && !token) {
  //   return NextResponse.redirect(new URL('/adminLogin', request.nextUrl))
  }
    
}
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/userdashboard',
    '/signin',
    '/signup',
    '/verifyemail',
    '/myschedule',
    '/vendors',
    '/floorplan',
    '/context',
    '/myticket',
    '/api/trackEvents',
    '/dashboard/events',
    '/api/buttonState',
    '/api/fetchButtonState',
    '/api/fetchEvents',
    '/api/fetchEventsDesc',
  ]
}
*/


import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export default async function middleware(req: NextRequest) {
  // Get the pathname of the request (e.g. /, /protected)
  const path = req.nextUrl.pathname;
  const token = req.cookies.get('token')?.value || ''
  const isPublicPath = path === '/signin' || path === '/' || path === '/verifyemail'
  const isadminPath = path === '/adminLogin' 
  // If it's the root path, just render it
  if (path === "/") {
    return NextResponse.next();
  }
  const session = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  const auth = token || session;
  if(isPublicPath && auth) {
    return NextResponse.redirect(new URL('/userdashboard', req.nextUrl))
  } 


  if (!isPublicPath && !auth) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl))}

 
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/userdashboard',
    '/signin',
    '/signup',
    '/verifyemail',
    '/myschedule',
    '/vendors',
    '/floorplan',
    '/context',
    '/myticket',
    '/api/trackEvents',
    '/dashboard/events',
    '/api/buttonState',
    '/api/fetchButtonState',
    '/api/fetchEvents',
    '/api/fetchEventsDesc',
    
  ]
}
// if (!session && path === "/") {
//   return NextResponse.redirect(new URL("/signin", req.url));
// } else if (session && (path === "/signin" || path === "/signup")) {
//   return NextResponse.redirect(new URL("/dashboard", req.url));
// }