import Employee from "../models/Employee.js";

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find({});

    res.status(200).json({ employees, count: employees.length });
    //res.status(200).json({ employees });
    //res.send("Get all employees");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const getEmployee = async (req, res) => {
  try {
    let { id: employeeId } = req.params;
    const employee = await Employee.findOne({ _id: employeeId });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id:  ${employeeId} found` });
    }

    res.status(200).json({ employee });
    //res.send("Get an employee");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
  //res.send("Get an employee");
};

const createEmployeeView = async (req, res) => {
  res.render("add", { title: "Add Employee", message: req.flash("message") });
};

const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({ employee });
    //res.status(201).json({ msg: "Employee added successfully" });
    //res.send("Create a new employee");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const updateEmployee = async (req, res) => {
  try {
    let { id: employeeId } = req.params;
    const employee = await Employee.findOneAndUpdate(
      { _id: employeeId },
      req.body,
      { new: true, runValidators: true }
    );
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id:  ${employeeId} found` });
    }
    req.flash("message", "Successfuly updated employee");
    res.redirect("/update", employeeId);
    // res
    //   .status(200)
    //   .json({ msg: `Successfuly updated employee with id ${employeeId}` });
  } catch (err) {
    res.status(500).json({ message: err });
  }
  //res.send("Update an employee");
};

const updateEmployeeView = async (req, res) => {
  try {
    let { id: employeeId } = req.params;
    const employee = await Employee.findOne({ _id: employeeId });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id:  ${employeeId} found` });
    }
    res.render("update", {
      title: "Update Employee",
      employee,
      message: req.flash("message"),
    });
    //res.status(200).json({ employee });
    //res.send("Get an employee");
  } catch (err) {
    res.status(500).json({ msg: err });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    let { id: employeeId } = req.params;
    const employee = await Employee.findOneAndDelete({ _id: employeeId });
    if (!employee) {
      return res
        .status(404)
        .json({ msg: `No employee with id:  ${employeeId} found` });
    }
    req.flash("message", "Employee successfully deleted");
    res.redirect("/");
    // res
    //   .status(200)
    //   .json({ message: `Employee successfully deleted` });
    //res.send("Delete an employee");
  } catch (err) {
    res.status(500).json({ message: err });
  }

  //res.send("Delete an employee");
};

export {
  getAllEmployees,
  getEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  createEmployeeView,
  updateEmployeeView,
};
