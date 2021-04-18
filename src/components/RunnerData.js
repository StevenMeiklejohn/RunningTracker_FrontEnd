import React from 'react'

const RunnerData = ({runs, selectedName}) => {

    if(!runs || !selectedName){
        return (
            <p>Loading......</p>
        )
    }



    console.log("incoming runs", runs)
    let filteredRuns = []
    for(let run of runs){
        if (run["name"] === selectedName){
            filteredRuns.push(run);
        }
    }

    const totalNumberOfRuns = filteredRuns.length;
    let totalDistance = 0;
    console.log("filteredRuns", filteredRuns);
    for(let run of filteredRuns){
        totalDistance += run["distance"];
    }

    const runElements = filteredRuns.map((run) => {
        let date = new Date(run.run_date);
        let dateString = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
        return <p>Distance: {run.distance}    Date: {dateString}</p>
    })





    return(
        <div className="individualData">
        <h1>{selectedName}</h1>
        <p> Total recorded runs: {totalNumberOfRuns}</p>
        <p> Total distance: {totalDistance}</p>
        <br></br>
        <br></br>
        <br></br>

        <h1>Runs</h1>
        {runElements}
        </div>

    )
}

export default RunnerData;