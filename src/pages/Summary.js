import React, {useState} from 'react';
import {useGlobalContext} from '../Context';
import {useParams} from "react-router-dom";
import {Link} from "react-router-dom";
const Summary = () => {
  const {shows} = useGlobalContext();
  const [show, setShow] = useState([]);
  const {id} = useParams();
  const updateData = shows.filter((elem) => {
    return elem.show.id == id;
  });
  console.log(updateData);

  return (
    <>
      {
        updateData.map((elem) => {
          const id = elem.show.id;
          var summary = elem.show.summary;
          summary   = summary.replaceAll("<b>","");
          summary   = summary.replaceAll("</b>","");
          summary   = summary.replaceAll("<p>","");
          summary   = summary.replaceAll("</p>","");
          return (
            <div className='container '>
              <div id='card'>
                <div className='row d-flex justify-content-center  align-items-center m-4'>
                  <div className='col'>
                    <h1 className='text-center' style={{"color": "red"}}>Summary</h1>
                    <h2>{summary}</h2>
                  </div>
                  <div className='row'>
                    <div className='col'>
                      <Link to="/">
                        <button className='btn btn-outline-secondary'>All Shows</button>
                      </Link>
                    </div>
                    <div className='col'>
                      <Link to={`/register/${id}`}>
                        <button className='btn btn-outline-secondary'>ragister</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          );
        })
      }

    </>
  );
}
export default Summary;