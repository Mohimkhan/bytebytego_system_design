import { cn } from "../../utils/cn";

const Wrapper = ({ imgSrc = "", alt, className, imageClassName }) => {
  return (
    <div className={cn("", className)}>
      <img
        className={cn("w-[60%] mx-auto object-cover", imageClassName)}
        src={imgSrc}
        alt={alt}
      />
    </div>
  );
};

export default Wrapper;
