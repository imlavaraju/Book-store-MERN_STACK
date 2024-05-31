import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
        onClick={(event) => event.stopPropagation()}
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />

        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-blue-400 text-2xl" />
          <h2 className="my-1">{book.bookname}</h2>
        </div>

        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-blue-400 text-2xl" />
          <h2 className="my-1">{book.author_name}</h2>
        </div>
        <h2 className="w-fit px-4 py-1 bg-blue-300 rounded-lg">
          {book.published_year}
        </h2>
        <p className="mt-4">Description</p>
        <p className="my-2">{book.description}</p>
      </div>
    </div>
  );
};

export default BookModal;
