//import { response } from "express";
import React from "react";
import ReactDOM from "react-dom";
import EmployeeAdd from "./EmployeeAdd.jsx";
import EmployeeFilter from "./EmployeeFilter.jsx";
import EmployeeList from "./EmployeeList.jsx";

//import { response } from "express";

//import { response } from "express";

// let kenny = "kehinde agboola";
// let peter = "peter smith";
// let matt = "matt fury";
// let amol = "Amol Shookup";
// let robin = "Robin wood";
// let aaron = "Aaron D. Tyler";
// let testname = "Brown James";
// const element = (
//   <ul style={{ color: "blue", fontSize: "16px" }}>
//     <li>{kenny}</li>
//     <li>{peter}</li>
//     <li>{matt}</li>
//     <li>{amol}</li>
//     <li>{robin}</li>
//     <li>{aaron}</li>
//     <li>{testname}</li>
//   </ul>
// );
// ReactDOM.render(element, document.getElementById("content"));

// function Welcome(props) {
//   return <h1> hello,{props.name}</h1>;
// }

// ReactDOM.render(
//   <Welcome name="Kehinde Agboola" />,
//   document.getElementById("content")
// );
// const initialemployees = [
//   {
//     id: 1,
//     name: "Kehinde Agboola",
//     ext: "1282",
//     email: "kehinde@vectacorp.com",
//     title: "Chief Executive",
//     dataHired: new Date("2016-11-03"),
//     isEmployed: true,
//   },
//   {
//     id: 2,
//     name: "Sally Smith",
//     ext: "9382",
//     email: "sally@vectacorp.com",
//     title: "Sales Director",
//     dataHired: new Date("2018-07-01"),
//     isEmployed: false,
//   },
// ];

// const sampleEmployee = {
//   name: "Holly Unlikely",
//   ext: "4352",
//   email: "holly@vectacorp.com",
//   title: "Marketing Director",
//   dataHired: new Date("2019-03-04"),
//   isEmployed: true,
// };

// class BorderWrap extends React.Component {
//   render() {
//     const borderStyle = { border: "1px solid silver", padding: 6 };
//     return <div style={borderStyle}>{this.props.children}</div>;
//   }
// }

// function EmployeeTable(props) {
//   const employeeRows = props.employees.map((employee) => (
//     <EmployeeRow
//       key={employee._id}
//       employee={employee}
//       deleteEmployee={props.deleteEmployee}
//     />
//   ));

//   return (
//     <table className="bordered-table">
//       <thead>
//         <tr>
//           <th>Name</th>
//           <th>Extension</th>
//           <th>Email</th>
//           <th>Title</th>
//           <th>Date Hired</th>
//           <th>Currently Employed?</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>{employeeRows}</tbody>
//     </table>
//   );
// }

// function EmployeeRow(props) {
//   function onDeleteClick() {
//     props.deleteEmployee(props.employee._id);
//   }
//   return (
//     <tr>
//       {/* <td>{employee.id}</td> */}
//       <td>{props.employee.name}</td>
//       <td>{props.employee.extension}</td>
//       <td>{props.employee.email}</td>
//       <td>{props.employee.title}</td>
//       <td>{props.employee.dateHired.toDateString()}</td>
//       <td>{props.employee.currentlyEmployed ? "Yes" : "No"}</td>
//       <td>
//         <button onClick={onDeleteClick}> DELETE</button>
//       </td>
//     </tr>
//   );
// }

// class EmployeeList extends React.Component {
//   constructor() {
//     super();
//     this.state = { employees: [] };
//     this.createEmployee = this.createEmployee.bind(this);
//     this.deleteEmployee = this.deleteEmployee.bind(this);
//   }

//   componentDidMount() {
//     this.loadData();
//   }
//   loadData() {
//     fetch("/api/employees")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("Total count of employees:", data.count);
//         data.employees.forEach((employee) => {
//           employee.dateHired = new Date(employee.dateHired);
//         });
//         this.setState({ employees: data.employees });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   createEmployee(employee) {
//     fetch("/api/employees", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(employee),
//     })
//       .then((response) => response.json())
//       .then((newEmployee) => {
//         newEmployee.employee.dateHired = new Date(
//           newEmployee.employee.dateHired
//         );
//         const newEmployees = this.state.employees.concat(newEmployee.employee);
//         this.setState({ employees: newEmployees });
//         console.log("Total count of new employess:", newEmployees.length);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }

//   deleteEmployee(id) {
//     fetch(`/api/employees/${id}`, {
//       method: "DELETE",
//     }).then((response) => {
//       if (!response.ok) {
//         console.log("Failed to delete employee.!!");
//       } else {
//         this.loadData();
//       }
//     });
//   }

//   render() {
//     return (
//       <React.Fragment>
//         <h1>Employees Management Application</h1>
//         <EmployeeFilter />
//         <hr />
//         <EmployeeTable
//           employees={this.state.employees}
//           deleteEmployee={this.deleteEmployee}
//         />
//         <hr />
//         <EmployeeAdd createEmployee={this.createEmployee} />
//       </React.Fragment>
//     );
//   }
// }

ReactDOM.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>,
  document.getElementById("content")
);
