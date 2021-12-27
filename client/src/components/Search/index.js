import SearchInput from "./SearchInput";
import {debounce} from "lodash";
import React, {useContext, useState} from "react";
import {Box, styled} from "@mui/material";
import DataContext from "../../contexts/DataContext";
import DropdownMenu from "./DropdownMenu";


const FinderWrapper = styled(Box)(({theme}) => ({
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    border: 'none',
    borderRadius: '5px',
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.primary
}));


export const SearchBox = () => {

    const [data, setData] = useState([]);
    const {fetchCommitData, fetchRepository} = useContext(DataContext);

    /**
     * Perform Repo Search
     * @param event
     */
    const handleSearch = debounce(async (event) => {
        const input = event.target.value;
        if (!input) {
            setData([]);
            return;
        }

        const res = await fetchRepository(input);
        if (res.data) {
            setData(res.data.items);
        }
    }, 500)


    /**
     * Fetch Commit stats for the selected repo/user
     * @param data
     */
    const fetchCommits = (data) => {
        fetchCommitData(data)
        setData([])
    }


    return (<FinderWrapper>
        <SearchInput handler={handleSearch}/>
        <DropdownMenu items={data} selectHandler={fetchCommits}/>
    </FinderWrapper>);
}
