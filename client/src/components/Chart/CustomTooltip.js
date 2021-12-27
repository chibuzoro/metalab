import {DateTime} from "luxon";
import {Box, Paper, styled} from "@mui/material";
import {GitCommit} from "react-feather";


const Wrapper = styled(Paper)(({theme}) =>
    ({
        padding: '10px 10px 0',
        textAlign: 'center',
        fontSize: theme.typography.fontSize
    })
);

const CommitBox = styled(Box)(({theme}) =>
    ({
        minWidth: '100px',
        display: 'inline-flex',
        alignContent: 'center',
        fontWeight: 'bold',
        marginLeft: 15,
        'span': {
            lineHeight: 2,
            marginLeft: 15,
        }
    })
);

const CustomToolTip = ({active, payload, label}) => {

    if (active && payload && payload.length && label) {
        const dateAsString = DateTime.fromSeconds(label).toFormat('LLL dd, yyyy')

        const Commits = payload.map((load) => (<CommitBox key={load.dataKey}>
            <GitCommit size={40} color={load.color}/>
            <Box>
                <span>  {load.value} Commits</span>
            </Box>
        </CommitBox>));

        return (
            <Wrapper>
                <Box>
                    <span>Week of {dateAsString}</span>
                </Box>
                <Box>
                    {Commits}
                </Box>

            </Wrapper>
        )
    }
    return null;
}

export default CustomToolTip;
