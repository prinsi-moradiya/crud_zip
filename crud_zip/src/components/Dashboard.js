import React from "react";
import EmployeeTable from "./EmployeeTable";
import EmployeeForm from "./EmployeeForm";

const Dashboard = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">CRUD Operation</h2>
      <div className="d-flex">
        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#employeeModal">
          Add Employee
        </button>
      </div>
      <EmployeeTable />
      <EmployeeForm />
    </div>
  );
};

export default Dashboard;