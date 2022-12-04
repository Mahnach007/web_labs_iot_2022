import React, { useState } from "react";
import { data } from "/Users/Vlad/second-app/src/components/data.js";


export const ItemsContext = React.createContext();

export default ({children}) => {
    const [animalsData, setAnimalsData] = useState(data);
    return <ItemsContext.Provider value={[animalsData, setAnimalsData]}>
        {children}
    </ItemsContext.Provider>
}