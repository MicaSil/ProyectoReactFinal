import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import '../CartItem/CartItem.css'

const CartItem = ({id, name, cantidad, precio}) => {
    const{borrarItem} = useContext(CartContext)

    const eliminarRemove = (id) => {
        borrarItem(id)
    }


    return(
        <div className="cart">
            <div key={id}>{name}</div>
            <div>Cantidad: {cantidad}</div>
            <div>Precio: ${precio}</div>
            <div>Total: ${precio * cantidad}</div>
            <button className="buttonCart" onClick={() => eliminarRemove(id)} >X</button>
        </div>
)
}

export default CartItem