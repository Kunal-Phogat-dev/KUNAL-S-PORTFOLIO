import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Basic in-memory rate limiter for Edge Runtime.
// Note: This operates per-isolate, so in serverless deployments it provides basic protection rather than strict distributed limiting.
// For a portfolio site, this is sufficient to prevent simple script abuse of the Gemini API.
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export function proxy(request: NextRequest) {
  // Only rate limit the AI chat API to protect billing
  if (request.nextUrl.pathname.startsWith('/api/chat')) {
    const ip = request.headers.get('x-forwarded-for') || 'anonymous';
    const limit = 10; // 10 requests
    const windowMs = 60 * 1000; // per 1 minute

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 1,
        lastReset: Date.now(),
      });
    } else {
      const data = rateLimitMap.get(ip)!;
      if (Date.now() - data.lastReset > windowMs) {
        // Reset window
        data.count = 1;
        data.lastReset = Date.now();
      } else if (data.count >= limit) {
        // Rate limit exceeded
        return NextResponse.json(
          { error: 'Too many requests. Please try again later.' },
          { 
            status: 429,
            headers: {
              'Retry-After': '60',
            }
          }
        );
      } else {
        data.count++;
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
