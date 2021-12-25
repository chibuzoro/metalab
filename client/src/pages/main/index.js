import {Box, Grid, styled} from "@mui/material";
import Chart from "../../components/Chart";
import {SearchBox} from "../../components/Search";
import {InfoPane} from "../../components/InfoPane";


const SearchSection = styled(Box)(({theme}) => ({
    backgroundColor: theme.palette.background.secondary,
    height: '100%',
    overflow: 'auto',
}));

const SearchContent = styled(Box)(({theme}) => ({
    padding: '50px',
}));

const ChartContainer = styled(Box)(({theme}) => ({
    paddingRight: '40px',
    height: '100%',
    width: '100%',
}));


export const MainPage = () => {
    return (<Grid container spacing={2}>
        <Grid item xs={12} md={8}>
            <ChartContainer>
                <Chart/>
            </ChartContainer>
        </Grid>
        <Grid item xs={12} md={4}>
            <SearchSection>
                <SearchContent>
                    <Box sx={{
                        position: "relative",
                        height: '15px'
                    }} mt={20}>
                        <SearchBox/>
                    </Box>
                    <Box mt={20} sx={{
                        overflow: "auto",
                        position: "relative",
                        height: '100%'
                    }}>
                        <InfoPane/>
                    </Box>
                </SearchContent>
            </SearchSection>

        </Grid>

    </Grid>)
}
