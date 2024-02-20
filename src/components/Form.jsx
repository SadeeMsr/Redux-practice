import { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { useDispatch, useSelector } from "react-redux";
import { createBook, updateBook } from "../redux/books/books.action";

const options = [
  { id: 1, label: "Non-Fiction", value: "Non-Fiction" },
  { id: 2, label: "Noble", value: "Noble" },
  { id: 3, label: "Technology", value: "Technology" },
  { id: 4, label: "Recipe", value: "Recipe" },
];

export default function Form() {
  const { formType, dataForEdit } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  const [isbn, setIsbn] = useState(dataForEdit.isbn || "");
  const [AuthorFirstName, setAuthorFirstName] = useState(
    dataForEdit.AuthorFirstName || ""
  );
  const [AuthorLastName, setAuthorLastName] = useState(
    dataForEdit.AuthorLastName || ""
  );
  const [EditorFirstName, setEditorFirstName] = useState(
    dataForEdit.EditorFirstName || ""
  );
  const [EditorLastName, setEditorLastName] = useState(
    dataForEdit.EditorLastName || ""
  );
  const [title, setTitle] = useState(dataForEdit ? dataForEdit.title : "");
  const [categories, setSelectedCategories] = useState(
    dataForEdit.categories || []
  );

  function handleFormData(e) {
    switch (e.target.name) {
      case "isbn":
        return setIsbn(e.target.value);
      case "AuthorFirstName":
        return setAuthorFirstName(e.target.value);
      case "AuthorLastName":
        return setAuthorLastName(e.target.value);
      case "EditorFirstName":
        return setEditorFirstName(e.target.value);
      case "EditorLastName":
        return setEditorLastName(e.target.value);
      case "title":
        return setTitle(e.target.value);
      default:
        break;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formattedData = {
      isbn,
      author: {
        AuthorFirstName,
        AuthorLastName,
      },
      editor: {
        EditorFirstName,
        EditorLastName,
      },
      title,
      categories,
    };

    formType === "Create"
      ? dispatch(createBook(formattedData))
      : dispatch(updateBook(formattedData));
  }


  return (    
      <form onSubmit={handleSubmit} className=" ms-20 border w-[30%] p-10">
        <p className="font-semibold">ISBN:</p>
        <input
          type="text"
          name="isbn"
          id="isbn"
          className=" ps-2 border outline-none"
          placeholder="Enter ISBN"
          value={isbn || ""}
          onChange={handleFormData}
        />

        <p className="mt-5 font-semibold">Author</p>
        <input
          type="text"
          name="AuthorFirstName"
          className=" ps-2 mt-5 border outline-none"
          placeholder="Enter First Name"
          value={AuthorFirstName || ""}
          onChange={handleFormData}
        />
        <input
          type="text"
          name="AuthorLastName"
          className=" ps-2 mt-5 ms-5 border outline-none"
          placeholder="Enter Last Name"
          value={AuthorLastName || ""}
          onChange={handleFormData}
        />

        <p className="mt-5 font-semibold">Editor:</p>
        <input
          type="text"
          name="EditorFirstName"
          className=" ps-2 mt-5 border outline-none"
          placeholder="Enter First Name"
          value={EditorFirstName || ""}
          onChange={handleFormData}
        />
        <input
          type="text"
          name="EditorLastName"
          className=" ps-2 mt-5 ms-5 border outline-none"
          placeholder="Enter First Name"
          value={EditorLastName || ""}
          onChange={handleFormData}
        />

        <p className="mt-5 font-semibold">Title:</p>
        <input
          type="text"
          name="title"
          className=" ps-2 border outline-none"
          placeholder="Enter Title"
          value={title || ""}
          onChange={handleFormData}
        />

        <label className="mt-5 font-semibold">Choose some categories:</label>
        <MultiSelect
          options={options}
          value={categories || []}
          onChange={setSelectedCategories}
          labelledBy={"Select"}
        />
        <button
          type="submit"
          className="w-full border bg-slate-800 text-white mt-5 py-3"
        >
          {formType}
        </button>
      </form>
  );
}
