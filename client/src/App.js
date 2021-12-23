import MainLayout from "./layout/MainLayout";
import {Box, FormControl, Grid, InputAdornment, OutlinedInput, Paper, styled} from "@mui/material";
import {Search} from "react-feather";
import Chart from "./components/Chart";

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

const SearchField = styled(OutlinedInput)(({theme}) => ({
    borderRadius: '5px',
    height: '80px',
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.secondary,
    padding: '15px'
}));


function App() {
    return (
        <MainLayout>
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <ChartContainer>
                        <Chart/>
                    </ChartContainer>
                </Grid>
                <Grid item md={true}>
                    <SearchSection>
                        <SearchContent>
                            <Box mt={20}>
                                <FormControl variant={"outlined"} fullWidth>
                                    <SearchField
                                        endAdornment={
                                            <InputAdornment position="start">
                                                <Search size={35}/>
                                            </InputAdornment>
                                        }
                                        placeholder="Search a Github Repository..."

                                    />
                                </FormControl>

                            </Box>
                            <Box mt={5}>
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
        </MainLayout>
    );
}

export default App;
