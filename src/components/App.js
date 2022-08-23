import "../styles/app.scss";
import Navigation from "./Navigation";
import Cards from "./cards";
import SideBar from "./Slidebar";

const App=()=>{
    return(
        <div className="app">
            <Navigation/>
            <main>
                <div className="container">
                    <Cards/>
                    <SideBar/>
                </div>
            </main>
        </div>
    )
}
export default App;