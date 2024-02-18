import { bookActionTypes, handlerActionTypes } from "./books.type";

function updateEditedBooks(state, payload) {
  return state.books.map((item) => {
    if (item.id === state.dataForEdit.id) {
      return { ...payload };
    } else {
      return item;
    }
  });
}

function updateDeletedBooks(state, payload) {
  return state.books.filter((item) => item.id !== payload);
}

const initialState = {
  books: [
    {
      isbn: "123-456-222",
      author: { AuthorFirstName: "Doe", AuthorLastName: "Jane" },
      editor: { EditorFirstName: "Smith", EditorLastName: "Jane" },
      title: "The Ultimate Database Study Guide",
      categories: [
        { id: 1, label: "Non-Fiction", value: "Non-Fiction" },
        { id: 2, label: "Noble", value: "Noble" },
      ],
    },
  ],
  formType: "Create",
  dataForEdit: {},
  msg: "",
};

export const bookReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case bookActionTypes.CREATE_BOOKS:
      return {
        ...state,
        books: [...state.books, payload],
        msg: "Successfully Created!",
      };

    case handlerActionTypes.SET_EDIT_MODE:
      return { ...state, formType: "Edit", dataForEdit: payload };

    case bookActionTypes.UPDATE_BOOK:
      return {
        ...state,
        formType: "Create",
        books: updateEditedBooks(state, payload),
        msg: "Successfully Updated !",
      };

    case bookActionTypes.DELETE_BOOK:
      return {
        ...state,
        books: updateDeletedBooks(state, payload),
        msg: "Successfully Deleted !",
      };

    default:
      return state;
  }
};
