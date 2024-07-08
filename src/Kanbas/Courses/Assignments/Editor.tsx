export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <td></td>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of your Web application running on Netlify.
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-Assignment-Group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-Assignment-Group" defaultValue="ASSIGNMENTS">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </ select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-Grade">Display Grade as</label>
            </td>
            <td>
              <select id="wd-Grade" defaultValue="Percentage">
              <option value="Percentage">Percentage</option>
              </ select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-SumbissionType">Submission Type</label>
            </td>
            <td>
              <select id="wd-SumbissionType" defaultValue="Online">
              <option value="Online">Online</option>
              </ select>
            </td>
          </tr>
          <td align="right" valign="top"></td>
<label htmlFor="wd-select-entry"> Online Entry Options </label><br/>
<div id="wd-select-entry">
  <input type="checkbox" id="text-entry" name="entry-option" value="Text Entry"/>
  <label htmlFor="text-entry">Text Entry</label><br/>
  
  <input type="checkbox" id="website-url" name="entry-option" value="Website URL"/>
  <label htmlFor="website-url">Website URL</label><br/>
  
  <input type="checkbox" id="media-recording" name="entry-option" value="Media Recording"/>
  <label htmlFor="media-recording">Media Recording</label><br/>
  
  <input type="checkbox" id="student-annotation" name="entry-option" value="Student Annotation"/>
  <label htmlFor="student-annotation">Student Annotation</label><br/>
  
  <input type="checkbox" id="file-uploads" name="entry-option" value="File Uploads"/>
  <label htmlFor="file-uploads">File Uploads</label><br/>
</div>
        </table>
      </div>
  );}
  