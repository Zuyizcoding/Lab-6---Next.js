"use client";

import { useState } from "react";

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<number | null>(null);

  const reports = [
    {
      id: 1,
      name: "Monthly Sales Report",
      date: "2024-01-20",
      status: "Completed",
      summary:
        "Total sales increased by 23% compared to last month. Key products driving growth include Product A (+45%) and Product B (+31%).",
      details: {
        totalSales: "$125,430",
        transactions: "2,847",
        avgOrder: "$44.05",
        topProduct: "Product A",
      },
    },
    {
      id: 2,
      name: "User Engagement Analysis",
      date: "2024-01-18",
      status: "Completed",
      summary:
        "User engagement metrics show positive trends. Daily active users increased by 15%, with average session duration up by 3 minutes.",
      details: {
        dailyActiveUsers: "8,542",
        avgSessionTime: "12m 34s",
        bounceRate: "32.4%",
        returnRate: "68.5%",
      },
    },
    {
      id: 3,
      name: "Performance Metrics Q1",
      date: "2024-01-15",
      status: "In Progress",
      summary:
        "Q1 performance metrics are being compiled. Preliminary data shows improvements in load times and user satisfaction scores.",
      details: {
        avgLoadTime: "1.2s",
        uptime: "99.8%",
        errorRate: "0.12%",
        satisfaction: "4.7/5.0",
      },
    },
    {
      id: 4,
      name: "Customer Satisfaction Survey",
      date: "2024-01-10",
      status: "Completed",
      summary:
        "Customer satisfaction survey results exceed expectations with an overall rating of 4.8/5.0. 92% of customers would recommend our service.",
      details: {
        responses: "1,234",
        overallRating: "4.8/5.0",
        nps: "78",
        recommendation: "92%",
      },
    },
  ];

  const handleView = (reportId: number) => {
    setSelectedReport(reportId);
  };

  const handleClose = () => {
    setSelectedReport(null);
  };

  const currentReport = reports.find((r) => r.id === selectedReport);

  return (
    <div>
      <h1 style={{ marginTop: 0, fontSize: "2rem" }}>Reports</h1>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "8px",
          overflow: "hidden",
          backdropFilter: "blur(10px)",
        }}
      >
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  fontWeight: "600",
                }}
              >
                Report Name
              </th>
              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  fontWeight: "600",
                }}
              >
                Date
              </th>
              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  fontWeight: "600",
                }}
              >
                Status
              </th>
              <th
                style={{
                  padding: "15px",
                  textAlign: "left",
                  fontWeight: "600",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr
                key={report.id}
                style={{
                  borderTop: "1px solid rgba(0, 0, 0, 0.1)",
                  backgroundColor:
                    index % 2 === 0 ? "transparent" : "rgba(0, 0, 0, 0.02)",
                }}
              >
                <td style={{ padding: "15px" }}>{report.name}</td>
                <td style={{ padding: "15px", opacity: 0.7 }}>{report.date}</td>
                <td style={{ padding: "15px" }}>
                  <span
                    style={{
                      padding: "4px 12px",
                      borderRadius: "12px",
                      fontSize: "0.875rem",
                      backgroundColor:
                        report.status === "Completed"
                          ? "rgba(16, 185, 129, 0.1)"
                          : "rgba(245, 158, 11, 0.1)",
                      color:
                        report.status === "Completed" ? "#10b981" : "#f59e0b",
                      fontWeight: "500",
                    }}
                  >
                    {report.status}
                  </span>
                </td>
                <td style={{ padding: "15px" }}>
                  <button
                    onClick={() => handleView(report.id)}
                    style={{
                      padding: "6px 16px",
                      backgroundColor: "#3b82f6",
                      color: "white",
                      border: "none",
                      borderRadius: "4px",
                      cursor: "pointer",
                      fontSize: "0.875rem",
                    }}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Report Detail Modal */}
      {currentReport && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "30px",
              maxWidth: "600px",
              width: "90%",
              maxHeight: "80vh",
              overflow: "auto",
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "start",
                marginBottom: "20px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "1.5rem", color: "#1f2937" }}>
                {currentReport.name}
              </h2>
              <button
                onClick={handleClose}
                style={{
                  background: "none",
                  border: "none",
                  fontSize: "1.5rem",
                  cursor: "pointer",
                  color: "#6b7280",
                  padding: "0",
                  lineHeight: "1",
                }}
              >
                ×
              </button>
            </div>

            <div
              style={{
                marginBottom: "20px",
                paddingBottom: "20px",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <p
                style={{
                  margin: "0 0 10px 0",
                  color: "#6b7280",
                  fontSize: "0.875rem",
                }}
              >
                <strong>Date:</strong> {currentReport.date}
              </p>
              <p style={{ margin: 0 }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "0.875rem",
                    backgroundColor:
                      currentReport.status === "Completed"
                        ? "rgba(16, 185, 129, 0.1)"
                        : "rgba(245, 158, 11, 0.1)",
                    color:
                      currentReport.status === "Completed"
                        ? "#10b981"
                        : "#f59e0b",
                    fontWeight: "500",
                  }}
                >
                  {currentReport.status}
                </span>
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h3
                style={{ marginTop: 0, fontSize: "1.125rem", color: "#1f2937" }}
              >
                Summary
              </h3>
              <p style={{ margin: 0, color: "#4b5563", lineHeight: "1.6" }}>
                {currentReport.summary}
              </p>
            </div>

            <div>
              <h3
                style={{
                  marginTop: 0,
                  marginBottom: "15px",
                  fontSize: "1.125rem",
                  color: "#1f2937",
                }}
              >
                Key Metrics
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "12px",
                }}
              >
                {Object.entries(currentReport.details).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      padding: "12px",
                      backgroundColor: "#f9fafb",
                      borderRadius: "6px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        textTransform: "capitalize",
                        marginBottom: "4px",
                      }}
                    >
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                    <div
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        color: "#1f2937",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ marginTop: "24px", textAlign: "right" }}>
              <button
                onClick={handleClose}
                style={{
                  padding: "10px 24px",
                  backgroundColor: "#3b82f6",
                  color: "white",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

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
          📋 Click "View" on any report to see detailed information in a modal
          popup!
        </p>
      </div>
    </div>
  );
}
