import {FormControl, Input, InputAdornment, styled} from "@mui/material";
import {Search} from "react-feather";

const SearchField = styled(Input)(({theme}) => ({
    borderRadius: '5px',
    height: '80px',
    color: theme.palette.text.secondary,
    padding: '15px',
    '&:after, &:before': {
        border: 'none'
    }
}));

const SearchInput = ({handler}) => {
    return (<FormControl fullWidth>
        <SearchField
            disableUnderline
            autoFocus
            endAdornment={
                <InputAdornment position="start">
                    <Search size={35}/>
                </InputAdornment>
            }
            placeholder="Search a Github Repository..."
            onKeyUp={handler}

        />
    </FormControl>);
}

export default SearchInput;
