# Security Policy & Implementation Guide

## Security Overview
This document outlines the security posture of the Next.js 15 portfolio website. While a portfolio is inherently low-risk compared to a SaaS application, it utilizes powerful tools like the Gemini API, which necessitates strict rate limiting and payload validation to prevent billing abuse.

The application has been audited and hardened according to OWASP guidelines adapted for modern Next.js environments.

---

## Current Security Status

### Major Security Areas

✅ **Authentication & Authorization**
- **Status**: N/A (Portfolio is fully public). No admin panels or authenticated routes exist in the current architecture.

✅ **API Routes Security**
- **Status**: Secured.
- **Fixes Applied**: The `/api/chat` route now strictly limits incoming payload sizes (maximum 10 messages, 500 characters each) to prevent massive context-window attacks and DoS. Malformed JSON or non-array structures are rejected with a 400 Bad Request.

✅ **Environment Variables & Secret Management**
- **Status**: Secured.
- **Fixes Applied**: `GEMINI_API_KEY` is strictly accessed server-side via `process.env`. No `NEXT_PUBLIC_` prefixes are used for sensitive keys, ensuring they never leak to the client bundle.

✅ **Rate Limiting**
- **Status**: Secured.
- **Fixes Applied**: Edge Middleware (`src/middleware.ts`) was implemented to track IP addresses via headers. The `/api/chat` endpoint is strictly limited to 10 requests per minute per IP, preventing automated scripts from abusing the AI quota.

✅ **HTTP Security Headers & CSP**
- **Status**: Secured.
- **Fixes Applied**: `next.config.ts` injects standard HTTP security headers globally:
  - `Content-Security-Policy`: Restricts scripts, styles, and image sources to prevent XSS.
  - `Strict-Transport-Security (HSTS)`: Enforces HTTPS.
  - `X-Frame-Options: DENY`: Prevents Clickjacking by blocking the site from being embedded in iframes.
  - `X-Content-Type-Options: nosniff`: Prevents MIME-type sniffing.

✅ **XSS, CSRF, Injection Protection**
- **Status**: Secured.
- **Fixes Applied**: React (Next.js App Router) automatically escapes output, mitigating most XSS risks. Content Security Policy (CSP) provides a second layer of defense against inline script execution.

✅ **CORS Configuration**
- **Status**: Default (Same-Origin). The API routes currently do not expose explicit CORS headers, meaning modern browsers will restrict access to the API from external domains by default.

✅ **Dependency Vulnerabilities**
- **Status**: Managed.
- **Action**: Developers should routinely run `npm audit` to check for downstream vulnerabilities.

✅ **Form Security (Contact Form)**
- **Status**: Secured.
- **Fixes Applied**: Hard HTML `maxLength` limits were applied to the `ContactSection` inputs to prevent submitting multi-megabyte strings to the simulated backend.

### Minor / Best Practice Security

✅ **Error Handling**
- **Status**: Secured.
- **Fixes Applied**: The Gemini API route catches internal errors and logs them to the server console, but only returns a generic `500 Internal Server Error` message to the client. Stack traces are never leaked.

---

## Action Items (Automatically Fixed)

During the security audit, the following weaknesses were identified and automatically fixed:

- [x] **Weakness:** AI Chat API lacked payload validation. **Fix:** Added strict length and type checking to `src/app/api/chat/route.ts`.
- [x] **Weakness:** No protection against API spam. **Fix:** Implemented Edge Middleware for IP-based Rate Limiting.
- [x] **Weakness:** Missing global security headers. **Fix:** Added comprehensive headers array (including CSP and HSTS) to `next.config.ts`.
- [x] **Weakness:** Contact form allowed unbounded input length. **Fix:** Added HTML `maxLength` attributes to all form inputs.
- [x] **Weakness:** API errors could leak stack traces. **Fix:** Sanitized error responses in the `catch` block of the chat route.
