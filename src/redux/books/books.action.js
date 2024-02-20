import { bookActionTypes, handlerActionTypes } from "./books.type";


export function createBook(data) {
    data.id = crypto.randomUUID()
    return {type: bookActionTypes.CREATE_BOOKS, payload: data }
}

export function setFormEditMode(dataForEdit) {
    return {type: handlerActionTypes.SET_EDIT_MODE, payload: dataForEdit }
}


export function updateBook(data) {
    return {type: bookActionTypes.UPDATE_BOOK, payload: data }
}

export function deleteBook(id) {
    return {type: bookActionTypes.DELETE_BOOK, payload: id }
}


export function setDone(str) {
    return {type: handlerActionTypes.SET_DONE, payload: str }
}