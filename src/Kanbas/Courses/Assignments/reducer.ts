import { createSlice } from "@reduxjs/toolkit";
import { assignments, courses } from "../../Database";

const initialState = {
  assignments: assignments,
  courses: courses,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    setAssignments: (state, action) => {
      state.assignments = action.payload.assignments;
      state.courses = action.payload.courses;
    },

    addAssignment: (state, { payload: { assignment, course } }) => {
      const newAssignment = {
        _id: new Date().getTime().toString(),
        title: assignment.title,
        description: course.description,
        points: assignment.points,
        assignmentGroup: assignment.assignmentGroup,
        gradeDisplay: assignment.gradeDisplay,
        submissionType: assignment.submissionType,
        dueDate: course.dueDate,
        availableFrom: course.availableFrom,
        until: assignment.until,
        course: assignment.course,
      };
      state.assignments = [...state.assignments, newAssignment];
    },

    deleteAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.filter(
        (a) => a._id !== assignmentId
      );
    },

    updateAssignment: (state, { payload: { assignment, course } }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignment._id ? { ...assignment, description: course.description, dueDate: course.dueDate, availableFrom: course.availableFrom } : a
      );

      // Also update the course information if needed
      state.courses = state.courses.map((c) =>
        c._id === course._id ? { ...c, ...course } : c
      );
    },

    editAssignment: (state, { payload: assignmentId }) => {
      state.assignments = state.assignments.map((a) =>
        a._id === assignmentId ? { ...a, editing: true } : a
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;