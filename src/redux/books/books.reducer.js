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
  books: [],
  formType: "Create",
  dataForEdit: {},
  msg: "",
  data:{
    child1:{
      value: "x",
      child2:{
        value:"y",
        child3:{
          value:2,
          child4:{
            value: 1,
            child5: {
              value:2,
              child6:{
                value: "last"
              }
            }
          }
        }
      }
    }
  }
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


    case handlerActionTypes.SET_DONE:
      {
      const copyOfData = structuredClone(state.data)
      
      copyOfData.child1.child2.child3.child4.child5.child6.value = payload

      return {
        ...state,
        data:copyOfData
      };
     }
    default:
      return state;
  }
};
