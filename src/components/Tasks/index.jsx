import "./Tasks.scss";
import editSVG from "../../assets/img/edit.svg";

export default function Tasks() {
  return (
    <div className="tasks">
      <h2 className="tasks__title">
        Фронтенд
        <img src={editSVG} alt="Edit icon" />
      </h2>
      <div className="tasks__item">
        <div className="tasks__items-row">
          <div className="checkbox">
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              <svg
                width="11"
                height="8"
                viewBox="0 0 11 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.29999 1.20001L3.79999 6.70001L1.29999 4.20001"
                  stroke="#000"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </label>
          </div>
          <p>React Hooks</p>
        </div>
      </div>
    </div>
  );
}
