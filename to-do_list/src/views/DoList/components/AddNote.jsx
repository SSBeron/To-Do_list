import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function AddNote() {
  return (
    <div className="flex justify-between items-center space-x-2 my-2 border-b border-black">
      <div className="flex w-full">
        <input
          className="m-1 p-2 w-full  rounded-lg text-lg bg-transparent hover:bg-gray-200 active:border-hidden"
          type="text"
          placeholder="Add note"
        />
      </div>
      <div className="flex-col justify-center text-2xl rounded-md bg-red-100 active:bg-white">
        <button className="w-8 h-4 ">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}
