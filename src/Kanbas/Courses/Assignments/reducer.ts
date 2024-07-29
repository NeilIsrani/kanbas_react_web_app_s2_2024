import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const initialState = {
  assignments: initialAssignments,
};

const AssignmentSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    addAssignment: (state, { payload }) => {
        console.log("add assignment reducer")
        console.log(payload)
      const newAssignment = {
        _id: new Date().getTime().toString(), // Generate a unique ID for the new assignment
        title: payload.title,
        description: payload.description,
        points: payload.points,
        assignmentGroup: payload.assignmentGroup,
        gradeDisplay: payload.gradeDisplay,
        submissionType: payload.submissionType,
        dueDate: payload.dueDate,
        availableFrom: payload.availableFrom,
        until: payload.until,
        course: payload.courseID, 
      };
      console.log(newAssignment)
      state.assignments = [...state.assignments, newAssignment];
      console.log(state.assignments)
    }, 
    deleteAssignment: (state, { payload }) => {
      state.assignments = state.assignments.filter(
        assignment => assignment._id !== payload
      );
    },
    updateAssignment: (state, { payload }) => {
        console.log("update assignment reducer")
      state.assignments = state.assignments.map(assignment =>
        assignment._id === payload._id ? {
          ...assignment,
          title: payload.title,
          description: payload.description,
          points: payload.points,
          assignmentGroup: payload.assignmentGroup,
          gradeDisplay: payload.gradeDisplay,
          submissionType: payload.submissionType,
          dueDate: payload.dueDate,
          availableFrom: payload.availableFrom,
          until: payload.until,
          course: payload.courseID,
        } : assignment
      );
    },
    editAssignment: (state, { payload }) => {
      state.assignments = state.assignments.map(assignment =>
        assignment._id === payload ? { ...assignment, editing: true } : assignment
      );
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } = AssignmentSlice.actions;
export default AssignmentSlice.reducer;
