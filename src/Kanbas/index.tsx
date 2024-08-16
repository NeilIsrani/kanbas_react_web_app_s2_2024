import { Navigate, Route, Routes } from "react-router";
import Courses from "./Courses";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import "./styles.css"; 
import React, { useEffect, useState } from "react";
//import * as db from "./Database";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import Account from "./Courses/Account";
import Session from "./Courses/Account/Session";
import ProtectedRoute from "./ProtectedRoute";

export default function Kanbas() {
  const [courses, setCourses] = useState<any[]>([]);
  const[course, setCourse] = useState<any>({
    
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "/images/reactjs.jpg", description: "New Description"
  });
  const deleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    setCourses(courses.filter(
      (c) => c._id !== courseId));
  };

  const fetchCourses = async () => {
    try {
      const courses = await client.fetchAllCourses();
      console.log("Fetched courses:", courses); 
      setCourses(courses);
    } catch (error) {
      console.log("Remote Server URL:", process.env.REACT_APP_REMOTE_SERVER);
      console.error("Error fetching courses:", error);
    }
  };

  useEffect(() => {
    console.error("this nonsense is happening");
    fetchCourses();
  }, []);

  
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString(), 
    };
    setCourses([newCourse, ...courses]); 
  };
  
    const updateCourse = async () => {
      await client.updateCourse(course);
      setCourses(
        courses.map((c) => {
          if (c._id === course._id) {
            return course;
          } else {
            return c;
          }
        })
      );
    };
  

  return (
    <Provider store={store}>
      <Session>
    <div id="wd-kanbas" className="h-100">
      <div className="d-flex h-100">
        <div className="kanbas-navigation d-none d-md-block">
          <KanbasNavigation />
        </div>
        <div className="flex-fill p-4 main-content">
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="/Account/*" element={<Account />} />
            <Route path="Dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />

            <Route path="Courses/:cid/*" element={<Courses courses={courses} />} />
            <Route path="Calendar" element={<h1>Calendar</h1>} />
            <Route path="Inbox" element={<h1>Inbox</h1>} />
          </Routes>
        </div>
      </div>
    </div>
    </ Session>
    </Provider>
  );
}


