import { useContext, useState} from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import CartContext from "../../Context/CartContext"
import { useNotificacion } from "../../Notificacion/Notificacion"
import '../ItemDetail/ItemDetail.css'



const ItemDetail = ({ id, img, name, stock, precio, descripcion, category}) => {

    const [cantidad, setCantidad] = useState(0)
        
    const {agregoItem, productosCantidad} = useContext(CartContext)

    const initialValue = productosCantidad(id)

    const {setNotificacion} = useNotificacion()
        

    const onAdd = (cantidad) => {
        setCantidad(cantidad)
        setNotificacion('sucesos', 'Se añadió correctamente al carrito')
        agregoItem({id, name, precio, cantidad})
        
    }
    return(
        <>
            <div className="tarjeta">
                <div className="conten">
                    <img src={img} alt="img" className="img" />
                    <h3 className="name">{name}</h3>  
                    <h6 className="precio">Precio: ${precio}</h6>
                    <p className="texto">Descripcion: {descripcion}</p>
                    <p className="texto">Categoria: {category}</p>
                    <p className="texto">Stock: {stock}</p>
                        {cantidad > 0 
                        ? <Link to= '/cart'><button className="finalizar">Ir al carrito</button></Link> 
                        : <ItemCount stock = {10} initial = {initialValue} onAdd = {onAdd} /> }
                </div>

            </div>
        </>
    )
}

export default ItemDetail