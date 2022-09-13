import Home from "../components/Home"
import Direct from "../components/Direct";
import Layout from "../containers";
import InitialDirect from "../components/initialDirect";

const routes = [
    { path: '/', element: <Home/> , layout:Layout},
    { path: '/direct', element: <InitialDirect/> , layout:Layout},
    { path: '/direct/:direct_id', element: <Direct/> , layout:Layout}
];
export default routes;