import { useState } from "react";

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Form Data:", enquiryForm);
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
