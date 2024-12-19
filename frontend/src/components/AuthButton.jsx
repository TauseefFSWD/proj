import React from "react";

function AuthButton() {
  const handleLogin = () => {
    const clientId = "<YOUR_GOOGLE_CLIENT_ID>";
    const redirectUri = "http://localhost:3000/home"; // Change based on your environment
    const scope = "https://www.googleapis.com/auth/business.manage";
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&scope=${scope}`;

    window.location.href = authUrl;
  };

  return (
    <button onClick={handleLogin} style={styles.button}>
      Login with Google
    </button>
  );
}

const styles = {
  button: {
    padding: "10px 20px",
    backgroundColor: "#4285F4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default AuthButton;
