import React from "react";
import { useParams } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments.filter(assignment => assignment.course === cid);
  const course = db.courses.find(course => course._id === cid);
  
  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div id="wd-assignments">
      <button id="wd-search-bar" className="btn btn-lg wd-search-bar col-8" type="button">
        <SearchBar />
      </button>
      <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary">+ Group</button>
      <button id="wd-add-assignment" className="btn btn-lg btn-danger">+ Assignment</button>
      <div className="wd-margin-assignment-box bg-secondary p-3">
        <h3 id="wd-assignments-title">
          <BsGripVertical className="fs-3" /> <span className="smallspace"></span> 
          ASSIGNMENTS <span className="space"></span> <span className="space"></span> 40% of Total +
          <span className="smallspace"></span>
          <IoEllipsisVertical className="fs-4" />
        </h3>
      </div>
      <div id="wd-assignment-list">
        <div className="assignment-container">
          {assignments.map(assignment => (
            <div className="wd-assignment-list-item" key={assignment._id}>
              <div className="assignment-header">
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <BsGripVertical className="fs-3" /> <span className="smallspace"></span>
                  <FaList /> <span className="smallspace"></span>
                  <strong>{assignment.title}</strong><span className="space"></span><span className="space"></span> 
                  <ModuleControlButtons />
                </a>
              </div>
              <div>
                <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> {course.startDate} | <strong>Due</strong> {course.endDate} | 100 pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
