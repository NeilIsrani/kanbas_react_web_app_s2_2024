import React from 'react';
import { SearchBar } from "./SearchBar";
import { BsArrowBarDown, BsArrowBarUp } from "react-icons/bs";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Grades() {
  return (
    <div id="wd-assignments" className="container">
      <div className="row mb-3">
        <div className="col-12 d-flex justify-content-end">
          <button id="wd-add-import" className="btn btn-lg btn-secondary me-2">
            <BsArrowBarDown /> Import
          </button>
          <div className="dropdown">
            <button 
              id="wd-add-export" 
              className="btn btn-lg btn-secondary dropdown-toggle" 
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false">
              <BsArrowBarUp /> Export
            </button>
            <ul className="dropdown-menu" aria-labelledby="wd-add-export">
              <li>
                <button className="dropdown-item">
                  <BsArrowBarUp /> Export
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="row mb-3">
        <div className="col-md-6">
          <label htmlFor="search-student-names" className="form-label"><strong>Student Names</strong></label>
          <SearchBar />
        </div>
        <div className="col-md-6">
          <label htmlFor="search-assignment-names" className="form-label"><strong>Assignment Names</strong></label>
          <SearchBar />
        </div>
      </div>

      <h2 className="mt-4">Tables</h2>
      <table className="table">
        <thead>
        <tr className="table-secondary">
            <th>Student Name</th>
            <th>A1 Setup (Out of 100)</th>
            <th>A2 HTML (Out of 100)</th>
            <th>A3 CSS (Out of 100)</th>
            <th>A4 BOOTSTRAP (Out of 100)</th>
          </tr>
        </thead>
    <tbody>
      <tr className="table-white"><td>Jonah Gilmour</td><td>100%</td><td>67%</td><td>85%</td><td>85%</td></tr>
      <tr className="table-secondary"><td>Isaac Thornton</td><td>100%</td><td>75%</td><td>90%</td><td>85%</td></tr>
      <tr className="table-white"><td>Seif Emam</td><td>100%</td><td>56%</td><td>90%</td><td>85%</td></tr>
      <tr className="table-secondary"><td>Neil Israni</td><td>100%</td><td>33%</td><td>90%</td><td>85%</td></tr>
      <tr className="table-white"><td>Parveet Raj Singh</td><td>100%</td><td>99%</td><td>90%</td><td>85%</td></tr>
    </tbody>
    
  </table>

    </div>
  );
}

