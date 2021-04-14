import axios from "axios";

import "./Tasks.scss";
import editSVG from "../../assets/img/edit.svg";

import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

export default function Tasks({
  list,
  onEditTitle,
  onAddTask,
  onRemoveTask,
  withoutEmpty,
  onEditTask,
  onCompleteTask
}) {
  const editTitle = () => {
    const newTitle = window.prompt("Введите название списка", list.item);
    if (newTitle) {
      onEditTitle(list.id, newTitle);
      axios
        .patch("http://localhost:3001/lists/" + list.id, {
          name: newTitle
        })
        .catch(() => {
          alert(
            "Не удалось обновить название списка задач на сервере! Обновите страницу и повторите попытку."
          );
        });
    }
  };

  return (
    <div className="tasks">
      <h2 style={{ color: list.color.hex }} className="tasks__title">
        {list.name}
        <img onClick={editTitle} src={editSVG} alt="Edit icon" />
      </h2>
      <div className="tasks__items">
        {!withoutEmpty && list.tasks && !list.tasks.length && (
          <h2>Задачи отсутсвуют</h2>
        )}
        {list.tasks &&
          list.tasks.map((task) => (
            <Task
              key={task.id}
              {...task}
              list={list}
              onRemove={onRemoveTask}
              onEditTask={onEditTask}
              onCompleteTask={onCompleteTask}
            />
          ))}
        <AddTaskForm key={list.id} list={list} onAddTask={onAddTask} />
      </div>
    </div>
  );
}
