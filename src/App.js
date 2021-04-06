import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import About from './pages/About';
import Town from './pages/Town';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <About />
                </Route>
                <Route path="/town">
                    <Town />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
