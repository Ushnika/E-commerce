import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";

export const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <>
      <div className={className} onClick={onClick}>
        <MdOutlineNavigateBefore style={{ color: "black", fontSize: "30px" }} />
      </div>
    </>
  );
};
export const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <>
      <div className={className} onClick={onClick}>
        <MdOutlineNavigateNext
          style={{ color: "black", fontSize: "30px", margin: "-11px" }}
        />
      </div>
    </>
  );
};
