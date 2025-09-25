import { Link } from "react-router";
import '../App.css';
import './LinkComponent.css';

const LinkComponent = () => {
    return <Link className="hover-underline home-link" to={'/'}>Прибери се дома</Link>
}

export default LinkComponent;