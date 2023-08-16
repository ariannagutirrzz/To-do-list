import "../../styles/item.css";
import { VscChromeClose } from "react-icons/vsc";
import { FaCheck } from "react-icons/fa";

function TodoItem(props) {
  return (
    <li className={`item ${props.completed && "item task-completed"}`}>
      <div className="icon-container">
        <FaCheck className="icon check" />

      </div>
      <p>{props.text}</p>

      <div className="icon-container">
        <VscChromeClose className="right-icon icon closed" />
      </div>
    </li>
  );
}

export { TodoItem };
