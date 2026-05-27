import React from "react";

const Fraudalert = () => {
  return (
 <div style={styles.container}>
      <div style={styles.content}>

        {/* LEFT TEXT SECTION */}
        <div style={styles.left}>
          <h1 style={styles.code}>500</h1>
          <h2 style={styles.title}>System Failure</h2>
          <p style={styles.desc}>
            Critical server error detected. Our system is currently experiencing
            issues. Our engineers are working to restore services as soon as possible.
          </p>

          <div style={styles.actions}>
            <button
              style={styles.primaryBtn}
              onClick={() => window.location.reload()}
            >
              Retry
            </button>

            <button
              style={styles.secondaryBtn}
              onClick={() => (window.location.href = "/")}
            >
              Back to Home
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE SECTION */}
        <div style={styles.right}>
          <img
            src="https://img.freepik.com/free-vector/system-critical-failure-alert-system-message-data-center-view-server-room-with-workers-racks-heat-removing-system-high-temperature-overheat-error_1150-58770.jpg"
            alt="Server Error"
            style={styles.image}
          />
        </div>

      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
    padding: "20px",
  },

  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    maxWidth: "1100px",
    width: "100%",
    gap: "40px",
    flexWrap: "wrap",
  },

  left: {
    flex: "1",
    minWidth: "300px",
    color: "#fff",
  },

  code: {
    fontSize: "90px",
    margin: "0",
    color: "#2F8586",
    fontWeight: "700",
  },

  title: {
    fontSize: "32px",
    margin: "10px 0",
  },

  desc: {
    fontSize: "16px",
    opacity: 0.8,
    lineHeight: "1.6",
    marginBottom: "30px",
  },

  actions: {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    padding: "12px 28px",
    borderRadius: "30px",
    border: "none",
    background: "#2F8586",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },

  secondaryBtn: {
    padding: "12px 28px",
    borderRadius: "30px",
    border: "1px solid #fff",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
  },

  right: {
    flex: "1",
    minWidth: "300px",
    display: "flex",
    justifyContent: "center",
  },

  image: {
    width: "100%",
    maxWidth: "450px",
    borderRadius: "12px",
  },
};

export default Fraudalert;