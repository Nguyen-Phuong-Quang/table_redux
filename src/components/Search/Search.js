import { useDispatch, useSelector } from "react-redux";
import { searchStudent } from "../../redux/actions";

import { useState } from "react";

function Search() {
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState({
    id: "",
    name: "",
    birthday: "",
    phoneNumber: "",
    email: "",
  });

  const handleSearchStudent = (searchState) => {
    setSearchValue(searchState);
    dispatch(searchStudent(searchState));
  };

  return (
    <div className="row">
      <div className="col l-2">
        <input
          value={searchValue.id}
          onChange={(e) => {
            handleSearchStudent({
              ...searchValue,
              id: e.target.value,
            });
          }}
        />
      </div>

      <div className="col l-2">
        <input
          value={searchValue.name}
          onChange={(e) => {
            handleSearchStudent({
              ...searchValue,
              name: e.target.value,
            });
          }}
        />
      </div>

      <div className="col l-2">
        <input
          value={searchValue.birthday}
          onChange={(e) => {
            handleSearchStudent({
              ...searchValue,
              birthday: e.target.value,
            });
          }}
        />
      </div>

      <div className="col l-2">
        <input
          value={searchValue.phoneNumber}
          onChange={(e) => {
            handleSearchStudent({
              ...searchValue,
              phoneNumber: e.target.value,
            });
          }}
        />
      </div>

      <div className="col l-2">
        <input
          value={searchValue.email}
          onChange={(e) => {
            handleSearchStudent({
              ...searchValue,
              email: e.target.value,
            });
          }}
        />
      </div>

      <div className="col l-2"></div>
    </div>
  );
}

export default Search;
