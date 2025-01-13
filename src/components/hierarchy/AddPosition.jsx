import React, { useState } from "react";
import Profile from "../../assets/profile.png";
import { Link, useOutletContext } from "react-router-dom";
import { GiCancel } from 'react-icons/gi'
import { FaEye } from "react-icons/fa6";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const AddPosition = () => {
  const { positionData, setPositionData } = useOutletContext();

  const allPositions = [
    "HOA",
    "POA",
    "PRESIDENT",
    "WISE PRESIDENT",
    "SECRETARYT",
    "TREASRER",
  ];

  const getUsedPositions = () => {
    return positionData.map((position) => position.position);
  };

  const getAvailablePositions = () => {
    const usedPositions = getUsedPositions();
    if (updateIndex !== null) {
      const currentPosition = positionData[updateIndex]?.position;
      return allPositions.filter(
        (pos) => !usedPositions.includes(pos) || pos === currentPosition
      );
    }
    return allPositions.filter((pos) => !usedPositions.includes(pos));
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    position: "",
    processBy: "",
    processManage: "",
    image: null,
  });

  const [isAddingPosition, setIsAddingPosition] = useState(false);
  const [viewDetails, setViewDetails] = useState(null);
  const [updateIndex, setUpdateIndex] = useState(null);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      image: file,
    }));
  };

  const handleSubmitPosition = (e) => {
    e.preventDefault();
    if (updateIndex !== null) {
      const updatedPositionData = [...positionData];
      updatedPositionData[updateIndex] = formData;
      setPositionData(updatedPositionData);
      setUpdateIndex(null);
    } else {
      setPositionData([...positionData, formData]);
    }
    setFormData({
      name: "",
      email: "",
      mobile: "",
      address: "",
      position: "",
      processBy: "",
      processManage: "",
      image: null,
    });
    setIsAddingPosition(false);
  };

  const handleDeletePosition = (index) => {
    setPositionData(positionData.filter((_, i) => i !== index));
  };

  const handleViewDetails = (position) => {
    setViewDetails(position);
  };

  const handleUpdatePosition = (index) => {
    setFormData(positionData[index]);
    setUpdateIndex(index);
    setIsAddingPosition(true);
  };

  const handleCloseDetails = () => {
    setViewDetails(null);
  };

  const handleCloseModal = () => {
    setIsAddingPosition(false);
    setUpdateIndex(null);
  };

  const availablePositions = getAvailablePositions();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold mb-2">Add Positions</h1>
          <h1 className="font-semibold mb-4">
            <Link to="/">Dashboard</Link> / Add Positions
          </h1>
        </div>
        <button
          className="bg-slate-700 hover:bg-slate-900 text-white py-2 px-4 rounded mt-4 w-[145px] max-w-md"
          onClick={() => setIsAddingPosition(true)}
        >
          Add Position
        </button>
      </div>

      {/* Position List */}
      {positionData.length > 0 ? (
        <div className="mt-10 space-y-6">
          <h2 className="text-2xl font-bold">Added Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {positionData.map((position, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-6"
              >
                <img
                  src={position.image ? URL.createObjectURL(position.image) : Profile}
                  alt={position.name}
                  className="w-20 h-20 rounded-full border-2 border-teal-500 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{position.name}</h3>
                  <p className="text-gray-600">{position.position}</p>
                </div>
                <div className="flex gap-4">
                  <button
                    className="bg-slate-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleViewDetails(position)}
                  >
                    <FaEye className="mr-2 inline" />
                    View
                  </button>
                  <button
                    className="bg-slate-500 hover:bg-yellow-600 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleUpdatePosition(index)}
                  >
                    <FaUserEdit className="mr-2 inline" />
                    Update
                  </button>
                  <button
                    className="bg-slate-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg"
                    onClick={() => handleDeletePosition(index)}
                  >
                    <MdDeleteForever className="mr-2 inline" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="col-span-full text-center text-gray-500">
          No positions found.
        </div>
      )}

      {/* Modal for Add/Update */}
      {isAddingPosition && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white w-full max-w-3xl p-6 rounded-md shadow-lg relative animate__animated animate__zoomIn animate__faster space-y-6">
            <button
              className="absolute top-4 right-4 rounded-full p-2"
              onClick={handleCloseModal}
            >
              <GiCancel className="text-slate-500 hover:text-slate-700 text-2xl" />
            </button>
            <h2 className="text-xl font-semibold">
              {updateIndex !== null ? "Update Position" : "Add Position"}
            </h2>
            <form
              onSubmit={handleSubmitPosition}
              className="space-y-4 h-[75vh] overflow-y-auto pr-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Mobile</label>
                  <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2">
                  {availablePositions.length > 0 && (
                    <div>
                      <label className="block text-gray-700">Position</label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={(e) => {
                          if (e.target.value === "manual") {
                            setFormData((prevData) => ({
                              ...prevData,
                              position: "",
                            }));
                          } else {
                            handleFormChange(e);
                          }
                        }}
                        className="w-full p-3 border border-gray-300 rounded"
                      >
                        <option value="">Select Position</option>
                        {availablePositions.map((position) => (
                          <option key={position} value={position}>
                            {position}
                          </option>
                        ))}
                        <option value="manual">Add Manually</option>
                      </select>
                    </div>
                  )}
                </div>
                {formData.position === "" && (
                  <div className="col-span-2">
                    <label className="block text-gray-700">Add Position</label>
                    <input
                      type="text"
                      name="position"
                      value={formData.position}
                      onChange={handleFormChange}
                      placeholder="Enter position manually"
                      className="w-full p-3 border border-gray-300 rounded"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-gray-700">Process By</label>
                  <input
                    type="text"
                    name="processBy"
                    value={formData.processBy}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div>
                  <label className="block text-gray-700">Process Manage</label>
                  <input
                    type="text"
                    name="processManage"
                    value={formData.processManage}
                    onChange={handleFormChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700">Image</label>
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="w-full p-3 border border-gray-300 rounded"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-slate-500 hover:bg-slate-600 text-white py-2 px-6 rounded-lg"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}


      {/* View Details Modal */}
      {viewDetails && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative">
            <img
              src={viewDetails.image ? URL.createObjectURL(viewDetails.image) : Profile}
              alt={viewDetails.name}
              className="w-32 h-32 rounded-full mx-auto"
            />
            <h3 className="text-2xl font-bold text-center mt-4">{viewDetails.name}</h3>
            <h3 className="text-center mb-4">{viewDetails.position}</h3>
            <div className="space-y-4">
              <p className="text-gray-600 text-left">Email: {viewDetails.email}</p>
              <p className="text-gray-600 text-left">Mobile: {viewDetails.mobile}</p>
              <p className="text-gray-600 text-left">Address: {viewDetails.address}</p>
              <p className="text-gray-600 text-left">Process By: {viewDetails.processBy}</p>
              <p className="text-gray-600 text-left">Process Manage: {viewDetails.processManage}</p>
            </div>

            {/* Close button with cancel icon */}
            <button
              className="absolute top-4 right-4 rounded-full p-2"
              onClick={handleCloseDetails}
            >
              <GiCancel className="text-slate-500 hover:text-slate-700 text-2xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddPosition;

