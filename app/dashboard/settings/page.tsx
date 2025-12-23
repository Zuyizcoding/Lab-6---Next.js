"use client";

import SettingsToggle from "../SettingsToggle";
import { useUser } from "../UserContext";
import { useState } from "react";

export default function SettingsPage() {
  const { user, updateUser } = useUser();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    updateUser({ name, email });
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <h1 style={{ marginTop: 0, fontSize: "2rem" }}>Settings</h1>

      {/* Theme Settings */}
      <SettingsToggle />

      {/* Account Settings */}
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Account Settings</h3>

        {saved && (
          <div
            style={{
              padding: "10px 15px",
              backgroundColor: "#d1fae5",
              color: "#065f46",
              borderRadius: "6px",
              marginBottom: "15px",
              border: "1px solid #6ee7b7",
            }}
          >
            ✅ Settings saved successfully! Check the Home page to see updates.
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "500",
              }}
            >
              Username
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>
          <div>
            <label
              style={{
                display: "block",
                marginBottom: "5px",
                fontWeight: "500",
              }}
            >
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "4px",
                border: "1px solid #ccc",
                fontSize: "14px",
              }}
            />
          </div>
          <button
            onClick={handleSave}
            style={{
              padding: "10px 20px",
              backgroundColor: "#3b82f6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "500",
              alignSelf: "flex-start",
            }}
          >
            Save Changes
          </button>
        </div>
      </div>

      {/* Notification Settings */}
      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h3 style={{ marginTop: 0 }}>Notification Preferences</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input type="checkbox" defaultChecked />
            <span>Email notifications</span>
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input type="checkbox" defaultChecked />
            <span>Push notifications</span>
          </label>
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              cursor: "pointer",
            }}
          >
            <input type="checkbox" />
            <span>SMS notifications</span>
          </label>
        </div>
      </div>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "rgba(232, 244, 248, 0.8)",
          borderRadius: "8px",
          border: "1px solid #b3d9e6",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          💡 Try changing your username or email and click "Save Changes". Then
          navigate to Home to see the updates!
        </p>
      </div>
    </div>
  );
}
