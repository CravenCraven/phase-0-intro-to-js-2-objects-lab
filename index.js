// Example employee object
const employee = {
    name: 'John',
    role: 'Developer',
    age: 30,
  };
  
  // 1) Returns an employee with the original key value pairs and the new key value pair
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object with a shallow copy of the original employee
    const newEmployee = Object.assign({}, employee);
    // Add or update the key value pair
    newEmployee[key] = value;
    return newEmployee;
  }
  
  // 2) Updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the original employee with the new key value pair
    employee[key] = value;
    return employee;
  }
  
  // 3) Deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object with a shallow copy of the original employee
    const newEmployee = Object.assign({}, employee);
    // Delete the specified key from the new object
    delete newEmployee[key];
    return newEmployee;
  }
  
  // 4) Does not modify the original employee (it is non-destructive)
  // This function is similar to the previous one and does not need a separate implementation.
  
  // 5) Returns employee without the deleted key/value pair
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key from the original employee
    delete employee[key];
    return employee;
  }
  
  // 6) Modifies the original employee (it is destructive)
  // This function is similar to the previous one and does not need a separate implementation.
  
  // Example usages:
  const newEmployee1 = updateEmployeeWithKeyAndValue(employee, 'salary', 50000);
  console.log('New Employee with added key:', newEmployee1);
  
  const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'role', 'Manager');
  console.log('Updated Employee with role change:', newEmployee2);
  
  const newEmployee3 = deleteFromEmployeeByKey(employee, 'age');
  console.log('New Employee with age removed:', newEmployee3);
  
  const newEmployee4 = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  console.log('Updated Employee with name removed:', newEmployee4);
  
  console.log('Original Employee (unchanged):', employee);
  