import React, { useState } from 'react'
import './form.css'
import { useRecoilState } from 'recoil';
import { atomData } from '../../recoil/atomData';

let id = 0;
function getId() {
    return id++;
}

export const Form = () => {

    const [formData, setFormData] = useRecoilState(atomData);

    const [details, setDetails] = useState([{
        id: null,
        task: "",
        date: "",
        det: "",
    }])

    const [errArr, setErrArr] = useState([{
        taskErr: "",
        dateErr: "",
        detailsErr: ""
    }])

    const onChange = (e) => {
        if (e.target.id === "task") {
            checkTask(e.target.value)
        }

        if (e.target.id === "date") {
            checkDate(e.target.value)
        }

        if (e.target.id === "det") {
            checkDetails(e.target.value)
        }
    }

    const checkTask = (task) => {
        let taskErr = ""
        let valid = false

        if (task === undefined || task.trim() === "") {
            taskErr = "Please enter a task"
        } else {
            valid = true
        }

        setDetails({ ...details, task })
        setErrArr({ ...errArr, taskErr })

        return valid
    }

    const checkDate = (date) => {
        let dateErr = ""
        let valid = false

        if (date === undefined) {
            dateErr = "Please enter a date"
        } else if (date < new Date().toISOString().split("T")[0]) {
            dateErr = "Please enter a valid date"
        } else {
            valid = true
        }

        setDetails({ ...details, date })
        setErrArr({ ...errArr, dateErr })

        return valid
    }

    const checkDetails = (det) => {
        let detailsErr = ""
        let valid = false

        if (det === undefined || det.trim() === "") {
            detailsErr = "Please enter details"
        } else {
            valid = true
        }

        setDetails({ ...details, det })
        setErrArr({ ...errArr, detailsErr })

        return valid
    }

    const addData = () => {
        setFormData(form => [
            ...form, { 
            details
            }
        ]);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (checkTask(details.task) && checkDate(details.date) && checkDetails(details.det)) {
            alert('The form is submitted');  
            setDetails({
                id: getId(),
                task: "",
                date: "",
                det: ""
            })
            addData();
        } else {
            alert('Please check the fields again');
        }
    }

    return (
        <React.Fragment>
            <form>
            {console.log(details)}
                <h3>To Do List</h3>
                <label>Task: </label>
                <input type="text" id="task" name="task" onChange={onChange} value={details.task || ""} />
                <p>{errArr.taskErr}</p>

                <label>Finish By: </label>
                <input type="date" id="date" name="date" onChange={onChange} min={new Date().toISOString().split("T")[0]} value={details.date || ""} />
                <p>{errArr.dateErr}</p>

                <label>Details: </label> <br />
                <textarea type="text" id="det" name="det" onChange={onChange} value={details.det || ""}/>
                <p>{errArr.detailsErr}</p>

                <button onClick={onSubmit}>Submit</button>
            </form>
        </React.Fragment>
    )
}