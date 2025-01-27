import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="d-flex justify-content-end align-items-center flex-wrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-3">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>
      <div className="dropdown d-inline me-3">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All
        </button>
        <ul className="dropdown-menu">
          <li>
            <a id="wd-publish-all-modules-and-items-btn" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-publish-modules-only-button" className="dropdown-item" href="#">
              <GreenCheckmark />
              Publish modules only
            </a>
          </li>
          <li>
            <a id="wd-unpublish-all-modules-and-items-btn" className="dropdown-item" href="#">
              Publish all modules and items
            </a>
          </li>
          <li>
            <a id="wd-unpublish-modules-only-button" className="dropdown-item" href="#">
              Publish modules only
            </a>
          </li>
        </ul>
      </div>
      <button id="wd-view-progress" className="btn btn-lg btn-secondary me-3" type="button">
        View Progress
      </button>
      <button id="wd-collapse-all" className="btn btn-lg btn-secondary" type="button">
        Collapse All
      </button>
    </div>
  );
}
