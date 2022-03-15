import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { studentsListSelector } from "../../redux/selectors";
import {
  renderList,
  addStudent,
  deleteStudent,
  updateStudent,
} from "../../redux/actions";
import { useState, useEffect } from "react";

const studentsApi = "http://localhost:3000/student";

function ListStudent() {
  const dispatch = useDispatch();
  const studentsList = useSelector(studentsListSelector);

  const emptyInput = {
    id: "",
    name: "",
    birthday: "",
    phoneNumber: "",
    email: "",
  };

  const [inputValue, setInputValue] = useState(emptyInput);
  const [buttonState, setButtonState] = useState("Add");
  const [editIndexItem, setEditIndexItem] = useState("");

  // First time render
  useEffect(() => {
    axios
      .get(`http://localhost:3000/student`)
      .then((res) => {
        dispatch(renderList(res.data));
      })
      .catch((error) => console.log(error));
  }, []);

  // ADD
  const handleAddStudent = () => {
    axios
      .post(`http://localhost:3000/student`, inputValue)
      .then((res) => {
        dispatch(addStudent(res.data));
        setInputValue(emptyInput);
      })
      .catch(() => {
        alert("ID existed!");
      });
  };

  // DELETE
  const handleDeleteStudent = (id) => {
    axios
      .delete(`http://localhost:3000/student/${id}`)
      .then((res) => {
        dispatch(deleteStudent(id));
      })
      .catch(() => {
        alert("ID not existed!");
      });
  };

  // PUT VALUE INTO INPUT TAG
  const putValueIntoInputTag = (id) => {
    setButtonState("Update");
    for (let i of studentsList) {
      if (i.id === id) {
        setEditIndexItem(id);
        setInputValue(i);
        break;
      }
    }
  };

  // UPDATE
  const handleUpdateStudent = (id) => {
    axios
      .put(`http://localhost:3000/student/${id}`, inputValue)
      .then((res) => {
        dispatch(updateStudent({ id, value: inputValue }));
        setInputValue(emptyInput);
        setButtonState("Add");
      })
      .catch(() => {
        alert("ID existed!");
      });
  };

  return (
    <>
      <div className="row">
        <h4 className="col l-2">ID</h4>
        <h4 className="col l-2">Name</h4>
        <h4 className="col l-2">Birthday</h4>
        <h4 className="col l-2">Phone number</h4>
        <h4 className="col l-2">Email</h4>
        <h4 className="col l-2"></h4>
      </div>

      {studentsList.map((item, index) => (
        <div key={index} className="row">
          <div className="col l-2">
            <span>{item.id}</span>
          </div>
          <div className="col l-2">
            <span>{item.name}</span>
          </div>
          <div className="col l-2">
            <span>{item.birthday}</span>
          </div>
          <div className="col l-2">
            <span>{item.phoneNumber}</span>
          </div>
          <div className="col l-2">
            <span>{item.email}</span>
          </div>
          <div className="col l-2">
            <button onClick={() => putValueIntoInputTag(item.id)}>Edit</button>
            <button onClick={() => handleDeleteStudent(item.id)}>Delete</button>
          </div>
        </div>
      ))}

      <div className="row">
        <div className="col l-2">
          <input
            value={inputValue.id}
            onChange={(e) =>
              setInputValue((prev) => ({
                ...prev,
                id: e.target.value,
              }))
            }
          />
        </div>

        <div className="col l-2">
          <input
            value={inputValue.name}
            onChange={(e) =>
              setInputValue((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
          />
        </div>

        <div className="col l-2">
          <input
            value={inputValue.birthday}
            onChange={(e) =>
              setInputValue((prev) => ({
                ...prev,
                birthday: e.target.value,
              }))
            }
          />
        </div>

        <div className="col l-2">
          <input
            value={inputValue.phoneNumber}
            onChange={(e) =>
              setInputValue((prev) => ({
                ...prev,
                phoneNumber: e.target.value,
              }))
            }
          />
        </div>

        <div className="col l-2">
          <input
            value={inputValue.email}
            onChange={(e) =>
              setInputValue((prev) => ({
                ...prev,
                email: e.target.value,
              }))
            }
          />
        </div>

        <div className="col l-2">
          <button
            onClick={
              buttonState === "Add"
                ? handleAddStudent
                : () => handleUpdateStudent(editIndexItem)
            }
          >
            {buttonState}
          </button>
        </div>
      </div>
    </>
  );
}

export default ListStudent;
