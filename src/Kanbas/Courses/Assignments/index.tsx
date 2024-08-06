import React from "react";
import { Link, useParams } from "react-router-dom";
import { SearchBar } from "./SearchBar";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { BsGripVertical } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import * as db from "../../Database";
import { useSelector } from "react-redux";
import { RootState } from '../../store'; 
import { useDispatch } from 'react-redux';
import { deleteAssignment } from './reducer'; // Import your action creators


export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const handleDelete = (assignmentId: string) => {
    if (window.confirm("Are you sure you want to delete this assignment?")){
  dispatch(deleteAssignment(assignmentId));
    }
};
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);
  const courseAssignments = assignments.filter((assignment: { course: string | undefined; }) => assignment.course === cid);
  //console.log(courseAssignments);
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
      <button id="wd-add-assignment" className="btn btn-lg btn-danger">
        <div>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/New`} className="btn btn-danger">+ Assignment</Link>
        </div>
      </button>
      <div className="wd-margin-assignment-box bg-secondary p-3">
        <h3 id="wd-assignments-title">
          <BsGripVertical className="fs-3" /> <span className="smallspace"></span>
          ASSIGNMENTS <span className="space"></span><span className="smallspace"></span> <span className="space"></span> 40% of Total +
          <span className="smallspace"></span>
          <IoEllipsisVertical className="fs-4" />
        </h3>
      </div>
      <div id="wd-assignment-list">
        <div className="assignment-container">
          {courseAssignments.map(assignment => (
            <div className="wd-assignment-list-item" key={assignment._id}>
              <div className="assignment-header">
                <a className="wd-assignment-link" href={`#/Kanbas/Courses/${cid}/Assignments/${assignment._id}`}>
                  <BsGripVertical className="fs-3" /> <span className="smallspace"></span>
                  <FaList /> <span className="smallspace"></span>
                  <strong>{assignment.title}</strong><span className="space"></span><span className="space"></span><span className="space"></span>
                  <IoEllipsisVertical className="fs-4" />
                  </a>
                  <button 
                    onClick={() => handleDelete(assignment._id)} 
                    className="btn btn-danger btn-sm delete-btn"> Delete </button>
              </div>
              <div>
                <span className="red-text">Multiple Modules</span> | <strong>Not available until</strong> {assignment.availableFrom} | <strong>Due</strong> {assignment.dueDate} | {assignment.points} pts
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
