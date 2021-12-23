import PropTypes from 'prop-types';
import {styled} from "@mui/material";
import MainTheme from "../../theme/MainTheme";

const Root = styled('div')(({theme}) => ({
    backgroundColor: theme.palette.background.primary,
    color: theme.palette.text.primary,
    display: 'flex',
    height: '100vh',
    overflow: 'hidden',
    width: '100%'
}));

const Wrapper = styled('div')(({theme}) => ({
    display: 'flex',
    flex: '1 1 auto',
    height: '100%',
    overflow: 'hidden'
}));


const MainLayout = ({children}) => (
    <MainTheme>
        <Root>
            <Wrapper>
                {children}
            </Wrapper>
        </Root>

    </MainTheme>
)

MainLayout.propTypes = {
    children: PropTypes.node
};

export default MainLayout;
