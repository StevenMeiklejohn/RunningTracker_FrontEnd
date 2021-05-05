import React from 'react'
import SingleRun from './SingleRun'

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

    let filteredByDate = [...filteredRuns];
    filteredByDate.sort(function(el1, el2) {
        let date1 = new Date(el1.run_date);
        let date2 = new Date(el2.run_date);
        if (date1 > date2) return 1;
        if (date1 < date2) return -1;
     })
     console.log("filtered by date", filteredByDate)

    const totalNumberOfRuns = filteredRuns.length;
    let totalDistance = 0;
    console.log("filteredRuns", filteredRuns);
    for(let run of filteredRuns){
        totalDistance += run["distance"];
    }

    const runElements = filteredByDate.map((run) => {
        let date = new Date(run.run_date);
        let dateString = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
        // return <p>Distance: {run.distance}    Date: {dateString}</p>
        return <SingleRun distance={run.distance} date={dateString} id={run._id} />
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