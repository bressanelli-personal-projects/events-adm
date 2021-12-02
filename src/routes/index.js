import { Switch, Route } from "react-router-dom";
import DrinksList from "../pages/DrinksList";
import Graduation from "../pages/Graduation";
import Home from "../pages/Home";
import Weddings from "../pages/Weddings";
import Confraternization from "../pages/Confraternization";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/drinks">
                <DrinksList />
            </Route>
            <Route path='/graduation'>
                <Graduation />
            </Route>
            <Route path='/weddings'>
                <Weddings />
            </Route>
            <Route path='/confraternization'>
                <Confraternization />
            </Route>
        </Switch>
    );
};

export default Routes;
