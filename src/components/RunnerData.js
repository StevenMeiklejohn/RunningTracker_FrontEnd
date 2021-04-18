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



    return(
        <div className="individualData">
        <h1>{selectedName}</h1>
        <p> Total recorded runs: {totalNumberOfRuns}</p>
        <p> Total distance: {totalDistance}</p>
        </div>

    )
}

export default RunnerData;