import {MenuItem, MenuList, styled} from "@mui/material";
import React from "react";


const UserName = styled('span')(({theme}) => ({
    color: theme.palette.text.primary
}));



/**
 * List Items for drop menu
 * @param val
 * @param selectHandler
 * @returns {JSX.Element}
 */
const getMenuItem = (val, selectHandler) => {
    const [user, repo] = val.full_name.split('/');
    return (
    <MenuItem key={val.id}
              onClick={() => (selectHandler(val))}>
        <p><UserName children={user}/> / <b>{repo}</b></p>
    </MenuItem>
);}




/**
 * Populate Dropdown list component
 * @param items
 * @param selectHandler
 * @returns {JSX.Element|null}
 * @constructor
 */
const DropdownMenu = ({items, selectHandler}) => {
    if (!items || !items.length) {
        return null;
    }
    const itemsList = [];
    items.forEach((val) => {
        itemsList.push(getMenuItem(val,selectHandler));
    });


    return (<MenuList children={itemsList}/>);
}

export default DropdownMenu;
