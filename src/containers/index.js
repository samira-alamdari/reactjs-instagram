import Navigation from "../components/Navigation";


const Layout = ({children}) => {
    return (
        <div className="app">
            <Navigation/>
            <main>
                <div className="container">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout;

