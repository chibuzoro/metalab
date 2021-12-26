import {useContext} from "react";
import DataContext from "../../contexts/DataContext";
import {DefaultPane} from "./DefaultPane";
import {StatusPane} from "./StatusPane";
import HoverEventContext from "../../contexts/HoverEventContext";


export const InfoPane = () => {
    const {activeSelection, removeCommitData} = useContext(DataContext);
    const {mouseEnter, mouseLeave} = useContext(HoverEventContext);

    const removeItem = (id) => {
        removeCommitData(id);
        mouseLeave()
    }

    if (activeSelection && activeSelection.length) {
        return (activeSelection.map((obj) => (<span
            key={obj.id}
            onMouseEnter={(e) => mouseEnter(obj.id)}
            onMouseLeave={(e) => mouseLeave()}
        ><StatusPane data={obj} removeHandler={removeItem}/></span>)));
    }

    return (
        <DefaultPane/>
    );
}


