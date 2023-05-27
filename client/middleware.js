import { NextResponse, NextRequest } from 'next/server'

export function middleware() {
	// Get a cookie
	const cookie = request.cookies.get('access_token')?.value

	console.log(cookie)

    return NextResponse.next();
}