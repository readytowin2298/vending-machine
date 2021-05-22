import {Link} from "react-router-dom";
import vendingMachineImg from './images/vending_machine.png'

function VendingMachine({cart, setCart}){
    return (
    <div className="container d-flex justify-content-center">
        <Link to="/menu">
            <img className="img img-fluid" src={vendingMachineImg} />
        </Link>
        <button className="btn btn-warning" onClick={()=> setCart([])}>Empty Cart</button>
    </div>
    )
};

export default VendingMachine;