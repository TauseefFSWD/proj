import React from "react";

function LoginPage() {
  const handleLogin = () => {
    window.location.href = "https://accounts.google.com/o/oauth2/auth";
  };

  return (
    <div>
      <h1>Login to Google Integration Portal</h1>
      <button onClick={handleLogin}>Login with Google</button>
    </div>
  );
}

export default LoginPage;
