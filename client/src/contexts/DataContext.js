import React, {createContext, useState} from "react";
import {getCommitActivity} from "../apis/github";
import {merge} from "lodash";


const DataContext = createContext({
    chartData: {},
    activeSelection: [],
    fetchCommitData: () => {
    },
    removeCommitData: () => {
    }
});

export const DataProvider = ({children}) => {
    const [chartData, setChartData] = useState({});
    const [activeSelection, setActiveSelectionData] = useState([]);

    /**
     * Calculate hash code from given string
     * @source https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
     * @param str
     * @returns {number}
     */
    const hashStr = (str) => {
        let hash = 0, i = 0, len = str.length;
        while (i < len) {
            hash = ((hash << 5) - hash + str.charCodeAt(i++)) << 0;
        }
        return (hash + +2147483647) + 1;
    }

    /**
     * Generates a random color
     * @returns {string}
     */
    const generateColorTag = () => {
        return '#' + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0');
    }


    /**
     * Regroup the data object
     * @param hash
     * @param context
     * @returns {{}}
     */
    const shapeData = (hash, ...context) => {

        return {
            [hash]: {
                ...context.pop()
            }
        }
    }

    const fetchCommitData = async ({full_name, stargazers_count, updated_at, id}) => {
        try {
            const [user, repo] = full_name.split('/');
            const color_tag = generateColorTag();

            // generate a hash so we avoid duplicate repos by final consumers
            const hash = hashStr(full_name);

            // avoid unneeded lookups
            if (chartData[hash] || activeSelection.length  >= 3) {
                return;
            }

            setActiveSelectionData([{
                user,
                repo,
                stargazers_count,
                updated_at,
                id: hash,
                color_tag
            }, ...activeSelection]);

            const response = await getCommitActivity(user, repo);
            if (response.data) {
                const merged = merge({}, chartData, shapeData(hash, {color_tag, commits: response.data}))
                setChartData(merged);
            }
        } catch (e) {
            console.error(e);
            setChartData({});
            setActiveSelectionData([]);
        }

    }

    const removeCommitData = (key) => {

        if (chartData[key]){
            const remaining =  Object.assign({}, chartData);
            delete remaining[key];
            setChartData(merge({},remaining));

        }

        setActiveSelectionData(activeSelection.filter((el)=> el.id !== key));
    }

    return (
        <DataContext.Provider value={{
            chartData,
            activeSelection,
            fetchCommitData,
            removeCommitData
        }}>
            {children}
        </DataContext.Provider>
    );

}

export default DataContext;
