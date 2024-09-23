import { createContext, useState, useContext, useEffect } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/turmas")
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => console.error("Erro ao buscar os dados:", error));
    }, []);

    return (
        <DataContext.Provider
            value={{ data }}
        >
            {children}
        </DataContext.Provider>
    );
}

export const useData = () => useContext(DataContext);