import {Box, Paper, styled} from "@mui/material";
import {Star, Trash2} from "react-feather";
import {humanReadableDates} from "../../util/dateUtil";
import {useContext, useRef} from "react";
import HoverEventContext from "../../contexts/HoverEventContext";

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
    marginTop: 25,
    transition: 'opacity 0.3s',
}));

const PaneViewContent = styled(Box)(({theme}) => ({
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: 10,
    'span': {
        marginLeft: 15
    }
}));

const PaneViewHeader = styled(Box)(({theme}) => ({
    fontSize: 26,
    width: '95%',
    'p': {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        marginBottom: 15,
    }

}));

const ThrashButton = styled(Box)(({theme, showTrash}) => ({
    position: "absolute",
    backgroundColor: '#282736ed',
    padding: 20,
    paddingLeft: 30,
    textAlign: 'center',
    top: 30,
    right: 10,
    transition: 'visibility 0.1s ease-in-out',
    visibility: !showTrash ? 'hidden' : ''
}));


export const StatusPane = ({data, removeHandler}) => {
    const ref = useRef(null);
    const {eventIdentifier} = useContext(HoverEventContext);


    const showTrash = () => {
        if (ref.current) {

            ref.current.style.opacity = 1;
            if (!eventIdentifier.id) {
                return false
            }

            if (data.id !== eventIdentifier.id) {
                ref.current.style.opacity = 0.5;
                return false
            }
        }

        return true;

    }


    return (
        <PaneViewStatus ref={ref} indicator={data.color_tag}>
            <PaneView>
                <PaneViewHeader>
                    <p>{data.user} / <b>{data.repo}</b></p>
                </PaneViewHeader>
                <ThrashButton showTrash={showTrash()}>
                    <Trash2 size={35} onClick={() => (removeHandler(data.id))}/>
                </ThrashButton>
                <PaneViewContent>
                    <Star size={18}/>
                    <span><b>{data.stargazers_count}</b></span>
                    <span>{humanReadableDates(data.updated_at)}</span>
                </PaneViewContent>
            </PaneView>
        </PaneViewStatus>
    );
}
