import Link from "next/link";
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  // Read data.json file
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(jsonData);

  return {
    props: {
      posts,
    },
  };
}

export default function BlogHome({ posts }) {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "2rem", color: "#333" }}>
        Blog Posts
      </h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {posts.map((post) => (
          <li
            key={post.id}
            style={{
              marginBottom: "1rem",
              padding: "1.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <Link href={`/blog/${post.id}`} style={{ textDecoration: "none" }}>
              <h2 style={{ color: "#0070f3", cursor: "pointer", margin: 0 }}>
                {post.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <Link href="/" style={{ color: "#0070f3", textDecoration: "none" }}>
          ← Back to Homepage
        </Link>
      </div>
    </div>
  );
}
