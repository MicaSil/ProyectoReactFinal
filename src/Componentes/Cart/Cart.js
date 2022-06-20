import { useContext } from "react";
import CartContext from "../../Context/CartContext";
import './Cart.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartItem from "../CartItem/CartItem";


const Cart = () => {

    const {cart, borrarTodo, precioTotal, totalCantidad} = useContext(CartContext) 

    

    
    if(totalCantidad() === 0) {
        return (
            <h2>EL CARRITO ESTA VACIO</h2>
        )
    }

    return (     
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${precioTotal()}</h3>
            <button onClick={() => borrarTodo()} className="Button">Limpiar carrito</button>
            
        </div>
    )
}

export default Cart