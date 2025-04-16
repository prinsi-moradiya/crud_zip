import React from "react";
// import { EmployeeProvider } from "./components/EmployeeContext";
import { EmployeeProvider } from "./context/EmployeeContext";

import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <EmployeeProvider>
      <Dashboard />
    </EmployeeProvider>
  );
};

export default App;