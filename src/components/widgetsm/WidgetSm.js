import "./widgetsm.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetsmTitle">New Join Members</span>
      <ul className="widgetsmList">
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetsmUsers">
            <span className="widgetsmUserName">Anna Keller</span>
            <span className="widgetsmUserDesign">Sofware Developer</span>
          </div>
          <button className="widgetsmBtn">
            <VisibilityIcon className="widgetsmIcon" />
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetsmUsers">
            <span className="widgetsmUserName">Anna Keller</span>
            <span className="widgetsmUserDesign">Sofware Developer</span>
          </div>
          <button className="widgetsmBtn">
            <VisibilityIcon className="widgetsmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetsmUsers">
            <span className="widgetsmUserName">Anna Keller</span>
            <span className="widgetsmUserDesign">Sofware Developer</span>
          </div>
          <button className="widgetsmBtn">
            <VisibilityIcon className="widgetsmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetsmUsers">
            <span className="widgetsmUserName">Anna Keller</span>
            <span className="widgetsmUserDesign">Sofware Developer</span>
          </div>
          <button className="widgetsmBtn">
            <VisibilityIcon className="widgetsmIcon" />
            Display
          </button>
        </li>
        <li className="widgetsmListItem">
          <img
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetsmUsers">
            <span className="widgetsmUserName">Anna Keller</span>
            <span className="widgetsmUserDesign">Sofware Developer</span>
          </div>
          <button className="widgetsmBtn">
            <VisibilityIcon className="widgetsmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
