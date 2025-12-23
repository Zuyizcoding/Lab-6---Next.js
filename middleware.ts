import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Only apply middleware to /api/secret route
  if (request.nextUrl.pathname === "/api/secret") {
    // Get the API key from the request header
    const apiKey = request.headers.get("x-api-key");

    // Get the secret key from environment variable
    const secretKey = process.env.API_SECRET_KEY;

    // Check if API key matches
    if (!apiKey || apiKey !== secretKey) {
      // Return 401 Unauthorized
      return NextResponse.json(
        {
          error: "Unauthorized",
          message: "Invalid or missing x-api-key header",
        },
        { status: 401 }
      );
    }
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Configure which routes to run middleware on
export const config = {
  matcher: "/api/secret",
};
