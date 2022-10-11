import React, { useEffect, useState } from "react";
import AuthForm from "./AuthForm";
import Cookies from "js-cookie";
import CommitList from "./CommitList";

const CommitViewer = () => {
  const [showAuthForm, setShowAuthForm] = useState(false);

  const handleSubmit = (data) => {
    Cookies.set("accessToken", data.accessToken, { expires: 1, path: "" });
    setShowAuthForm(false);
  };

  useEffect(() => {
    const handleSetAuth = () => {
      const token = Cookies.get("accessToken");
      if (!token) {
        setShowAuthForm(true);
      }
    };
    handleSetAuth();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 font-medium">
        Welcome to Github Commit Viewer
      </h1>

      {showAuthForm && (
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h6 className="mb-4">Add keys to proceed</h6>
            <AuthForm onSubmit={handleSubmit} />
          </div>
        </div>
      )}

      {!showAuthForm && <CommitList />}
    </div>
  );
};

export default CommitViewer;
