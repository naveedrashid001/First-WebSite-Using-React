import React, { useState } from 'react';
// Toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ContactUs.css'; // Importing custom CSS file for additional styles

function ContactUs() {
  let [formData, setFormData] = useState({
    uname: '',
    uemail: '',
    uphone: '',
    umessage: '',
    index: ''
  });

  let getValue = (event) => {
    let oldData = { ...formData };
    let inputName = event.target.name;
    let inputValue = event.target.value;
    oldData[inputName] = inputValue;
    setFormData(oldData);
  }

  let [userData, setUserData] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();

    let curentformData = {
      uname: formData.uname,
      uemail: formData.uemail,
      uphone: formData.uphone,
      umessage: formData.umessage,
    };

    // Check if any fields are empty
    if (!curentformData.uname || !curentformData.uemail || !curentformData.uphone || !curentformData.umessage) {
      toast.error("All fields are required");
      return;
    }

    // If it's a new entry (index is empty), check for duplicates
    if (formData.index === '') {
      let validationFilter = userData.filter(
        (v) => v.uemail === curentformData.uemail || v.uphone === curentformData.uphone
      );
      if (validationFilter.length > 0) {
        toast.error("Email or Phone Number already exists");
        return;
      }
    } else {
      // If it's an update, make sure the new email/phone isn't already taken by another user
      let validationFilter = userData.filter(
        (v, i) =>
          (v.uemail === curentformData.uemail || v.uphone === curentformData.uphone) &&
          i !== formData.index // Exclude the current user's entry from the check
      );
      if (validationFilter.length > 0) {
        toast.error("Email or Phone Number already exists");
        return;
      }
    }

    // Make a copy of userData to modify
    let oldUsrerData = [...userData];

    // Update existing user or add new user
    if (formData.index !== '') {
      oldUsrerData[formData.index] = curentformData;
      toast.success("User data updated successfully");
    } else {
      oldUsrerData = [...userData, curentformData];
      toast.success("User data saved successfully");
    }

    // Update the state
    setUserData(oldUsrerData);

    // Clear the form
    setFormData({
      uname: '',
      uemail: '',
      uphone: '',
      umessage: '',
      index: '',
    });
};


  let deleteRow = (indexnumber) => {
    let filterDataAfterDelete = userData.filter((v, i) => i !== indexnumber);
    setUserData(filterDataAfterDelete);
    toast.success("User data deleted successfully");
  }

  let editRow = (index) => {
    let editData = userData.find((v, i) => i === index);
    editData.index = index;
    setFormData(editData);
  }

  return (
    <>
      <ToastContainer />
      <div>
        <img
          src="https://img.freepik.com/free-vector/phone-telephone-contact_24908-54804.jpg"
          alt="homepage"
          className="centered-image"
        />
      </div>
      <div className='container-fluid row' style={{ gap: "40px" }}>
        <div className='col-lg-4 col-md-6 col-sm-12 offset-lg-1 mt-3 border border-primary p-3' style={{ borderRadius: '5px' }}>
          <form onSubmit={handleSubmit}>
            <div className='pb-3'>
              <label className='form-label'>Name: </label>
              <input type="text" value={formData.uname} onChange={getValue} name='uname' className='form-control w-100' placeholder='Please Enter your Name...' />
            </div>
            <div className='pb-3 mt-2'>
              <label className='form-label'>Email:</label>
              <input type="email" value={formData.uemail} name='uemail' onChange={getValue} className='form-control w-100' placeholder='Please Enter your Email...' />
            </div>
            <div className='pb-3 mt-2'>
              <label className='form-label'>Phone:</label>
              <input type="number" name='uphone' value={formData.uphone} onChange={getValue} className='form-control w-100' placeholder='Please Enter your Mob No...' />
            </div>
            <div className='pb-3 mt-2'>
              <label className='form-label'>Messages:</label>
              <textarea className='form-control w-100' value={formData.umessage} onChange={getValue} name='umessage' rows={3} placeholder='Please Enter your Message...' />
            </div>
            <button className="btn btn-primary form-control p-2 fw-bold mt-3">
              {formData.index !== "" ? "Update" : "Save"}
            </button>
          </form>
        </div>

        <div className='col-lg-6 col-md-12 mt-3 border border-primary p-3' style={{ borderRadius: '5px',background:"white", color:"black" }}>
          <h2 className="mb-4">User Data</h2>
          <div className='table-responsive'>
            <table className="table table-bordered text-black table-striped table-hover border-primary">
              <thead className="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Message</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody style={{background:"white", color:"black"}}>
                {userData.length > 0 ?
                  userData.map((obj, i) => (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td style={{ wordWrap: "break-word", maxWidth: "150px" }}>{obj.uname || "Empty"}</td>
                      <td style={{ wordWrap: "break-word", maxWidth: "200px" }}>{obj.uemail || "Empty"}</td>
                      <td style={{ wordWrap: "break-word", maxWidth: "150px" }}>{obj.uphone || "Empty"}</td>
                      <td style={{ wordWrap: "break-word", maxWidth: "300px" }}>{obj.umessage || "Empty"}</td>
                      <td>
                        <button className="btn btn-danger btn-sm" onClick={() => deleteRow(i)}>Delete</button>
                        <button className="btn btn-warning btn-sm ms-2" onClick={() => editRow(i)}>Edit</button>
                      </td>
                    </tr>
                  ))
                  :
                  <tr>
                    <td colSpan={6}>Record Not Found</td>
                  </tr>
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
