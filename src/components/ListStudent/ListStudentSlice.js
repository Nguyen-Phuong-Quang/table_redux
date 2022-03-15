import axios from "axios";

const initState = [];

const ListStudentReducer = (state = initState, action) => {
  switch (action.type) {
    case "RENDER_LIST":
      return [...action.payload];

    case "ADD_STUDENT":
      return [...state, action.payload];

    case "DELETE_STUDENT":
      const newList = state.filter((item) => item.id !== action.payload);
      return newList;

    case "UPDATE_STUDENT":
      const updatedItems = [...state];
      for (let i in updatedItems) {
        if (updatedItems[i].id === action.payload.id) {
          updatedItems[i] = action.payload.value;
          break;
        }
      }
      return updatedItems;
    default:
      return state;
  }
};

export default ListStudentReducer
