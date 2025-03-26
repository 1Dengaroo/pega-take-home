import { FC, useState } from "react";
import { Link } from "react-router-dom";

const CreateMenu: FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative px-4">
      <button
        className="flex items-center gap-2 w-full py-2 hover:bg-gray-700"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="text-xl">＋</span>
        <span className="hidden lg:inline">Create</span>
      </button>
      {open && (
        <div className="absolute left-full top-0 mt-2 w-40 bg-gray-800 shadow-lg rounded-md">
          <Link to="/create/bug" className="block px-4 py-2 hover:bg-gray-700">
            Bug
          </Link>
          <Link to="/create/epic" className="block px-4 py-2 hover:bg-gray-700">
            Epic
          </Link>
        </div>
      )}
    </div>
  );
};

export default CreateMenu;
