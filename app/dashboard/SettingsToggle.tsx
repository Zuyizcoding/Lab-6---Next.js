"use client";

import { useTheme } from "./ThemeContext";

export default function SettingsToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#374151" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        borderRadius: "8px",
        border: `1px solid ${theme === "dark" ? "#4b5563" : "#ddd"}`,
        marginTop: "20px",
        transition: "all 0.3s ease",
      }}
    >
      <h3 style={{ marginTop: 0 }}>Theme Settings</h3>
      <p>
        Current Mode: <strong>{theme === "dark" ? "Dark" : "Light"}</strong>
      </p>
      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          backgroundColor: theme === "dark" ? "#60a5fa" : "#3b82f6",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          fontSize: "16px",
          fontWeight: "500",
          transition: "all 0.2s ease",
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor =
            theme === "dark" ? "#3b82f6" : "#2563eb";
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor =
            theme === "dark" ? "#60a5fa" : "#3b82f6";
        }}
      >
        Toggle to {theme === "dark" ? "Light" : "Dark"} Mode
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor:
            theme === "dark" ? "rgba(59, 130, 246, 0.1)" : "#eff6ff",
          borderLeft: `4px solid ${theme === "dark" ? "#60a5fa" : "#3b82f6"}`,
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0, fontSize: "0.875rem" }}>
          💡 <strong>Demo:</strong> This toggle now controls the entire
          dashboard theme using React Context API, demonstrating how Client
          Components can share state across the application.
        </p>
      </div>
    </div>
  );
}
