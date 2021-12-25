import {useContext} from "react";
import DataContext from "../../contexts/DataContext";
import {DefaultPane} from "./DefaultPane";
import {StatusPane} from "./StatusPane";


export const InfoPane = () => {
    const {activeSelection, removeCommitData} = useContext(DataContext);

    if (activeSelection && activeSelection.length) {
        return (activeSelection.map((obj)=>(<StatusPane key={obj.id} data={obj} removeHandler={removeCommitData}/>)));
    }

    return (
        <DefaultPane/>
    );
}


