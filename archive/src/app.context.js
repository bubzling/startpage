import React, { useContext, useState } from "react"
import { AppModel } from "./models/links.model";

// context object
export const AppContext = React.createContext();

// component
export const AppContextProvider = (props) => {
    // context state AppState
    const [appState, setAppState] = useState(new AppModel());
    const one = 123
    
    // context functions
    console.log("CONTEXT TEST", appState);

    const contextData = { one }
    // context provider
    return <AppContext.Provider value={contextData}>{ props.children }</AppContext.Provider>
}

export const useAppContext = () => useContext(AppContext);
