fetch("/api/departments")
  .then((response) => response.json())
  .then((departments) => {
    const headers = document.getElementById("departmentHeaders");
    const rows = document.getElementById("employeeRows");

    departments.forEach((department) => {
      const th = document.createElement("th");
      th.textContent = department.name;
      headers.appendChild(th);

      fetch(`/api/departments/${department._id}/employees`)
        .then((response) => response.json())
        .then((employees) => {
          const td = document.createElement("td");
          const employeeList = document.createElement("ul");
          employees.forEach((employee) => {
            const li = document.createElement("li");
            li.textContent = `${employee.name} ${employee.surname}`;
            employeeList.appendChild(li);
          });
          td.appendChild(employeeList);
          rows.appendChild(td);
        })
        .catch((err) =>
          console.error("Error fetching employees for department:", err)
        );
    });
  })
  .catch((err) => console.error("Error fetching departments:", err));
