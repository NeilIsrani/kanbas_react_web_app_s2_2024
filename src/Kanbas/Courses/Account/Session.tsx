import * as client from "./client";
import * as client2 from "../client";
import { useEffect, useState } from "react";
import { setCurrentUser, setCourses } from "./reducer";
import { useDispatch } from "react-redux";
export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      console.error(err);
    }
    try {
      const courses = await client2.fetchAllCourses();
      dispatch(setCourses(courses));
    } catch (err: any) {
      console.error(err);
    }
    setPending(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);
  if (!pending) {
    return children;
  }
}
