import React, { useState } from 'react';
import {
    MDBInput,
    MDBBtn,
    MDBCard
  } from 'mdb-react-ui-kit';
import './AddRideForm.css';

export default function AddRideForm(props) {
    const [state, setState] = useState({
        date: '',
        pickup: '',
        dropoff: ''
    });

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData()
        for (let fieldName in state) {
            formData.append(fieldName, state[fieldName])
          }
        props.handleAddRide(formData);
    }

    return(
        <>
        {props.showForm && (
        <div className='card'>
        <h5>Where to?</h5>
            <form onSubmit={handleSubmit}>
                <MDBInput className='mb-3'
                    type='date' 
                    name='date'
                    value={state.date}
                    onChange={handleChange} />
                <MDBInput className='mb-3'
                    type='text'
                    name='pickup'
                    label='Pick Up Location' 
                    value={state.pickup}
                    onChange={handleChange} />
                <MDBInput className='mb-3'
                    type='text' 
                    name='dropoff'
                    label='Drop Off Location' 
                    value={state.dropoff}
                    onChange={handleChange} />
                <MDBBtn type='submit' color='light'>Request Ride</MDBBtn>
            </form>
        </div>
        )}
        </>
    )
}