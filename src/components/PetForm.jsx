// components/PetForm.jsx
import { useState } from 'react';

const PetForm = ({ onAddSubmission }) => {
  // State for controlled form inputs
  const [formData, setFormData] = useState({
    petName: '',
    petType: 'Dog',
    breed: '',
    ownerName: '',
    email: '',
    phone: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddSubmission(formData);
    // Reset form after submission
    setFormData({
      petName: '',
      petType: 'Dog',
      breed: '',
      ownerName: '',
      email: '',
      phone: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md bg-[#F0F0F0] text-[#333333]">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Pet Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Pet Details</h2>
          
          <label className="block">
            <span className="text-gray-700">Pet Name</span>
            <input
              type="text"
              name="petName"
              value={formData.petName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Pet Type</span>
            <select
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              <option>Dog</option>
              <option>Cat</option>
              <option>Other</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700">Breed</span>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </label>
        </div>

        {/* Owner Information */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Your Details</h2>
          
          <label className="block">
            <span className="text-gray-700">Full Name</span>
            <input
              type="text"
              name="ownerName"
              value={formData.ownerName}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Email</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </label>

          <label className="block">
            <span className="text-gray-700">Phone</span>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              required
            />
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
      >
        Submit Adoption Request
      </button>
    </form>
  );
};

export default PetForm;