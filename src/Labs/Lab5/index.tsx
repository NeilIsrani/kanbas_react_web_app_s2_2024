
import WorkingWithObjects from "./WorkingWithObjects";
import EncodingParametersInURL from "./EncodingParametersInURL";
import WorkingWithArrays from "./WorkingWithArrays";
import HttpClient from "./HttpsClient";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import EnvironmentVariables from "./EnvironmentVariables";
export default function Lab5() {
    return(
        <div>
            <h1>Lab 5</h1>
            <a href="http://localhost:4000/lab5"> Hello </a>
            <h2>Calculator</h2>
            <EncodingParametersInURL />
            <WorkingWithObjects />
            <WorkingWithArrays />
            <HttpClient />
            <WorkingWithArraysAsynchronously />
            <WorkingWithObjectsAsynchronously />
            <EnvironmentVariables />
        </div>
    );
}