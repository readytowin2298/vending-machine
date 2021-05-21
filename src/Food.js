import { Link } from "react-router-dom";


function Food(name, price){
    return (
        <div className="Food">
            {/* <img src={img} /> */}
            <p>{name}</p> <br />
            <p>{price}</p>
        </div>
    )
};

export default Food;