import CartWidget from '../CartWidget/Cart.widget'
import './NavBar.css'

import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div className="contenedor">
            <nav>
                <Link to="/" className="logo2"><h1 className="logo">REGALA<span>ME</span></h1></Link>               
                <ul>
                <Link to="/category/Remeras"><li className="">REMERAS</li></Link>
                <Link to="/category/Jeans"><li className="">JEANS</li></Link>
                <Link to="/category/Calzado"><li className="">CALZADO</li></Link>
                </ul>
                <CartWidget className="carrito"/>
            </nav>
        </div>
        
    )}

export default NavBar