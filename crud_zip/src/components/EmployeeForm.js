import React, { useState, useEffect, useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeForm = () => {
  const { addEmployee, updateEmployee, selectedEmployee, setSelectedEmployee } = useContext(EmployeeContext);
  const [formData, setFormData] = useState({
    srNo: "",
    name: "",
    address: "",
    email: "",
    phone: "",
    password: "",
    joiningDate: "",
    gender: "",
    qualification: "",
    hobbies: [],
    image: "",
    terms: false
  });

  useEffect(() => {
    if (selectedEmployee) setFormData(selectedEmployee);
    else setFormData({ srNo: "", name: "", address: "", email: "", phone: "", password: "", joiningDate: "", gender: "", qualification: "", hobbies: [], image: "", terms: false });
  }, [selectedEmployee]);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, image: URL.createObjectURL(files[0]) }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name || !emailPattern.test(formData.email) || formData.phone.length !== 10 || !formData.password) {
      alert("Please fill all required fields correctly");
      return;
    }
    selectedEmployee ? updateEmployee(formData) : addEmployee(formData);
    setSelectedEmployee(null);
  };

  return (
    <div className="modal fade" id="employeeModal" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{selectedEmployee ? "Edit" : "Add"} Employee</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input type="text" className="form-control mb-2" name="srNo" placeholder="Sr. No" value={formData.srNo} onChange={handleChange} />
            <input type="text" className="form-control mb-2" name="name" placeholder="Employee Name" value={formData.name} onChange={handleChange} />
            <textarea className="form-control mb-2" name="address" placeholder="Employee Address" value={formData.address} onChange={handleChange}></textarea>
            <input type="email" className="form-control mb-2" name="email" placeholder="Employee Email" value={formData.email} onChange={handleChange} />
            <input type="text" className="form-control mb-2" name="phone" placeholder="Employee Phone Number" value={formData.phone} onChange={handleChange} maxLength="10" />
            <input type="password" className="form-control mb-2" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <input type="date" className="form-control mb-2" name="joiningDate" value={formData.joiningDate} onChange={handleChange} />
            <div className="mb-2">
              <label>Gender:</label><br />
              <input type="radio" name="gender" value="Male" checked={formData.gender === "Male"} onChange={handleChange} /> Male
              <input type="radio" name="gender" value="Female" checked={formData.gender === "Female"} onChange={handleChange} className="ms-2" /> Female
            </div>
            <select className="form-control mb-2" name="qualification" value={formData.qualification} onChange={handleChange}>
              <option value="">Select Qualification</option>
              <option value="Graduate">Graduate</option>
              <option value="Post Graduate">Post Graduate</option>
            </select>
            <div className="mb-2">
              <label>Hobbies:</label><br />
              <input type="checkbox" name="hobbies" value="Reading" onChange={handleChange} /> Reading
              <input type="checkbox" name="hobbies" value="Sports" onChange={handleChange} className="ms-2" /> Sports
            </div>
            <div className="mb-2">
              <label>Upload Image:</label>
              <input type="file" className="form-control" name="image" onChange={handleChange} />
              {formData.image && <img src={formData.image} alt="Preview" className="mt-2" width="100" />}
            </div>
            <div className="mb-2">
              <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} /> I agree to terms & conditions
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={handleSubmit} data-bs-dismiss="modal">Submit</button>
            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
