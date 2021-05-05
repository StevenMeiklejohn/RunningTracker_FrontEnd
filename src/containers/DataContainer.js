import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import RunnerData from '../components/RunnerData.js';
import AllData from '../components/AllData.js';
import ChooseRunner from '../components/ChooseRunner.js'
import EditRunForm from '../components/EditRunForm.js';
import Request from '../helpers/request.js';

const DataContainer = ({runs}) => {


    const findRun = function(id){
      for(let run of runs){
        if(run._id == id){
          return run;
        }
      }
    }

    const handleUpdate = function(run){
      console.log("onUpdate run", run);
      const request = new Request();
      request.patch("https://running-tracker-server.herokuapp.com/api/runs/" + run._id, run)
      .then(() => {
        window.location = '/confirmed'
      })
    }

    



    return(
        <>
        <Switch>
  
        <Route exact path='/data/all' runs={runs} render={() =>{
          return <AllData  runs={runs}/>
        }}/>

        <Route exact path = '/data/choose' render={(props) => {
          return <ChooseRunner runs={runs}/>
        }}/>      
  
        <Route exact path = '/data/:name' render={(props) =>{
          const selectedName = props.match.params.name
        //   const pirate = findPirateById(id);
          return <RunnerData runs={runs} selectedName={selectedName}/>
        }}/>

        <Route exact path="/data/:id/edit" render={(props) =>{
            const id = props.match.params.id;
            const run = findRun(id);
            return <EditRunForm run={run} runs={runs} onUpdate={handleUpdate}/>
          }}/>

        
  
        </Switch>
        </>
    )
}

export default DataContainer;