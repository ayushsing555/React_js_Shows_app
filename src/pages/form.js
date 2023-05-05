import React, {useEffect, useState} from 'react';
import {useParams, useNavigate, json} from "react-router-dom";
import {useGlobalContext} from '../Context';
const Form = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {shows} = useGlobalContext();
    const movie = shows.filter((elem) => {
        return elem.show.id == id;
    });
    const [users, Allusers] = useState({
        title: movie[0].show.name,
        Date: "",
        Time: "",
        Row: "",
        Seat: ""
    });
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        Allusers({...users, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("lists", JSON.stringify(users));
        window.alert("Successfully ticket booked");
        navigate("/");
        }
    return (
        <form>
            <div className="form-row m-3">
                <div className="col-md-4 mb-3">
                    <h1>Free Movie Ticket Form</h1>
                    <label for="validationServer01">Movie Title</label>
                    <input type="text" name="title" value={users.title} onChange={handleInput} className="form-control" id="validationServer01" placeholder="First name" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationServer02">Date</label>
                    <input type="Date" value={users.Date} onChange={handleInput} name='Date' className="form-control " id="validationServer02" placeholder="Last name" required />
                </div>
                <div className="col-md-4 mb-3">
                    <label for="validationServerUsername">Time</label>
                    <div className="input-group">
                        <input type="time" value={users.Time} onChange={handleInput} name='Time' className="form-control " id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                    </div>
                </div>
            </div>
            <div className="form-row m-3">
                <div className="col-md-6 mb-3">
                    <label for="validationServer03">Row</label>
                    <input type="number" name="Row" value={users.Row} onChange={handleInput} max="20" min="1" className="form-control " id="validationServer03" placeholder="Row" required />
                </div>
                <div className="col-md-3 mb-3">
                    <label for="validationServer04">Seat</label>
                    <input type="number" name='Seat' value={users.Seat} onChange={handleInput} max={100} min={1} className="form-control " id="validationServer04" placeholder="seat" required />
                </div>
            </div>
            <button className="btn btn-primary" onClick={handleSubmit} type="submit">Submit form</button>
        </form>
    );
};

export default Form;