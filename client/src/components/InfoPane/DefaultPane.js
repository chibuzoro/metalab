import {Paper, styled} from "@mui/material";
import {Search} from "react-feather";

const Pane = styled(Paper)(({theme}) => ({
    backgroundColor: 'rgba(7,19,29,0.51)',
    borderRadius: '15px',
    textAlign: 'center',
    padding: '50px',
    fontSize: 'calc(1rem + 0.5vw)',

}));

export const DefaultPane = () => (
    <Pane>
        <div>
            <Search size={80}/>
        </div>
        <div>
            <p>Search for a Github repository to populate graph</p>
        </div>
    </Pane>);
