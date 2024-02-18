import { bookReducers } from "./books/books.reducer";
import { combineReducers } from "redux";
 
const rootReducer = combineReducers({
    books: bookReducers,
})
 
export default rootReducer;