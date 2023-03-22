import React from "react";
import { useState, useEffect } from "react";
import EnHancedFetch from "../../services/http";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";

const BASE_API_URL = "https://swapi.dev/api/";

const Character = () => {
    const [character, setCharacter] = useState([]);
    const [planet, setPlanet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const {id} = useParams();
    

   


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
        <>
        <Header></Header>
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Error</div>}
            {character && (
            <div className="card">
                <h3 className="card-title">{character.name}</h3>
                <p>{character.height}</p>
                <p>{character.mass}</p>
                <p>{character.hair_color}</p>
            </div>
            )}
        </div>
        </>
    );
}

export default Character;