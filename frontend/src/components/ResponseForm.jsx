import React, { useState } from "react";
import axios from "axios";

function ResponseForm({ reviewId }) {
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/reviews/respond", {
        reviewId,
        response,
      });
      alert(res.data.message);
      setResponse("");
    } catch (error) {
      console.error(error);
      alert("Failed to respond to review.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <textarea
        value={response}
        onChange={(e) => setResponse(e.target.value)}
        placeholder="Write your response here..."
        style={styles.textarea}
        required
      ></textarea>
      <button type="submit" style={styles.button}>
        Submit Response
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "500px",
    margin: "20px auto",
  },
  textarea: {
    width: "100%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#34A853",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ResponseForm;
