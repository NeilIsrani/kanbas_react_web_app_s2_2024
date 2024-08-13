import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { courses } from "../../Database";
import { useSelector } from "react-redux";


export default function CourseNavigation() {
  const { cid } = useParams();
  const location = useLocation();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { pathname } = useLocation();
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0 course-navigation">
      {links.map((link) => (
        <Link
          key={link}
          className={`list-group-item border border-0 ${location.pathname.includes(link) ? "active" : "text-danger"}`}
          id={`wd-course-${link.toLowerCase()}-link`}
          to={`/Kanbas/Courses/${cid}/${link}`}
        >
          {link}
        </Link>
        
      ))}
    </div>
  );
}
