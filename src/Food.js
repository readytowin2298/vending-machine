import { Link, useParams } from "react-router-dom";
import items from './items';


function Food({cart, setCart}){
    const { name } = useParams()
    const {img, price} = items.filter(i => (i.name === name))[0]
    return (
        <div className="col col-6">
            <Link to="/" className="btn btn-primary">Back to the Vending Machine</Link>
            <div className=" card Food">
                <img style={{width: 250}} classname="img-thumbnail" src={img} />
                <div className="card-body">
                    <h5 className="card-title" >{name}</h5>
                    <p className="card-text" >${price}</p>
                    <button className="btn btn-success" onClick={() => setCart([...cart, {img, name, price}])} >GIMME ONE!</button>
                </div>
            </div>
        </div>
    )
};

export default Food;