import { SearchBar } from "./SearchBar";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { FaList } from "react-icons/fa";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <button id="wd-search-bar" className="btn btn-lg wd-search-bar col-8" type="button">
        <SearchBar />
      </button>
      <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary">+ Group</button>
      <button id="wd-add-assignment" className="btn btn-lg btn-danger">+ Assignment</button>
      <div className="wd-margin-assignment-box bg-secondary p-3">
      <h3 id="wd-assignments-title">
      <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <span className="space"></span> 40% of Total +
        <IoEllipsisVertical className="fs-4" />
      </h3>
      </div>
      <div id="wd-assignment-list">
      <div className="assignment-container">
        
          <div className="wd-assignment-list-item">
            <div className="assignment-header">
              <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              <BsGripVertical className="me-2 fs-3" /> <span className="smallspace"></span>
                <FaList></FaList> <span className="smallspace"></span>
                <strong>A1</strong>
              </a>
              <ModuleControlButtons />
            </div>
            <div>
              <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </div>
        
        
          <div className="wd-assignment-list-item">
            <div className="assignment-header">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
            <BsGripVertical className="me-2 fs-3" /> <span className="smallspace"></span>
            <FaList></FaList> <span className="smallspace"></span>
                <strong>A2</strong>
              </a>
              <ModuleControlButtons />
            </div>
            <div>
              <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> May 13 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </div>
        
          <div className="wd-assignment-list-item">
            <div className="assignment-header">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
            <BsGripVertical className="me-2 fs-3" /> <span className="smallspace"></span>
            <FaList></FaList> <span className="smallspace"></span>
                <strong>A3</strong>
              </a>
              <ModuleControlButtons />
            </div>
            <div>
              <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> May 20 at 12:00am | <strong>Due</strong> May 20 at 11:59pm | 100 pts
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
