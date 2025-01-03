const Employee = require("./../models/employee");
const Department = require("./../models/department");

// Create and Save a new Employee
exports.createEmployee = async (req, res) => {
  if (!req.body.name || !req.body.surname) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  var dprtmnt = null;
  if (req.body.department) {
    dprtmnt = await Department.findOne({
      name: req.body.department,
    });
  }

  const employee = new Employee({
    name: req.body.name,
    surname: req.body.surname,
    department: dprtmnt,
  });

  await employee
    .save(employee)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Employee.",
      });
    });
};

// Retrieve all Employees from the db.
exports.findAllEmployees = async (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Employee.find(condition)
    .populate("department")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving employees.",
      });
    });
};

// Find a single Employee with an id
exports.findOneEmployee = async (req, res) => {
  const id = req.params.id;

  await Employee.findById(id)
    .populate("department")
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Employee with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Employee with id=" + id });
    });
};

// Update an Employee by the id in the request
exports.updateEmployee = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  await Employee.findByIdAndUpdate(id, req.body, {
    new: true,
    runValidators: true,
  })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Employee with id=${id}. Employee was not found!`,
        });
      } else res.send({ message: "Employee was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id,
      });
    });
};

// Delete an Employee with the specified id in the request
exports.deleteEmployee = async (req, res) => {
  const id = req.params.id;

  await Employee.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Employee with id=${id}. Employee was not found!`,
        });
      } else {
        res.send({
          message: "Employee was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Employee with id=" + id + ":" + err,
      });
    });
};

exports.createDepartment = async (req, res) => {
  if (!req.body.name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  } else {
    const checkDepartment = await Department.findOne({ name: req.body.name });
    if (checkDepartment) {
      return res.status(409).json({ message: "Department already exists" });
    }
    const department = new Department({
      name: req.body.name,
    });

    await department
      .save(department)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Department.",
        });
      });
  }
};

exports.findAllDepartments = async (req, res) => {
  const name = req.query.name;
  var condition = name
    ? { name: { $regex: new RegExp(name), $options: "i" } }
    : {};

  Department.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving departments.",
      });
    });
};

exports.findOneDepartment = async (req, res) => {
  const id = req.params.id;

  await Department.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: "Not found Department with id " + id });
      else res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "Error retrieving Department with id=" + id });
    });
};

exports.updateDepartment = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!",
    });
  }

  const id = req.params.id;

  await Department.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Department with id=${id}. Department was not found!`,
        });
      } else res.send({ message: "Department was updated successfully." });
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Department with id=" + id,
      });
    });
};

exports.deleteDepartment = async (req, res) => {
  const id = req.params.id;

  await Department.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Department with id=${id}. Department was not found!`,
        });
      } else {
        res.send({
          message: "Department was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Department with id=" + id,
      });
    });
};
