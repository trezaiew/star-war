//how to create storage service
import { AsyncStorage } from 'react-native';
import { STORAGE_KEY } from '../constants';
 
export const getDecks = () => {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        return JSON.parse(results);
    });
    };

export const getDeck = (id) => {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        const data = JSON.parse(results);
        return data[id];
    });
};

export const saveDeckTitle = (title) => {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            title,
            questions: []
        }
    }));
};

export const addCardToDeck = (title, card) => {
    return AsyncStorage.getItem(STORAGE_KEY).then(results => {
        const data = JSON.parse(results);
        data[title].questions.push(card);
        AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    });
};


// Path: src\services\storage\index.js
// Compare this snippet from src\pages\Character\index.js:
// import EnHancedFetch from "../../services/http";
// import { useParams } from "react-router-dom";
// import Header from "../../components/Header";
//
// const BASE_API_URL = "https://swapi.dev/api/";



