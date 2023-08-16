import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/signin' || path === '/' || path === '/verifyemail'
  const isPublicPath2 = path === '/adminLogin'
  const token = request.cookies.get('token')?.value || ''

  if(isPublicPath && token) {
    return NextResponse.redirect(new URL('/userdashboard', request.nextUrl))
  }
  if(isPublicPath2)
  {
    return NextResponse.redirect(new URL('/adminpanel', request.nextUrl))
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
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
    '/adminpanel',
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