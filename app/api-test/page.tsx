"use client";

import { useState } from "react";

export default function ApiTestPage() {
  const [apiKey, setApiKey] = useState("");
  const [response, setResponse] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const testApi = async () => {
    setLoading(true);
    setError("");
    setResponse(null);

    try {
      const headers: HeadersInit = {};
      if (apiKey) {
        headers["x-api-key"] = apiKey;
      }

      const res = await fetch("/api/secret", {
        method: "GET",
        headers,
      });

      const data = await res.json();

      setResponse({
        status: res.status,
        statusText: res.statusText,
        data: data,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const testWithCorrectKey = () => {
    setApiKey("my-super-secret-key-12345");
    setTimeout(() => testApi(), 100);
  };

  const testWithoutKey = () => {
    setApiKey("");
    setTimeout(() => testApi(), 100);
  };

  const testWithWrongKey = () => {
    setApiKey("wrong-key-123");
    setTimeout(() => testApi(), 100);
  };

  return (
    <div style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      {/* Navigation */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "#f0f9ff",
          borderRadius: "8px",
          border: "1px solid #0ea5e9",
        }}
      >
        <a
          href="/"
          style={{
            color: "#0070f3",
            textDecoration: "none",
            fontSize: "0.875rem",
          }}
        >
          ← Back to Homepage
        </a>
      </div>

      <h1 style={{ marginTop: 0, fontSize: "2.5rem", marginBottom: "10px" }}>
        Exercise 3: API Security Demo
      </h1>
      <p style={{ color: "#666", fontSize: "1.125rem", marginTop: 0 }}>
        Test the protected API route with middleware authentication
      </p>

      {/* Quick Test Buttons */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "#fef3c7",
          borderRadius: "8px",
          border: "1px solid #fbbf24",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Quick Test Scenarios:</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <button
            onClick={testWithCorrectKey}
            style={{
              padding: "10px 20px",
              backgroundColor: "#10b981",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            ✅ With Correct Key
          </button>
          <button
            onClick={testWithoutKey}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ef4444",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            ❌ Without Key
          </button>
          <button
            onClick={testWithWrongKey}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f59e0b",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            ⚠️ With Wrong Key
          </button>
        </div>
      </div>

      {/* Manual Test Form */}
      <div
        style={{
          marginBottom: "30px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "1px solid #e5e7eb",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Manual Testing:</h3>
        <div style={{ marginBottom: "15px" }}>
          <label
            style={{ display: "block", marginBottom: "5px", fontWeight: "500" }}
          >
            API Key (x-api-key header):
          </label>
          <input
            type="text"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="Enter API key or leave empty"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
            }}
          />
          <p
            style={{
              fontSize: "0.875rem",
              color: "#6b7280",
              margin: "5px 0 0 0",
            }}
          >
            Correct key:{" "}
            <code
              style={{
                backgroundColor: "#f3f4f6",
                padding: "2px 6px",
                borderRadius: "3px",
              }}
            >
              my-super-secret-key-12345
            </code>
          </p>
        </div>
        <button
          onClick={testApi}
          disabled={loading}
          style={{
            padding: "12px 24px",
            backgroundColor: loading ? "#9ca3af" : "#3b82f6",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: loading ? "not-allowed" : "pointer",
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          {loading ? "Testing..." : "Test API"}
        </button>
      </div>

      {/* Response Display */}
      {(response || error) && (
        <div
          style={{
            marginBottom: "30px",
            padding: "20px",
            backgroundColor: response?.status === 200 ? "#d1fae5" : "#fee2e2",
            borderRadius: "8px",
            border: `1px solid ${
              response?.status === 200 ? "#6ee7b7" : "#fca5a5"
            }`,
          }}
        >
          <h3 style={{ marginTop: 0 }}>Response:</h3>

          {error && (
            <div style={{ color: "#991b1b", fontWeight: "500" }}>
              Error: {error}
            </div>
          )}

          {response && (
            <>
              <div style={{ marginBottom: "15px" }}>
                <strong>Status:</strong>{" "}
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "12px",
                    backgroundColor:
                      response.status === 200 ? "#10b981" : "#ef4444",
                    color: "white",
                    fontSize: "0.875rem",
                    fontWeight: "500",
                  }}
                >
                  {response.status} {response.statusText}
                </span>
              </div>

              <div>
                <strong>Response Body:</strong>
                <pre
                  style={{
                    backgroundColor: "#1f2937",
                    color: "#f3f4f6",
                    padding: "15px",
                    borderRadius: "6px",
                    overflow: "auto",
                    fontSize: "14px",
                  }}
                >
                  {JSON.stringify(response.data, null, 2)}
                </pre>
              </div>
            </>
          )}
        </div>
      )}

      {/* Explanation */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "#e8f4f8",
          borderRadius: "8px",
          border: "1px solid #b3d9e6",
        }}
      >
        <h3 style={{ marginTop: 0 }}>How This Works:</h3>
        <ul style={{ marginBottom: 0 }}>
          <li>
            The API route is at <code>/api/secret</code>
          </li>
          <li>Middleware intercepts all requests to this route</li>
          <li>
            It checks for the <code>x-api-key</code> header
          </li>
          <li>
            If missing or wrong → Returns <strong>401 Unauthorized</strong>
          </li>
          <li>If correct → Passes to API route → Returns secret message</li>
        </ul>

        <h4>Key Concepts:</h4>
        <ul style={{ marginBottom: 0 }}>
          <li>
            ✅ <strong>Middleware</strong>: Intercepts requests before they
            reach routes
          </li>
          <li>
            ✅ <strong>Header-based auth</strong>: Uses custom HTTP header for
            security
          </li>
          <li>
            ✅ <strong>Environment variables</strong>: API key stored in
            .env.local
          </li>
          <li>
            ✅ <strong>API Routes</strong>: Server-side endpoints in Next.js
          </li>
        </ul>
      </div>
    </div>
  );
}
