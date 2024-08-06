import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import { RootState } from '../../store';
import * as db from '../../Database';

export default function AssignmentEditor() {
  const { cid, aid } = useParams(); // Get both course and assignment IDs from params
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = db.courses;
  const { assignments } = useSelector((state: RootState) => state.assignmentsReducer);

  const course = courses.find((course: { _id: string | undefined; }) => course._id === cid);
  const assignment = aid && aid !== 'New' ? assignments.find((assignment: { _id: string; }) => assignment._id === aid) : null;

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [points, setPoints] = useState(100);
  const [assignmentGroup, setAssignmentGroup] = useState('ASSIGNMENTS');
  const [gradeDisplay, setGradeDisplay] = useState('Percentage');
  const [submissionType, setSubmissionType] = useState('Online');
  const [dueDate, setDueDate] = useState('');
  const [availableFrom, setAvailableFrom] = useState('');
  const [until, setUntil] = useState('');
  const [courseID, setCourseID] = useState(cid);

  useEffect(() => {
    if (assignment) {
      setTitle(assignment.title);
      setDescription(assignment.description);
      setPoints(assignment.points);
      setAssignmentGroup(assignment.assignmentGroup);
      setGradeDisplay(assignment.gradeDisplay);
      setSubmissionType(assignment.submissionType);
      setDueDate(assignment.dueDate);
      setAvailableFrom(assignment.availableFrom);
      setUntil(assignment.until);
    } else {
      // Initialize state for a new assignment
      setTitle('');
      setDescription('');
      setPoints(100);
      setAssignmentGroup('ASSIGNMENTS');
      setGradeDisplay('Percentage');
      setSubmissionType('Online');
      setDueDate('');
      setAvailableFrom('');
      setUntil('');
    }
  }, [assignment]);

  const handleSave = () => {
    const newAssignment = {
      _id: aid !== 'New' ? assignment?._id : `new-${Date.now()}`, // Generate a unique ID for the new assignment if it's new
      title,
      description,
      points,
      assignmentGroup,
      gradeDisplay,
      submissionType,
      dueDate,
      availableFrom,
      until,
      courseID,
    };

    if (aid !== 'New') {
      dispatch(updateAssignment(newAssignment));
    } else {
      dispatch(addAssignment(newAssignment));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`); // Redirect after saving
  };

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div id="wd-assignments-editor" className="p-3 bg-white border rounded">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input
          id="wd-name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea
          id="wd-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
          rows={3}
        />
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-points" className="form-label">Points</label>
          </div>
          <div className="col-8">
            <input
              id="wd-points"
              type="number"
              value={points}
              onChange={(e) => setPoints(Number(e.target.value))}
              className="form-control"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-Assignment-Group" className="form-label">Assignment Group</label>
          </div>
          <div className="col-8">
            <select
              id="wd-Assignment-Group"
              value={assignmentGroup}
              onChange={(e) => setAssignmentGroup(e.target.value)}
              className="form-control"
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-Grade" className="form-label">Display Grade as</label>
          </div>
          <div className="col-8">
            <select
              id="wd-Grade"
              value={gradeDisplay}
              onChange={(e) => setGradeDisplay(e.target.value)}
              className="form-control"
            >
              <option value="Percentage">Percentage</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-SubmissionType" className="form-label">Submission Type</label>
          </div>
          <div className="col-8">
            <select
              id="wd-SubmissionType"
              value={submissionType}
              onChange={(e) => setSubmissionType(e.target.value)}
              className="form-control"
            >
              <option value="Online">Online</option>
              {/* Add more options if needed */}
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-date" className="form-label">Due</label>
          </div>
          <div className="col-8">
            <input
              type="date"
              id="wd-date"
              className="form-control"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="wd-available-from" className="form-label">Available from</label>
            <input
              type="date"
              id="wd-available-from"
              className="form-control"
              value={availableFrom}
              onChange={(e) => setAvailableFrom(e.target.value)}
            />
          </div>
          <div className="col-6">
            <label htmlFor="wd-until" className="form-label">Until</label>
            <input
              type="date"
              id="wd-until"
              className="form-control"
              value={until}
              onChange={(e) => setUntil(e.target.value)}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6">
            <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-secondary">Cancel</Link>
          </div>
          <div className="col-6 text-end">
            <button onClick={handleSave} className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
