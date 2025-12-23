import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 20px" }}>
      {/* Navigation Cards */}
      <div style={{ marginBottom: "50px" }}>
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "30px",
            textAlign: "center",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "bold",
          }}
        >
          Next.js Student Exercises
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Exercise 1 */}
          <Link href="/blog" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "24px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>📝</div>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "1.25rem" }}>
                Exercise 1
              </h3>
              <p style={{ margin: "0 0 8px 0", opacity: 0.9 }}>Blog Posts</p>
              <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
                SSG, Dynamic Routes, Fallback
              </p>
            </div>
          </Link>

          {/* Exercise 2 */}
          <Link href="/dashboard" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "24px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🎛️</div>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "1.25rem" }}>
                Exercise 2
              </h3>
              <p style={{ margin: "0 0 8px 0", opacity: 0.9 }}>Dashboard</p>
              <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
                Server & Client Components
              </p>
            </div>
          </Link>

          {/* Exercise 3 */}
          <Link href="/api-test" style={{ textDecoration: "none" }}>
            <div
              style={{
                padding: "24px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                color: "white",
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                height: "100%",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🔐</div>
              <h3 style={{ margin: "0 0 8px 0", fontSize: "1.25rem" }}>
                Exercise 3
              </h3>
              <p style={{ margin: "0 0 8px 0", opacity: 0.9 }}>API Security</p>
              <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
                Middleware & Protected Routes
              </p>
            </div>
          </Link>

          {/* Exercise 4 - Current */}
          <div
            style={{
              padding: "24px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
              color: "white",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              border: "3px solid #fff",
              position: "relative",
              height: "100%",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "rgba(255,255,255,0.3)",
                padding: "4px 12px",
                borderRadius: "20px",
                fontSize: "0.75rem",
                fontWeight: "bold",
              }}
            >
              Current
            </div>
            <div style={{ fontSize: "2rem", marginBottom: "12px" }}>🎨</div>
            <h3 style={{ margin: "0 0 8px 0", fontSize: "1.25rem" }}>
              Exercise 4
            </h3>
            <p style={{ margin: "0 0 8px 0", opacity: 0.9 }}>Optimization</p>
            <p style={{ margin: 0, fontSize: "0.875rem", opacity: 0.8 }}>
              Image & Font Performance
            </p>
          </div>
        </div>
      </div>

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "2.5rem",
        }}
      >
        Exercise 4: Image & Font Optimization
      </h1>

      {/* Section 1: Standard img tag */}
      <section style={{ marginBottom: "60px" }}>
        <h2>1. Standard &lt;img&gt; Tag (May Cause Layout Shift)</h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          Open Chrome DevTools → Performance tab → Start profiling → Reload
          page. Look for "Cumulative Layout Shift" (CLS) - this image may cause
          layout shift.
        </p>
        <div
          style={{
            border: "2px solid #e0e0e0",
            padding: "20px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {/* Standard img tag - can cause CLS */}
          <img
            src="/hero-image.svg"
            alt="Hero with standard img tag"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </section>

      {/* Section 2: Optimized next/image */}
      <section style={{ marginBottom: "60px" }}>
        <h2>2. Optimized &lt;Image /&gt; from next/image</h2>
        <p style={{ marginBottom: "20px", color: "#666" }}>
          The Image component prevents layout shift by requiring width and
          height. It also provides automatic lazy loading and format
          optimization.
        </p>
        <div
          style={{
            border: "2px solid #4ade80",
            padding: "20px",
            backgroundColor: "#f0fdf4",
          }}
        >
          {/* Optimized Next.js Image component */}
          <Image
            src="/hero-image.svg"
            alt="Hero with next/image component"
            width={1920}
            height={1080}
            style={{ width: "100%", height: "auto" }}
            priority // Load this image with high priority
          />
        </div>
      </section>

      {/* Font optimization info */}
      <section
        style={{
          padding: "30px",
          backgroundColor: "#e8f4f8",
          borderRadius: "8px",
          border: "1px solid #b3d9e6",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Font Optimization Demo</h2>
        <p>
          This page uses <strong>Inter</strong> font loaded via{" "}
          <code>next/font/google</code> in the root layout.
        </p>

        <h3>Verification Steps:</h3>
        <ol>
          <li>Open Chrome DevTools → Network tab</li>
          <li>Filter by "Font" or search for "google"</li>
          <li>
            Verify that NO requests are sent to{" "}
            <code>fonts.googleapis.com</code>
          </li>
          <li>
            Font files should be served from the <strong>same domain</strong>{" "}
            (self-hosted)
          </li>
          <li>This eliminates external DNS lookups and improves performance</li>
        </ol>

        <h3>Benefits of next/image:</h3>
        <ul>
          <li>✅ Prevents Cumulative Layout Shift (CLS)</li>
          <li>✅ Automatic lazy loading for off-screen images</li>
          <li>✅ Automatic format conversion (WebP/AVIF)</li>
          <li>✅ Responsive images with automatic sizing</li>
          <li>✅ Built-in image optimization</li>
        </ul>

        <h3>Benefits of next/font:</h3>
        <ul>
          <li>✅ Zero layout shift with font loading</li>
          <li>✅ Self-hosted fonts (no external requests)</li>
          <li>✅ Automatic font optimization</li>
          <li>✅ No Flash of Unstyled Text (FOUT)</li>
        </ul>
      </section>
    </div>
  );
}
