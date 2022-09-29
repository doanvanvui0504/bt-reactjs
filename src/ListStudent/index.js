import { useRef, useState } from "react";

import "./ListStudent.css";

const regexPhone = /^0[1-9]{1,}[0-9]{7,}[0-9]?$/;

function ListStudent() {
  const nameRef = useRef();

  const [userName, setUserName] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [students, setStudents] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [indexofStudent, setIndexofStudent] = useState(null);

  const handleSubmit = () => {
    if (isEdit) {
      setStudents((prev) => {
        const newStudents = [...prev];
        newStudents[indexofStudent] = { userName, userPhone, userEmail };
        return newStudents;
      });
      setUserName("");
      setUserEmail("");
      setUserPhone("");
      nameRef.current.focus();
      setIsEdit(false);
    } else {
      if (userName && userPhone && userEmail) {
        if (regexPhone.test(userPhone)) {
          setStudents((prev) => [...prev, { userName, userPhone, userEmail }]);
          setUserName("");
          setUserEmail("");
          setUserPhone("");
          nameRef.current.focus();
        } else {
          alert("Hãy nhập đúng định dạng Phone.");
        }
      } else {
        alert("Bạn cần phải nhập đầy đủ thông tin.");
      }
    }
  };

  const handleEdit = (i) => {
    setIndexofStudent(i);
    setUserName(students[i].userName);
    setUserEmail(students[i].userEmail);
    setUserPhone(students[i].userPhone);
    setIsEdit(true);
  };
  const handleDelete = (i) => {
    setStudents((prev) => {
      const newList = [...prev];
      newList.splice(i, 1);
      return newList;
    });
  };

  return (
    <div className="list-student">
      <h2>List Student</h2>
      <div className="input-group">
        <label>Name: </label>
        <input
          ref={nameRef}
          type="text"
          name="studentName"
          placeholder="Enter the Name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Phone: </label>
        <input
          type="tel"
          name="studentPhone"
          placeholder="Enter the Phone..."
          value={userPhone}
          onChange={(e) => setUserPhone(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Email: </label>
        <input
          type="email"
          name="studentEmail"
          placeholder="Enter the Email..."
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students &&
            students.length > 0 &&
            students.map((item, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.userName}</td>
                <td>{item.userPhone}</td>
                <td>{item.userEmail}</td>
                <td>
                  <button onClick={() => handleEdit(i)}>Edit</button>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListStudent;
