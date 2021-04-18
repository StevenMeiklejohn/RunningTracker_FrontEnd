import React, {useState, useEffect} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RegisterRun = ({runs, onCreate}) => {

    const [stateRun, setStateRun] = useState(
        {
            name: "",
            run_date: "",
            distance: 0.0
        }
    )
    const [startDate, setStartDate] = useState(new Date());

    if(runs.length === 0){
        return(
            <p>Loading......</p>
        )
    }
    let runners = [];
    for(var run of runs){
        if(!runners.includes(run.name)){
            runners.push(run.name)
        }
    }


    const runnerOptions = runners.map((name, index) => {
        return <option key={index} value={name}>{name}</option>
    })



    const handleRunner = function(event){
        const name = event.target.value;
        let copiedRun = {...stateRun};
        copiedRun['name'] = name;
        setStateRun(copiedRun);
    }

    // const handleDateChange = function(event){
    //     let propertyName = event.target.name;
    //     let copiedRun = {...stateRun}
    //     copiedRun[propertyName]= event.target.value;
    //     setStateRun(copiedRun);
    // }

    const handleDistanceChange = function(event){
        let copiedRun = {...stateRun}
        copiedRun['distance'] = parseFloat(event.target.value);
        setStateRun(copiedRun);
    }

    const handleSubmit = function(event){
        event.preventDefault();
        onCreate(stateRun)
    }

    const handleDatePickerChange = function(date){
        console.log("handledatepickerChange called")
        console.log(date)
        let copiedRun = {...stateRun}
        copiedRun['run_date'] = date;
        setStateRun(copiedRun);
    }


    return(
        <>
        <div className="inputForm">
            <p>Please add the details of your latest herculean effort.</p>
        <form onSubmit={handleSubmit}>

        <div className="formElement">
        <label for="runner">Runner's Name</label>
            <select name="runner" onChange={handleRunner} defaultValue={"select-runner"}>
                <option disabled value='select-runner'>Select runner</option>
                {runnerOptions}
            </select>
        </div>
        <div className="formElement">
        <label for="distance">Distance</label>
        <input type="number" placeholder="Distance" name="distance" 
            onChange={handleDistanceChange} value={stateRun.distance}/>
        </div>  
        <div className="formElement">
        <label for="date">Date</label>
        <DatePicker
            // selected={date}
            onChange={handleDatePickerChange} //only when value has changed
        />
        </div>
        <button type="submit">Save</button>
        </form>
        </div>
        </>
    )
}

export default RegisterRun;