import React, { useContext } from "react";
import { EmployeeContext } from "../context/EmployeeContext";

const EmployeeTable = () => {
  const { employees, setSelectedEmployee, deleteEmployee } = useContext(EmployeeContext);

  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          <th>Sr. No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Address</th>
          <th>Joining Date</th>
          <th>Gender</th>
          <th>Qualification</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index}>
            <td>{employee.srNo}</td>
            <td>{employee.name}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
            <td>{employee.address}</td>
            <td>{employee.joiningDate}</td>
            <td>{employee.gender}</td>
            <td>{employee.qualification}</td>
            {/* <td>{Array.isArray(employee.hobbies) ? employee.hobbies.join(", ") : employee.hobbies || "N/A"}</td> */}
            <td>
                {employee.image && <img src={employee.image} alt="Employee" width="50" height="50" />}
            </td>
            <td>
              <button className="btn btn-info btn-sm" onClick={() => setSelectedEmployee(employee)} data-bs-toggle="modal" data-bs-target="#employeeModal">Edit</button>
              <button className="btn btn-danger btn-sm ms-2" onClick={() => deleteEmployee(employee.srNo)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeTable;
