import React from "react";
import "./style.css";
import JobMenu from "./JobMenu";

function Jobs() {
    let job;

    let a = document.getElementsByName("job");
    for (let i = 0; i < a.length; i++) {
        if (a[i].checked) {
            job = a[i].value;
        }
    }

    return (
        <div>
            <JobMenu job={job}/>
            <div className="choice">
                <div>
                    <input type="radio" id="job_1" name="job" value="job_1"/>
                    <label htmlFor="job_1">Programmer</label>
                </div>
                <div>
                    <input type="radio" id="job_2" name="job" value="job_2"/>
                    <label htmlFor="job_2">Teacher</label>
                </div>
                <div>
                    <input type="radio" id="job_3" name="job" value="job_3"/>
                    <label htmlFor="job_3">Driver</label>
                </div>
                <div>
                    <input type="radio" id="job_4" name="job" value="job_4"/>
                    <label htmlFor="job_4">Administrator</label>
                </div>
                <div>
                    <input type="radio" id="job_5" name="job" value="job_5"/>
                    <label htmlFor="job_5">Farmer</label>
                </div>
            </div>
        </div>
    )
}

export default Jobs;
