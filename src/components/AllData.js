import React from 'react';
import Chart from 'react-google-charts';

const AllData = ({runs}) => {

    let totalRuns = runs.length;
    let target = 2100;
    let totalDistance = 0;
    let steveTotal = 0;
    let slugTotal = 0;
    let jarvTotal = 0;
    let middletonTotal = 0;
    let cairnsTotal = 0;
    for(let run of runs){
        // console.log("run.distance", run.distance);
        // console.log("run[distance]", run["distance"]);
        totalDistance += run["distance"];
        if(run["name"] === "Steve"){
            steveTotal += run["distance"];
        }
        if(run["name"] === "Slug"){
            slugTotal += run["distance"];
        }
        if(run["name"] === "Jarvie"){
            jarvTotal += run["distance"];
        }
        if(run["name"] === "Middleton"){
            middletonTotal += run["distance"];
        }
        if(run["name"] === "Cairns"){
            cairnsTotal += run["distance"];
        }
    }

    console.log("steveTotal", steveTotal);
    return(
        <>
        <div className="all-data-text">
        <p>Total Number of runs: {totalRuns} <br></br>Total distance ran: {totalDistance}</p>
        </div>
        <div className="pie-chart-div">
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
            ['Runner', 'Distance'],
            ['Steve', steveTotal],
            ['Slug', slugTotal],
            ['Cairns', cairnsTotal],
            ['Middleton', middletonTotal],
            ['Jarvie', jarvTotal],
            ]}
            options={{
            title: 'Run contribution',
            backgroundColor: 'transparent',
            titleTextStyle: {
                color:'white'
            }
            }}
            rootProps={{ 'data-testid': '1' }}
        />
        </div>
        <div className="all-data-text">
        <p>Total distance remaining: {2100 - totalDistance} <br></br>Total distance to run: 2100km</p>
        </div>
        <div className="pie-chart-div">
        <Chart
            width={'100%'}
            height={'100%'}
            chartType="PieChart"
            loader={<div>Loading Chart</div>}
            data={[
            ['Runner', 'Distance'],
            ['Target', target],
            ['Completed', totalDistance]
            ]}
            options={{
            title: 'Target Tracker',
            backgroundColor: 'transparent',
            titleTextStyle: {
                color:'white'
            }

            }}
            rootProps={{ 'data-testid': '2' }}
        />
        </div>
        </>

    )
}

export default AllData;