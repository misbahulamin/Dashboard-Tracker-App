import React, { useState } from "react";

const MachineForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    model_number: "",
    purchase_date: "",
    block_no: "",
    line_no: "",
    location: "",
    last_breakdown_start: "",
    status: "active",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // For submit button loading state

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name || !formData.model_number || !formData.location) {
      alert("Please fill in all required fields: Name, Model Number, and Location.");
      return;
    }

    setIsSubmitting(true); // Disable submit button
    onSubmit(formData).finally(() => {
      setIsSubmitting(false); // Re-enable submit button
    });
  };

  return (
    <div className="container mx-auto p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add Machine</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Company
          </label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Model Number */}
        <div>
          <label htmlFor="model_number" className="block text-sm font-medium text-gray-700">
            Model Number <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="model_number"
            id="model_number"
            value={formData.model_number}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Purchase Date */}
        <div>
          <label htmlFor="purchase_date" className="block text-sm font-medium text-gray-700">
            Purchase Date
          </label>
          <input
            type="date"
            name="purchase_date"
            id="purchase_date"
            value={formData.purchase_date}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Block Number */}
        <div>
          <label htmlFor="block_no" className="block text-sm font-medium text-gray-700">
            Block Number
          </label>
          <input
            type="number"
            name="block_no"
            id="block_no"
            value={formData.block_no}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Line Number */}
        <div>
          <label htmlFor="line_no" className="block text-sm font-medium text-gray-700">
            Line Number
          </label>
          <input
            type="number"
            name="line_no"
            id="line_no"
            value={formData.line_no}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Last Breakdown Start */}
        <div>
          <label htmlFor="last_breakdown_start" className="block text-sm font-medium text-gray-700">
            Last Breakdown Start
          </label>
          <input
            type="datetime-local"
            name="last_breakdown_start"
            id="last_breakdown_start"
            value={formData.last_breakdown_start}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Status */}
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            name="status"
            id="status"
            value={formData.status}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="maintenance">Under Maintenance</option>
            <option value="broken">Broken</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-4 py-2 font-medium rounded ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MachineForm;
