import "../styles/app.scss";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import routes from "../configs/routes";
import Home from "./Home";
import Direct from "./Direct";
import Layout from "../containers";
import {Fragment} from "react";


const App=()=>{
    return(
        <Router>
            <Routes>
                {
                    routes.map((route, key) => {
                        const {layout, element, ...props} = route;
                        const Layout = layout ? layout : Fragment
                        return <Route key={key} {...props} element={<Layout>{element}</Layout>}/>
                    })
                }
            </Routes>
        </Router>
    )
}
export default App;
