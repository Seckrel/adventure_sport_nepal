import Home from "./pages/home/HomePage";
import SkiExpedition from "./pages/ski/SkiComponent";
import TrekExpedition from "./pages/trek/TrekComponent";
import { Switch, Route } from "react-router-dom";

export default function Body() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/ski">
                <SkiExpedition />
            </Route>
            <Route path="/trek">
                <TrekExpedition />
            </Route>
        </Switch>
    )
}