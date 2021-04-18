import React, {useState, useEffect} from 'react';
import {Route, Switch} from 'react-router-dom';
import RunnerData from '../components/RunnerData.js';
import AllData from '../components/AllData.js';
import ChooseRunner from '../components/ChooseRunner.js'

const DataContainer = ({runs}) => {



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

        
  
        </Switch>
        </>
    )
}

export default DataContainer;