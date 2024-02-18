import { useSelector } from "react-redux";
import BookCard from "./BookCard";


export default function BooksFeed() {

  const {books, msg} = useSelector((state) => state.books)

 

  return (
    <div>
      <h1 className="font-bold text-3xl ">Books Feed </h1>
      <div className="mt-5">
        <div className="flex items-center gap-10">
          <div>
             <input type="text" placeholder="Search by author name" className="border ps-2 outline-none" />
          </div>

          <div className="flex items-center gap-2">
            <p>Filter by Category</p>
            <select name="" id="" className="border outline-none">
              <option value="">Non Fiction</option>
              <option value="">Noble</option>
              <option value="">Technology</option>
            </select>
          </div>
        </div>
      </div>
      {
        msg && <p className="text-green-500 font-semibold mt-10">{msg}</p>
      }
      <div className="mt-10">
        {
          books?.map((book)=>  <BookCard key={book.id} bookDetails={book} />)
        }
      </div>
    </div>
  );
}
