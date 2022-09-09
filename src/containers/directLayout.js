import DirectUsers from "../components/DirectUsers";
import DirectChatHeader from "../components/DirectChatHeader";


const directLayout = ({children}) => {
    return (
        <div className="directContainer">
            <main>
                <div className="container">
                    <div className="Direct">
                        <DirectUsers/>
                        <div className="directChat">
                            <DirectChatHeader/>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default directLayout;