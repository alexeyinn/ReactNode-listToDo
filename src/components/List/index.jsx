import classNames from "classnames";
import axios from "axios";

import Badge from "../Badge";
import "./List.scss";
import removeSVG from "../../assets/img/remove.svg";

export default function List({
  items,
  isRemovable,
  onClick,
  onRemove,
  onClickItem,
  activeItem
}) {
  const removeList = (item) => {
    if (window.confirm("Вы действительно хотите удалить список задач?")) {
      axios
        .delete("https://2dof6-3001.sse.codesandbox.io/lists/" + item.id)
        .then(() => {
          onRemove(item.id);
        });
    }
  };

  return (
    <ul className="list" onClick={onClick}>
      {items.map((item, index) => (
        <li
          key={index}
          className={classNames(item.className, {
            active: item.active
              ? item.active
              : activeItem && activeItem.id === item.id
          })}
          onClick={onClickItem && (() => onClickItem(item))}
        >
          <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
          <span>
            {item.name}
            {item.tasks && ` (${item.tasks.length})`}
          </span>
          {isRemovable && (
            <img
              className="list__remove-icon"
              src={removeSVG}
              alt="Remove icon"
              onClick={() => removeList(item)}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
