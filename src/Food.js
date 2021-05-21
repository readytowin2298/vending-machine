import { Link, useParams } from "react-router-dom";
import items from './items';

function Food(){
    const { name } = useParams()
    const {img, price} = items.filter(i => (i.name === name))[0]
    return (
        <div className=" card Food">
            <img style={{width: 250}} classname="img-thumbnail" src={img} />
            <div className="card-body">
                <h5 className="card-title" >{name}</h5>
                <p className="card-text" >${price}</p>
            </div>
        </div>
    )
};

export default Food;