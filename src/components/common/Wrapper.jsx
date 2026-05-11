import { useLocalStorage } from "../../hooks";
import { cn } from "../../utils/cn";

const Wrapper = ({ imgSrc = "", alt, className, imageClassName }) => {
  const path = window.location.pathname;

  const [allCompleted, setAllCompleted] = useLocalStorage("bbg_completed_chapters", {});
  const completed = !!allCompleted[path];

  const toggle = () => {
    setAllCompleted({ ...allCompleted, [path]: !allCompleted[path] });
  };

  return (
    <div className={cn("pb-16", className)}>
      <img
        className={cn("w-[60%] mx-auto object-cover", imageClassName)}
        src={imgSrc}
        alt={alt}
      />

      {/* Mark as Complete button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={toggle}
          className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200 shadow-sm active:scale-95
            ${completed
              ? "bg-green-500 border-green-500 text-white hover:bg-green-600 hover:border-green-600"
              : "bg-white border-gray-300 text-gray-600 hover:bg-green-50 hover:border-green-400 hover:text-green-600"
            }`}
        >
          <span
            className={`w-5 h-5 rounded-full border-2 flex items-center justify-center text-xs transition-all duration-200
              ${completed ? "bg-white border-white text-green-500" : "border-gray-400"}`}
          >
            {completed ? "✓" : ""}
          </span>
          {completed ? "Completed!" : "Mark as Complete"}
        </button>
      </div>
    </div>
  );
};

export default Wrapper;
