// SignInPage.jsx
import { useState } from "react";

const SignInPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [signInStatus, setSignInStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Sign-in successful, show success modal
        setSignInStatus("success");
      } else {
        // Sign-in failed, show error modal
        setSignInStatus("error");
      }
    } catch (error) {
      // Show error modal for server error
      setSignInStatus("error");
      console.error("Error during sign-in:", error);
    }
  };

  const closeModal = () => {
    setSignInStatus(null);
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-indigo-500 text-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign In to MuslimGO</h2>
      <form onSubmit={handleSubmit}>
        {/* Username input */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-white text-sm font-bold mb-2"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-black"
            required
          />
        </div>

        {/* Password input */}
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-white text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-black"
            required
          />
        </div>

        {/* Submit button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-white text-indigo-500 py-2 px-4 rounded hover:bg-indigo-600"
          >
            Sign In
          </button>
        </div>
      </form>

      {/* Success modal */}
      {signInStatus === "success" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <p className="text-green-500">Sign-in successful!</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Error modal */}
      {signInStatus === "error" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <p className="text-red-500">Sign-in failed. Please try again.</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInPage;
