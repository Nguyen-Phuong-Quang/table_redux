const initState = {
  id: "",
  name: "",
  birthday: "",
  phoneNumber: "",
  email: "",
};

const SearchReducer = (state = initState, action) => {
  switch (action.type) {
    case "SEARCH_STUDENT":
      return action.payload;
    default:
      return state;
  }
};

export default SearchReducer;
