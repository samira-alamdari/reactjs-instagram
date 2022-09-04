import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";

const MenuItem = ({path, label}) => {
    const {pathname} = useLocation();
    return (
        <li className={path === pathname ? 'active' : ''}>
            <Link to={path}>{label}</Link>
        </li>
    )
}

export default MenuItem;