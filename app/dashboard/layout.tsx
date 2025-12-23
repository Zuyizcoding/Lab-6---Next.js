"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { UserProvider } from "./UserContext";

function DashboardLayoutContent({
  children,
  initialUser,
}: {
  children: React.ReactNode;
  initialUser: any;
}) {
  const { theme } = useTheme();
  const pathname = usePathname();

  const links = [
    { href: "/dashboard", label: "Home" },
    { href: "/dashboard/analytics", label: "Analytics" },
    { href: "/dashboard/reports", label: "Reports" },
    { href: "/dashboard/settings", label: "Settings" },
  ];

  return (
    <UserProvider initialUser={initialUser}>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        {/* Static Sidebar Navigation */}
        <aside
          style={{
            width: "250px",
            backgroundColor: theme === "dark" ? "#1a1a1a" : "#2d3748",
            color: "white",
            padding: "20px",
            transition: "background-color 0.3s ease",
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: "20px" }}>Dashboard</h2>

          {/* Back to Homepage Link */}
          <Link
            href="/"
            style={{
              display: "block",
              padding: "10px 15px",
              marginBottom: "20px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              color: "white",
              textDecoration: "none",
              borderRadius: "6px",
              fontSize: "0.875rem",
              textAlign: "center",
              transition: "all 0.2s ease",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            ← Back to Homepage
          </Link>

          <nav>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} style={{ marginBottom: "10px" }}>
                    <Link
                      href={link.href}
                      style={{
                        color: isActive ? "#60a5fa" : "white",
                        textDecoration: "none",
                        display: "block",
                        padding: "10px 15px",
                        borderRadius: "6px",
                        backgroundColor: isActive
                          ? "rgba(96, 165, 250, 0.1)"
                          : "transparent",
                        fontWeight: isActive ? "bold" : "normal",
                        transition: "all 0.2s ease",
                      }}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main
          style={{
            flex: 1,
            padding: "20px",
            backgroundColor: theme === "dark" ? "#1f2937" : "#f5f5f5",
            color: theme === "dark" ? "#e5e7eb" : "#1f2937",
            transition: "all 0.3s ease",
          }}
        >
          {children}
        </main>
      </div>
    </UserProvider>
  );
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Initial user data (would normally come from auth)
  const initialUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Administrator",
    joinedDate: "2024-01-15",
  };

  return (
    <ThemeProvider>
      <DashboardLayoutContent initialUser={initialUser}>
        {children}
      </DashboardLayoutContent>
    </ThemeProvider>
  );
}
