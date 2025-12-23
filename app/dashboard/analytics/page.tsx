"use client";

export default function AnalyticsPage() {
  const chartData = [
    { month: "Jan", value: 4200 },
    { month: "Feb", value: 5100 },
    { month: "Mar", value: 6800 },
    { month: "Apr", value: 5400 },
    { month: "May", value: 7200 },
    { month: "Jun", value: 8500 },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div>
      <h1 style={{ marginTop: 0, fontSize: "2rem" }}>Analytics</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {/* Metric Cards */}
        <div
          style={{
            padding: "20px",
            backgroundColor: "rgba(96, 165, 250, 0.1)",
            borderRadius: "8px",
            border: "1px solid rgba(96, 165, 250, 0.3)",
          }}
        >
          <h3
            style={{ margin: "0 0 10px 0", fontSize: "0.875rem", opacity: 0.8 }}
          >
            Total Users
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#3b82f6",
            }}
          >
            12,345
          </p>
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: "0.875rem",
              color: "#10b981",
            }}
          >
            +12.5% from last month
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "rgba(16, 185, 129, 0.1)",
            borderRadius: "8px",
            border: "1px solid rgba(16, 185, 129, 0.3)",
          }}
        >
          <h3
            style={{ margin: "0 0 10px 0", fontSize: "0.875rem", opacity: 0.8 }}
          >
            Revenue
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#10b981",
            }}
          >
            $45,678
          </p>
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: "0.875rem",
              color: "#10b981",
            }}
          >
            +8.3% from last month
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "rgba(245, 158, 11, 0.1)",
            borderRadius: "8px",
            border: "1px solid rgba(245, 158, 11, 0.3)",
          }}
        >
          <h3
            style={{ margin: "0 0 10px 0", fontSize: "0.875rem", opacity: 0.8 }}
          >
            Active Sessions
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#f59e0b",
            }}
          >
            1,234
          </p>
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: "0.875rem",
              color: "#10b981",
            }}
          >
            +5.7% from last hour
          </p>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "rgba(239, 68, 68, 0.1)",
            borderRadius: "8px",
            border: "1px solid rgba(239, 68, 68, 0.3)",
          }}
        >
          <h3
            style={{ margin: "0 0 10px 0", fontSize: "0.875rem", opacity: 0.8 }}
          >
            Bounce Rate
          </h3>
          <p
            style={{
              margin: 0,
              fontSize: "2rem",
              fontWeight: "bold",
              color: "#ef4444",
            }}
          >
            32.4%
          </p>
          <p
            style={{
              margin: "10px 0 0 0",
              fontSize: "0.875rem",
              color: "#ef4444",
            }}
          >
            -2.1% from last month
          </p>
        </div>
      </div>

      {/* Bar Chart */}
      <div
        style={{
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          borderRadius: "8px",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Monthly Page Views</h2>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            gap: "15px",
            height: "250px",
            padding: "20px 0",
          }}
        >
          {chartData.map((data, index) => {
            const barHeight = (data.value / maxValue) * 100;
            const colors = [
              "#3b82f6",
              "#10b981",
              "#f59e0b",
              "#ef4444",
              "#8b5cf6",
              "#ec4899",
            ];

            return (
              <div
                key={data.month}
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: "8px",
                    fontWeight: "600",
                    fontSize: "0.875rem",
                    color: colors[index % colors.length],
                  }}
                >
                  {data.value.toLocaleString()}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: `${barHeight}%`,
                    backgroundColor: colors[index % colors.length],
                    borderRadius: "6px 6px 0 0",
                    transition: "all 0.3s ease",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                />
                <div
                  style={{
                    marginTop: "8px",
                    fontWeight: "500",
                    opacity: 0.7,
                  }}
                >
                  {data.month}
                </div>
              </div>
            );
          })}
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
          📊 This Analytics page now includes a real CSS-based bar chart showing
          monthly trends!
        </p>
      </div>
    </div>
  );
}
