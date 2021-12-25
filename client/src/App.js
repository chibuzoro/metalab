import MainLayout from "./layout/MainLayout";
import {DataProvider} from "./contexts/DataContext";
import {MainPage} from "./pages/main";


function App() {
    return (
        <MainLayout>
            <DataProvider>
                <MainPage/>
            </DataProvider>
        </MainLayout>
    );
}

export default App;
