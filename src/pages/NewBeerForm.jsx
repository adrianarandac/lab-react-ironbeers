import React from 'react';
import Navbar from '../components/Navbar';
import { useState } from "react";
import axios from "axios"
import { useHistory } from "react-router-dom";

const NewBeerForm = () => {


    const [formState, setFormState] = useState({})

    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault();
        axios
        .post(
            "https://ih-beers-api2.herokuapp.com/beers/new",
            formState)
        .then(response=>{
            setFormState({})
            history.push("/")
        }
        )
        .catch(console.log)

    }

    function handleInput(e){
        setFormState({...formState, [e.target.name]: e.target.value }) // setFromState(Object.assign({}, state, {[e.name]: e.value}))
    }

  return (
    <div>
      <Navbar />
      <form onSubmit={handleSubmit}>
        <label>Name of your beer</label>
        <input
          type="text"
          name="name"
          onChange={handleInput} // onChange={(e) => setHeadline(e.target.value)}
          value={formState.name}
        /><br />

        <label>Tagline</label>
        <input
          type="text"
          name="tagline"
          onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
          value={formState.tagline}
        /><br />

        <label>Description</label>
        <input
          type="textarea"
          name="description"
          onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
          value={formState.description}
        /><br />

        <label>First brewed</label>
        <input
          type="text"
          name="first_brewed"
          onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
          value={formState.first_brewed}
        /><br />

        <label>Tips: </label>
        <input
          type="text"
          name="brewer_tips"
          onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
          value={formState.brewer_tips}
        /><br />

        <label>Alcohol percentage: </label>
        <input
          type="number"
          name="attenuation_level"
          onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
          value={formState.attenuation_level}
        /><br />

        <label>Author</label>
        <input
          type="text"
          name="contributed_by"
          onChange={handleInput} // onChange={(e) => setPrice(e.target.value)}
          value={formState.contributed_by}
        /><br />

        <button type="submit">Add Beer:</button>
      </form>
    </div>
  );
};

export default NewBeerForm;
