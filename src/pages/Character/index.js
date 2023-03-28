import React from "react";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import EnHancedFetch from "../../services/http";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import { setItem, getItem} from "../../services/storage";

const BASE_API_URL = "https://swapi.dev/api/";

const Character = () => {
    const [character, setCharacter] = useState([]);
    const [planet, setPlanet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const { id } = useParams();
     
    let time = new Date();
    

    useEffect(() => {
        const fetchCharacter = async () => {
            let data = getItem(`character${id}`);

            if (data) {
                setCharacter(data);
                
                return;
            }

            try {
                const response = await EnHancedFetch(
                    "GET",
                    BASE_API_URL + "people/" + id,
                    ""
                );

                setItem(`character${id}`, response);
                setCharacter(response);
            } catch (error) {
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        const fetchPlanet = async () => {
            let data = getItem(`planet${id}`);

            if (data) {
                setPlanet(data);

                return;
            }
            try {
                const response = await EnHancedFetch(
                    "GET",
                    BASE_API_URL + "planets/" + id,
                    ""
                );
                setItem(`planet${id}`, response);
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

        <div>
            <Header />
            {loading && <Loading />}
            {error && <Error />}
            {character &&
                <div className="card">
                    <h5 className="card-header">Personal Information</h5>
                    <div className="card-body">
                        <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">gender: {character.gender}</p>
                        <p className="card-text">height: {character.height}</p>
                        <p className="card-text"> mass: {character.mass}</p>
                        <p className="card-text"> hair_color: {character.hair_color}</p>

                    </div>  </div>}

            <div>
                {loading && <Loading />}
                {error && <Error />}
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

                    </div>}
            </div></div>
    );

};



export default Character;