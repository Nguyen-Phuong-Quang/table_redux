export const renderList = (payload) => ({
  type: "RENDER_LIST",
  payload,
});

export const addStudent = (payload) => ({
  type: "ADD_STUDENT",
  payload,
});

export const deleteStudent = (payload) => ({
  type: "DELETE_STUDENT",
  payload,
});

export const updateStudent = (payload) => ({
  type: "UPDATE_STUDENT",
  payload,
});

export const searchStudent = (payload) => ({
    type: "SEARCH_STUDENT",
    payload,
  });
