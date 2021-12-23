import MainLayout from "./layout/MainLayout";
import {Box, Grid, Paper, styled} from "@mui/material";
import {Search} from "react-feather";
import Chart from "./components/Chart";
import {SearchBox} from "./components/Search";
import {DataProvider} from "./contexts/DataContext";

const InfoPane = styled(Paper)(({theme}) => ({
    backgroundColor: 'rgba(7,19,29,0.51)',
    borderRadius: '15px',
    textAlign: 'center',
    padding: '50px',
    fontSize: 'calc(1rem + 0.5vw)',

}));

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


function App() {
    return (
        <MainLayout>
            <DataProvider>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <ChartContainer>
                            <Chart/>
                        </ChartContainer>
                    </Grid>
                    <Grid item md={true}>
                        <SearchSection>
                            <SearchContent>
                                <Box sx={{
                                    position: "relative",
                                    height: '15px'
                                }} mt={20}>
                                    <SearchBox/>
                                </Box>
                                <Box mt={20}>
                                    <InfoPane>
                                        <div>
                                            <Search size={80}/>
                                        </div>
                                        <div>
                                            <p>Search for a Github repository to populate graph</p>
                                        </div>
                                    </InfoPane>
                                </Box>
                            </SearchContent>
                        </SearchSection>

                    </Grid>

                </Grid>
            </DataProvider>
        </MainLayout>
    );
}

export default App;
