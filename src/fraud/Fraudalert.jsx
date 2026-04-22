import React from "react";

const Fraudalert = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.code}>404</h1>
        <h2 style={styles.title}>Page Not Found</h2>
        <p style={styles.desc}>
          Kindly clear all pending dues to regain access.
        </p>

        <button style={styles.button} onClick={() => window.location.href = "/"}>
          Go Back Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #2F8586, #1e3c72)",
    fontFamily: "Poppins, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    maxWidth: "400px",
    width: "90%",
  },
  code: {
    fontSize: "60px",
    margin: "0",
    color: "#2F8586",
  },
  title: {
    fontSize: "24px",
    margin: "10px 0",
    color: "#282f3b",
  },
  desc: {
    fontSize: "16px",
    color: "#4a4E56",
    marginBottom: "20px",
  },
  button: {
    padding: "12px 24px",
    borderRadius: "25px",
    border: "none",
    background: "#2F8586",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default Fraudalert;