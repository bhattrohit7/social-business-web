import React, { useState } from "react";

const UpdateProfile = () => {
  const [businessName, setBusinessName] = useState("");
  const [businessAddress, setBusinessAddress] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [gstNumber, setGSTNumber] = useState("");
  const [managerContactName, setManagerContactName] = useState("");
  const [managerContactNumber, setManagerContactNumber] = useState("");

  const updateProfilePageStyle = {
    margin: "0",
    padding: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
  };

  const formContainerStyle = {
    height: "500px",
    width: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#c4c9ce",
    flexDirection: "column",
  };

  const labelStyle = {
    color: "#000",
    marginBottom: "25px",
  };

  const inputStyle = {
    width: "60%",
    height: "25px",
    marginBottom: "20px",
  };

  const submitBtnStyle = {
    backgroundColor: "#33658a",
    color: "#fff",
    width: "100px",
    height: "35px",
    borderRadius: "5px",
    border: 'none'
  };

  const onUpdateProfile = (e) => {
    e.preventDefault();
  };

  return (
    <div style={updateProfilePageStyle}>
      <form onSubmit={onUpdateProfile} style={formContainerStyle}>
        <label style={labelStyle}> Create your business account here! </label>
        <input
          type="text"
          value={businessName}
          placeholder="Business Name"
          style={inputStyle}
          onChange={(e) => setBusinessName(e.target.value)}
        />
        <input
          type="text"
          value={businessAddress}
          placeholder="Business Address"
          style={inputStyle}
          onChange={(e) => setBusinessAddress(e.target.value)}
        />
        <input
          type="text"
          value={contactNo}
          placeholder="Business Contact Number"
          style={inputStyle}
          onChange={(e) => setContactNo(e.target.value)}
        />
        <input
          type="text"
          value={gstNumber}
          placeholder="GST Number"
          style={inputStyle}
          onChange={(e) => setGSTNumber(e.target.value)}
        />
        <input
          type="text"
          value={managerContactName}
          placeholder="Manager Contact Name"
          style={inputStyle}
          onChange={(e) => setManagerContactName(e.target.value)}
        />
        <input
          type="text"
          value={managerContactNumber}
          placeholder="Manager Contact Number"
          style={inputStyle}
          onChange={(e) => setManagerContactNumber(e.target.value)}
        />
        <button type="submit" style={submitBtnStyle}>
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
