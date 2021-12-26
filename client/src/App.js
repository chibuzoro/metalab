import MainLayout from "./layout/MainLayout";
import {DataProvider} from "./contexts/DataContext";
import {MainPage} from "./pages/main";
import { HoverEventProvider} from "./contexts/HoverEventContext";


function App() {
    return (
        <MainLayout>
            <DataProvider>
                <HoverEventProvider>
                    <MainPage/>
                </HoverEventProvider>
            </DataProvider>
        </MainLayout>
    );
}

export default App;
