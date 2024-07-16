import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-3 bg-white border rounded">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value="A1" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control" rows={3}>
          The assignment is available online. Submit a link to the landing page of your Web application running on Netlify.
        </textarea>
      </div>
      <div className="container">
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-points" className="form-label">Points</label>
          </div>
          <div className="col-8">
            <input id="wd-points" value={100} className="form-control" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-Assignment-Group" className="form-label">Assignment Group</label>
          </div>
          <div className="col-8">
            <select id="wd-Assignment-Group" defaultValue="ASSIGNMENTS" className="form-control">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-Grade" className="form-label">Display Grade as</label>
          </div>
          <div className="col-8">
            <select id="wd-Grade" defaultValue="Percentage" className="form-control">
              <option value="Percentage">Percentage</option>
            </select>
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-SubmissionType" className="form-label">Submission Type</label>
          </div>
          <div className="col-8">
            <div className="card mb-3">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-8">
                    <select id="wd-SubmissionType" defaultValue="Online" className="form-control">
                      <option value="Online">Online</option>
                    </select>
                  </div>
                </div>
                <label htmlFor="wd-select-entry" className="form-label mb-0">Online Entry Options</label>
                <div id="wd-select-entry">
                  <div className="form-check">
                    <input type="radio" id="text-entry" name="entry-option" value="Text Entry" className="form-check-input" />
                    <label htmlFor="text-entry" className="form-check-label">Text Entry</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id="website-url" name="entry-option" value="Website URL" className="form-check-input" />
                    <label htmlFor="website-url" className="form-check-label">Website URL</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id="media-recording" name="entry-option" value="Media Recording" className="form-check-input" />
                    <label htmlFor="media-recording" className="form-check-label">Media Recording</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id="student-annotation" name="entry-option" value="Student Annotation" className="form-check-input" />
                    <label htmlFor="student-annotation" className="form-check-label">Student Annotation</label>
                  </div>
                  <div className="form-check">
                    <input type="radio" id="file-uploads" name="entry-option" value="File Uploads" className="form-check-input" />
                    <label htmlFor="file-uploads" className="form-check-label">File Uploads</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Second Box */}
        <div className="row mb-3">
          <div className="col-4 text-end">
            <label htmlFor="wd-Assign" className="form-label">Assign</label>
          </div>
          <div className="col-8">
            <div className="card">
              <div className="card-body">
                <div className="row mb-2">
                  <div className="col-8">
                  <label htmlFor="wd-Assign" className="form-label mb-0">Assign to</label>
                    <select id="wd-Assign" className="form-control">
                    </select>
                  </div>
                </div>
                
                <div className="row mb-3">
          <div className="col-12">
            <label htmlFor="wd-date" className="form-label">Due</label>
            <input type="date" id="wd-date" className="form-control" value="2000-01-21" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-6">
            <label htmlFor="wd-available-from" className="form-label">Available from</label>
            <input type="date" id="wd-available-from" className="form-control" value="2000-01-21" />
          </div>
          <div className="col-6">
            <label htmlFor="wd-until" className="form-label">Until</label>
            <input type="date" id="wd-until" className="form-control" value="2000-01-21" />
          </div>
        </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



  