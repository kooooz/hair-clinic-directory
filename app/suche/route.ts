import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const baseUrl = 'https://www.beste-haarkliniken.de'
  
  // Create response with redirect
  const response = NextResponse.redirect(
    new URL(`/kliniken-vergleichen?search=${query || ''}`, request.url)
  )

  // Add Link header for canonical URL
  response.headers.set(
    'Link',
    `<${baseUrl}/kliniken-vergleichen>; rel="canonical"`
  )

  return response
} 