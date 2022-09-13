import DirectUsers from "../components/DirectUsers";
const DirectLayout = ({children}) => {
    return (
        <div className="Direct">
            <div className="directUsers">
                <DirectUsers/>
            </div>
            <div className="directChat">
                {children}
            </div>
        </div>
    )
}

export default DirectLayout;