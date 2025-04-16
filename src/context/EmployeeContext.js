import React, { createContext, useState, useCallback } from "react";

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = useCallback((employee) => {
    setEmployees((prev) => [...prev, { id: prev.length + 1, ...employee }]);
  }, []);

  const updateEmployee = useCallback((updatedEmployee) => {
    setEmployees((prev) => prev.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp));
  }, []);

  const deleteEmployee = useCallback((id) => {
    setEmployees((prev) => prev.filter(emp => emp.id !== id));
  }, []);

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee, setSelectedEmployee, selectedEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};
