import React from "react";
import { useState } from "react";

function EncodingParametersInURL() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
    return(
        <div>
            <h1>Lab 5</h1>
            <a href="http://localhost:4000/lab5"> Hello </a>
            <h2>Calculator</h2>
      <h4>Calculator</h4>
      <input type="number" value={a}
        onChange={(e) => setA(e.target.value)}/>
      <input type="number"
        onChange={(e) => setB(e.target.value)} value={b}/>
      <h3>Path Parameters</h3>
      <a href={`http://localhost:4000/lab5/add/${a}/${b}`}>
        Add {a} + {b}</a>
      <a href={`http://localhost:4000/lab5/subtract/${a}/${b}`}>
        Substract {a} - {b}</a>

        <h3>Query Parameters</h3>
<a className="btn btn-primary"
  href={`http://localhost:4000/lab5/calculator?operation=add&a=${a}&b=${b}`}>
  Add {a} + {b}
</a>
<a className="btn btn-danger"
  href={`http://localhost:4000/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
  Substract {a} - {b}
</a>
<h3>Assignment</h3>
<a className="btn btn-primary"
  href={`http://localhost:4000/lab5/assignment`}>
  Assignment
</a>

    </div>
    );
}
export default EncodingParametersInURL;