import { Redirect, Route, Switch } from "react-router-dom";
import Page404 from "../404/Page404";
import { BrowserRouter } from 'react-router-dom';
import FullTable from "../../Container/Table/TableNavBar/TableNavBar";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/admin" component={FullTable} />

                    <Redirect exact from="/" to="/admin" />
                    <Route component={Page404} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Routing;