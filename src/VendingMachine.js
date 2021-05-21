import {Link} from "react-router-dom";
import vendingMachineImg from './images/vending_machine.png'

function VendingMachine(){
    return (
    <div className="container d-flex justify-content-center">
        <Link to="/menu">
            <img className="img img-fluid" src={vendingMachineImg} />
        </Link>
    </div>
    )
};

export default VendingMachine;