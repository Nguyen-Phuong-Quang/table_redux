import { combineReducers } from "redux";

import ListStudentReducer from "../components/ListStudent/ListStudentSlice";
import SearchReducer from "../components/Search/SearchSlice";

const reducer = combineReducers({
  filter: SearchReducer,
  studentsList: ListStudentReducer
})
export default reducer;
