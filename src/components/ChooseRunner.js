import React, {useState, useEffect} from 'react';


const ChooseRunner = ({runs}) => {

    if(!runs){
        return(
            <p>Loading.....</p>
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
        window.location = '/data/' + name;
    }


    return(
        <>
        <div className="chooseRunnerView">
        <p>Which god like titan of athletics would you like to view?</p>
        <div className="formElement">
        <label for="runner">Runner's Name</label>
            <select name="runner" onChange={handleRunner} defaultValue={"select-runner"}>
                <option disabled value='select-runner'>Select runner</option>
                {runnerOptions}
            </select>
        </div>
        </div>
        </>
    )
}

export default ChooseRunner;