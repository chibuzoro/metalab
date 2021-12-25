import {Box, Grid, Paper, styled} from "@mui/material";
import {Star, Trash2} from "react-feather";
import {humanReadableDates} from "../../util/dateUtil";

const PaneView = styled(Box)(({theme}) => ({
    backgroundColor: '#282736',
    position: 'relative',
    borderBottomRightRadius: '15px',
    borderTopRightRadius: '15px',
    borderTopLeftRadius: '8px',
    borderBottomLeftRadius: '8px',
    padding: '10px',
    paddingLeft: '20px',
    fontSize: theme.typography.fontSize,
    color: '#BFBDD9',
    'b, svg': {
        color: '#FFF',
    }
}));

const PaneViewStatus = styled(Paper)(({theme, indicator}) => ({
    backgroundColor: indicator,
    borderRadius: '15px',
    borderLeft: `15px outset ${indicator}`,
    marginTop: 25
}));

const PaneViewContent = styled(Box)(({theme}) => ({
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    'span': {
        marginLeft: 15
    }
}));

const PaneViewHeader = styled(Box)(({theme}) => ({
    fontSize: 26,
    width: '100%',
    'p': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }

}));


export const StatusPane = ({data, removeHandler}) => {


    return (
        <PaneViewStatus indicator={data.color_tag}>
            <PaneView>
                <Grid container sx={
                    {
                        alignItems: 'center'
                    }
                }>
                    <Grid item xs={11}>
                        <PaneViewHeader>
                            <p>{data.user} / <b>{data.repo}</b></p>
                        </PaneViewHeader>
                        <PaneViewContent>
                            <Star size={18}/>
                            <span><b>{data.stargazers_count}</b></span>
                            <span>{humanReadableDates(data.updated_at)}</span>
                        </PaneViewContent>
                    </Grid>
                    <Grid item xs={1}>
                        <Box>
                            <Trash2 size={35} onClick={() => (removeHandler(data.id))}/>
                        </Box>
                    </Grid>

                </Grid>
            </PaneView>
        </PaneViewStatus>
    );
}
