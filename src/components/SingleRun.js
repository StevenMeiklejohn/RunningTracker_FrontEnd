import React from 'react'
import {Link} from 'react-router-dom';

const SingleRun = ({distance, date, id}) => {
    const editUrl = "/data/"+id+"/edit"

    return(
        <div className="single-run">
            <p>Distance: {distance}</p>
            <p>Date: {date}</p>
            {/* <button onClick={handleDelete}>Delete {pirate.firstName}</button> */}
            <Link to= {editUrl}><button type="button">Edit Run</button></Link>
        </div>
    )

}

export default SingleRun