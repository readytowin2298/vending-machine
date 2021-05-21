import { Link } from "react-router-dom";
import './Menu.css';
import items from './items';


function Menu(){
    return (
        <div className="Menu">
            <Link to="/">Back to the Vending Machine</Link>
            <h4 className="display-4 Menu-title">Menu</h4>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item.id}>
                        <Link className="list-group-item" to={`/${item.name}`}>{item.name} : {item.price}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default Menu;