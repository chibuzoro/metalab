import {DateTime} from "luxon";
import {Box, Paper, styled} from "@mui/material";
import {GitCommit} from "react-feather";



const Wrapper = styled(Paper)(({theme})=>
    ({
        padding: '10px 10px 0',
        textAlign: 'center',
        fontSize: theme.typography.fontSize
    })
);

const CommitBox =  styled(Box)(({theme})=>
    ({
        width: '100%',
        display: 'inline-flex',
        justifyContent: 'space-evenly',
        fontWeight: 'bold',
        'span' : {
            lineHeight: 2
        }
    })
);

const CustomToolTip = ({ active, payload, label}) => {

    if (active && payload && payload.length && label){
        const dateAsString = DateTime.fromSeconds(label).toFormat('LLL dd, yyyy')
        return (
            <Wrapper>
                <Box>
                    <span>Week of {dateAsString}</span>
                </Box>
                <CommitBox>
                    <GitCommit size={40}/>
                    <Box>
                        <span>  {payload[0].value} Commits</span>
                    </Box>
                </CommitBox>

            </Wrapper>
        )
    }
    return null;
}

export default CustomToolTip;
