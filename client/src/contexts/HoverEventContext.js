import {createContext, useState} from "react";


const HoverEventContext = createContext({
    eventIdentifier: {},
    mouseEnter: () => {
    },
    mouseLeave: () => {
    }
});

export const HoverEventProvider = ({children}) =>{
    const [eventIdentifier, setEventIdentifier] = useState({});

    const mouseEnter = (id) => {
        setEventIdentifier({id})
    }

    const mouseLeave = () => {
        setEventIdentifier({id: null})
    }



    return(
        <HoverEventContext.Provider value={{
            eventIdentifier,
            mouseEnter,
            mouseLeave,
        }}>{children}</HoverEventContext.Provider>
    )

}

export default HoverEventContext;
