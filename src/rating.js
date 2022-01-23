import "./rating.css";
import { IoIosStarOutline } from "react-icons/io";
export function Rating() {
  return (
    <>
      <h1>Rating</h1>
      <h2>Basic</h2>
      <div className="box">
        <h3>Controlled</h3>
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
        <IoIosStarOutline />
      </div>
    </>
  );
}
