import { courses } from "../Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import PeopleTable from "./People/table";
import React from "react";
import Profile from "./Account/Profile";


export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  const { pathname } = useLocation();

  return (
    <div id="wd-courses">
      <h2>
        {course && course.name} &gt; {pathname.split("/")[4]}
      </h2>
      <hr />
      <table width="100%">
        <tbody>
          <tr>
            <td valign="top">
              <CoursesNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Modules" element={<Modules />} />
                <Route path="/Assignments" element={<Assignments />} />
                <Route path="/Assignments/:aid" element={<AssignmentEditor />} />
                <Route path="/Grades" element={<Grades />} />
                <Route path="/Piazza" element={<h1>"Piazza"</h1>} />
                <Route path="/Zoom" element={<h1>"Zoom"</h1>} />
                <Route path="/Quizzes" element={<h1>"Quizzes"</h1>} />
                <Route path="/People" element={<PeopleTable/>} />
                <Route path="/People/:uid" element={<PeopleTable/>} />
                <Route path="/Profile" element={<Profile/>} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}



  
