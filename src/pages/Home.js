import React, {useEffect, useState} from 'react';
import {useGlobalContext} from '../Context';
import {Link} from "react-router-dom"
const Home = () => {
  const {shows, setShowGlobal} = useGlobalContext();
  const [show, SetShow] = useState([]);
  const getData = async () => {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    const data = await res.json();
    setShowGlobal(data);
    SetShow(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className='container'>
        <div className='row row-cols-1 m-3 text-center'>
          {
            show.map((elem) => {
              return (
                <>
                  <div className='col text-center m-2 p-3' id='card'>
                    <div className='col ' style={{color: "green"}}>
                      <h1>ShowName:{elem.show.name}</h1>
                    </div>
                    <div className='col'>
                    {
                       elem.show.image!=null?<img src={elem.show.image.medium}></img>:""
                    } 
                    </div>
                    <div className='col'>
                      <h2>Status:{elem.show.status}</h2>
                    </div>
                    <div className='col' style={{color: "blue"}}>
                       <h2>Language:{elem.show.language}</h2>
                    </div>
                    <div className='col' style={{color: "GrayText"}}>
                      <b>Rating:{elem.show.rating.average}</b>
                    </div>
                    <div className='col'>
                      <Link to={`summary/${elem.show.id}`}>
                        <button className='btn btn-outline-secondary'>Summary</button>
                      </Link>
                    </div>
                  </div>
                </>
              );
            })
          }
        </div>
      </div>
    </>
  );
};

export default Home;