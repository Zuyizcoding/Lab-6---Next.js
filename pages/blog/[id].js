import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticPaths() {
  // Read data.json to get all post IDs
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(jsonData);

  // Generate paths for all posts
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }));

  return {
    paths,
    fallback: true, // Enable fallback for new posts
  };
}

export async function getStaticProps({ params }) {
  // Read data.json to get the specific post
  const filePath = path.join(process.cwd(), "data.json");
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const posts = JSON.parse(jsonData);

  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

export default function BlogPost({ post }) {
  const router = useRouter();

  // Display loading state when fallback is being generated
  if (router.isFallback) {
    return (
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h1>Loading...</h1>
        <p>Generating page for this blog post...</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 20px" }}>
      <Link
        href="/blog"
        style={{
          color: "#0070f3",
          textDecoration: "none",
          marginBottom: "20px",
          display: "inline-block",
        }}
      >
        ← Back to all posts
      </Link>

      <article>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            color: "#333",
            lineHeight: "1.2",
          }}
        >
          {post.title}
        </h1>

        <div
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
            color: "#555",
          }}
        >
          <p>{post.content}</p>
        </div>
      </article>

      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Testing Fallback Behavior:</h3>
        <p>To test the fallback feature:</p>
        <ol>
          <li>Add a new post with id "6" to data.json</li>
          <li>Visit /blog/6 without restarting the server</li>
          <li>You should see "Loading..." first, then the content</li>
        </ol>
      </div>
    </div>
  );
}
