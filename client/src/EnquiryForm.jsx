import { useState } from "react";
import axios from "axios";

export default function EnquiryForm() {
  const defaultEnquiry = {
    name: "",
    emailAddress: "",
    category: "",
    message: "",
  };

  const [enquiryForm, setEnquiryForm] = useState(defaultEnquiry);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEnquiryForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("Enquiry Form Data:", enquiryForm);

      // Post request to API
      await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/enquiry`,
        enquiryForm,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Reset form on success
      setEnquiryForm(defaultEnquiry);
      alert("Enquiry submitted successfully!");
    } catch (err) {
      console.error("Error submitting enquiry:", err);
      alert(
        err.response?.data?.message ||
          "Unable to submit the enquiry. Please try again later."
      );
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-4 bg-gray-700">
        <form
          className="w-full max-w-md p-6 bg-white rounded-lg shadow-md"
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-xl font-bold mb-4">Enquiry Form</h2>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="block w-full p-2 border border-gray-300 rounded"
              placeholder="Please enter your name"
              autoComplete="off"
              min={2}
              max={60}
              value={enquiryForm.name}
              onChange={handleFormChange}
              required
            />
          </div>

          {/*  Email Address */}
          <div className="mb-4">
            <label htmlFor="emailAddress">Email Address </label>
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              className="block w-full p-2 border border-gray-300 rounded"
              placeholder="Please enter your email address"
              autoComplete="off"
              value={enquiryForm.emailAddress}
              onChange={handleFormChange}
              required
            />
          </div>

          {/* Category */}
          <div className="mb-4">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="block w-full p-2 border border-gray-300 rounded"
              value={enquiryForm.category}
              onChange={handleFormChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Service Request">Service Request</option>
              <option value="Feedback">Feedback</option>
              <option value="Complaint">Complaint</option>
            </select>
          </div>

          {/* Message */}
          <div className="mb-4">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              autoComplete="off"
              className="block w-full p-2 border border-gray-300 rounded"
              placeholder="Please enter your message"
              rows={4}
              minLength={3}
              maxLength={200}
              value={enquiryForm.message}
              onChange={handleFormChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
