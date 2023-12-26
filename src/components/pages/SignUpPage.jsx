// SignUpPage.jsx
import { useState } from "react";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [registrationStatus, setRegistrationStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password complexity
    if (!isPasswordValid(formData.password)) {
      setRegistrationStatus("passwordError");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Registration successful, show success modal
        setRegistrationStatus("success");
      } else {
        // Registration failed, show error modal
        setRegistrationStatus("error");
      }
    } catch (error) {
      // Show error modal for server error
      setRegistrationStatus("error");
      console.error("Error during registration:", error);
    }
  };

  const closeModal = () => {
    setRegistrationStatus(null);
  };

  const isPasswordValid = (password) => {
    // Implement your password complexity requirements here
    // For example, requiring at least one uppercase letter and a minimum length of 6
    const hasUppercase = /[A-Z]/.test(password);
    const hasMinLength = password.length >= 6;

    return hasUppercase && hasMinLength;
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-indigo-500 text-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Register for MuslimGO</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-white text-sm font-bold mb-2 "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full py-2 px-3 text-black"
            required
          />
        </div>
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
          {/* Password requirement information */}
          <p className="text-sm text-white mt-2">
            Password must contain at least one uppercase letter and be a minimum
            of 6 characters long.
          </p>
        </div>

        {/* Submit button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-white text-indigo-500 py-2 px-4 rounded hover:bg-indigo-600"
          >
            Register
          </button>
        </div>
      </form>

      {/* Success modal */}
      {registrationStatus === "success" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <p className="text-green-500">Registration successful!</p>
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
      {registrationStatus === "error" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <p className="text-red-500">
              Registration failed. Please try again.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Password error modal */}
      {registrationStatus === "passwordError" && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow">
            <p className="text-red-500">
              Password does not meet the complexity requirements. Please check
              and try again.
            </p>
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

export default SignUpPage;
