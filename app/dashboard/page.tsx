"use client";

import SettingsToggle from "./SettingsToggle";
import { useUser } from "./UserContext";

export default function DashboardPage() {
  const { user } = useUser();

  return (
    <div>
      <h1 style={{ marginTop: 0, fontSize: "2rem" }}>Dashboard Home</h1>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "20px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>User Profile</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            gap: "10px 20px",
          }}
        >
          <strong>Name:</strong> <span>{user.name}</span>
          <strong>Email:</strong> <span>{user.email}</span>
          <strong>Role:</strong> <span>{user.role}</span>
          <strong>Joined:</strong> <span>{user.joinedDate}</span>
        </div>
        <p
          style={{
            fontSize: "14px",
            color: "#666",
            fontStyle: "italic",
            marginTop: "20px",
            marginBottom: 0,
          }}
        >
          ✨ This data is now synced with Settings page. Try updating your
          profile in Settings!
        </p>
      </div>

      {/* Embed Client Component (SettingsToggle) in Server Component */}
      <SettingsToggle />

      <div
        style={{
          marginTop: "30px",
          padding: "15px",
          backgroundColor: "rgba(232, 244, 248, 0.8)",
          borderRadius: "8px",
          border: "1px solid #b3d9e6",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Exercise 2 Concepts:</h3>
        <ul style={{ marginBottom: 0 }}>
          <li>✅ The sidebar is part of the Server Component layout</li>
          <li>✅ User Profile data is shared via UserContext</li>
          <li>✅ Settings Toggle is a Client Component with useState</li>
          <li>
            ✅ Theme state is managed with Context API and shared globally
          </li>
          <li>✅ User data can be updated from Settings and reflects here</li>
        </ul>
      </div>
    </div>
  );
}
