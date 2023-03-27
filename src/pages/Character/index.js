import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import EnHancedFetch from "../../services/http";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const BASE_API_URL = "https://swapi.dev/api/";

const Character = () => {
    const [character, setCharacter] = useState([]);
    const [planet, setPlanet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();





    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await EnHancedFetch(
                    "GET",
                    BASE_API_URL + "people/" + id,
                    ""
                );


                setCharacter(response);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        const fetchPlanet = async () => {
            try {
                const response = await EnHancedFetch(
                    "GET",
                    BASE_API_URL + "planets/" + id,
                    ""
                );
                setPlanet(response);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacter();
        fetchPlanet();
    }, []);


    return (


        // <Header></Header>

        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {character && 
            <><div className="card">
                        <h5 className="card-header">Personal Information</h5>
                        <div className="card-body">
                            <h5 className="card-title">{character.name}</h5>
                            <p className="card-text">gender: {character.gender}</p>
                            <p className="card-text">height: {character.height}</p>
                            <p className="card-text"> mass: {character.mass}</p>
                            <p className="card-text"> hair_color: {character.hair_color}</p>
                        </div>
                        } </>
                    </div>
                   <div>
                            {loading && <div>Loading...</div>}
                            {error && <div>Error</div>}
                            {planet &&
                                <div className="card">
                                    <h5 className="card-header">Planet Information</h5>
                                    <div className="card-body">
                                        <h5 className="card-title">{planet.name}</h5>
                                        <p className="card-text">climate: {planet.climate}</p>
                                        <p className="card-text">diameter: {planet.diameter}</p>
                                        <p className="card-text"> gravity: {planet.gravity}</p>
                                        <p className="card-text"> terrain: {planet.terrain}</p>
                                    </div>
                                    }
                                </div>
                       </> 
         )};
         
     };
      


export default Character;