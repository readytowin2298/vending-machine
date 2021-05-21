import { Link } from "react-router-dom";


function Food({name, price, img, id}){
    return (
        <div className="Food">
            <img src={img} />
            <p>{name}</p> <br />
            <p>{price}</p>
        </div>
    )
}