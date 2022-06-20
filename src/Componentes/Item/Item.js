import { Link } from 'react-router-dom'
import '../Item/Item.css'


const Item = ({id, img, name, precio}) => {
    return (

        <div className="tarjeta">
            <div className="conten">
                <img src={img} alt="img" className="img" />
                <h3 className="name">{name}</h3>
                <h6 className="precio">Precio : ${precio}</h6>
                <p className="texto">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <Link to={`/detail/${id}`}><button className="detalle">DETALLE</button></Link>
            </div>
        </div>
    )
}


export default Item