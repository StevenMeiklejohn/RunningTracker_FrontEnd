import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import RegisterRun from '../components/RegisterRun.js';
import Confirmed from '../components/Confirmed.js';
import DataContainer from './DataContainer.js';
import Request from '../helpers/request.js';
import NavBar from '../NavBar.js';



const MainContainer = () => {

    const [runs, setRuns] = useState([]);
    const [runners, setRunners] = useState([])
    const [submittedRun, setSubmittedRun] = useState(null)

    const requestRuns = function(){
        console.log("request called");
        const request = new Request();
        request.get('https://running-tracker-server.herokuapp.com/')
        .then((data) => setRuns(data))
    }

    const handlePost = function(run){
      const request = new Request();
      request.post("https://running-tracker-server.herokuapp.com/api/runs/", run)
      .then(() => {
        window.location = '/confirmed'
      })

      // console.log("handle post run name", run['name'])
      // let copiedSubmittedRun = {...submittedRun}
      // copiedSubmittedRun.name = run['name'];
      // copiedSubmittedRun.distance = run['distance']
      // copiedSubmittedRun.run_date = run['run_date']
      // console.log("copied submitted run", copiedSubmittedRun)
      // setSubmittedRun(copiedSubmittedRun);
      
    }



    useEffect(()=>{
        requestRuns()
      }, [])

    return (
      <Router>
      <>
      <NavBar />
      <Switch>
          <RegisterRun exact path="/" component={RegisterRun} runs={runs} onCreate={handlePost}/>
          <Confirmed path="/confirmed" component={Confirmed} />
          <DataContainer path="/data" runs={runs} component={DataContainer} />
      </Switch>
      </>
      </Router>
    )
}

export default MainContainer;