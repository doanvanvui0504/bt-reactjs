import React from "react";

import "./ListStudents.css";

const fakeDataStudents = [
  {
    ID: 1,
    Name: "Vui Doan",
    Age: 18,
    Address: "Da Nang",
  },
  {
    ID: 2,
    Name: "Duc Ky",
    Age: 16,
    Address: "Ha Noi",
  },
  {
    ID: 3,
    Name: "Nam Nguyen",
    Age: 21,
    Address: "HCM",
  },
  {
    ID: 4,
    Name: "Thanh Nguyen",
    Age: 18,
    Address: "Hai Phong",
  },
];

class ListStudents extends React.Component {
  render() {
    return (
      <div className="list__student">
        <table>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
          </tr>
          {fakeDataStudents.map((student, index) => (
            <Student key={index} data={student} />
          ))}
        </table>
      </div>
    );
  }
}

class Student extends React.Component {
  render() {
    return (
      this.props.data && (
        <tr>
          <td>{this.props.data.ID}</td>
          <td>{this.props.data.Name}</td>
          <td>{this.props.data.Age}</td>
          <td>{this.props.data.Address}</td>
        </tr>
      )
    );
  }
}

export default ListStudents;
