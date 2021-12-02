import { createContext, useState, useEffect } from "react";

import api from "../../services/api";

export const DrinksContext = createContext();

export const DrinksProvider = ({ children }) => {
    const [drinks, setDrinks] = useState([]);

    const getDrinksFromApi = () => {
        api.get("/")
            .then((response) => setDrinks(response.data))
            .catch((err) => console.log(err));
    };
    
    useEffect(() => {
        getDrinksFromApi();        
    }, []);

    return (
        <DrinksContext.Provider value={{ drinks, getDrinksFromApi }}>
            {children}
        </DrinksContext.Provider>
    );
};
