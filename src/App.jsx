import { useDispatch } from "react-redux";
import BooksFeed from "./components/BooksFeed";
import Form from "./components/Form";
import { setDone } from "./redux/books/books.action";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <button className="border bg-black text-white mt-5" onClick={() => dispatch(setDone("done"))}>
        Change to done
      </button>
      <div className="flex mt-20 gap-10">
        <Form />
        <BooksFeed />
      </div>
    </>
  );
}

export default App;
