/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { deleteBook, setFormEditMode } from "../redux/books/books.action";

export default function BookCard({bookDetails}) {
    const dispatch = useDispatch()
  return (
    <div className="border p-5">
      <p>
        <span className="font-semibold">ISBN:</span> {bookDetails.isbn}
      </p>
      <p>
        <span className="font-semibold">Book Title:</span> {bookDetails.title}
      </p>
      <p>
        <span className="font-semibold">Book Author:</span> {bookDetails.author.AuthorFirstName + bookDetails.author.AuthorLastName}
      </p>
      <p>
        <span className="font-semibold"> Book Editor:</span> {bookDetails.editor.EditorFirstName + bookDetails.editor.EditorLastName}
      </p>
   
        <p className="font-semibold">Book Category:</p> 
        <ul className="list-disc list-inside">
            {
                bookDetails.categories.map((category)=> <li key={category.id}> {category.value} </li>)
            }
        </ul>
     
      <button onClick={()=> dispatch(setFormEditMode(bookDetails))} className="mt-10 border bg-slate-900 w-full text-white">
        Update
      </button>
      <button onClick={()=> dispatch(deleteBook(bookDetails.id))} className="mt-2 border bg-red-600 w-full text-white">
        Delete
      </button>
    </div>
  );
}
