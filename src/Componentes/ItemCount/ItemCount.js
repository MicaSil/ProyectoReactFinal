import { useState } from "react"
import "./ItemCount.css"

const ItemCount = ( {stock, initial, onAdd} ) => {
    const [count, setCount] = useState(initial)

    const sumar = () => {
        if( stock > count){
            setCount(count + 1)
        }
    }

    const restar = () => {
        if(count > 1 ){
            setCount(count - 1)
        }
    }

    const AgregarCantidad = () => {
        onAdd(count)
    }


    return(
        <>

            <div className="containerButton">
                <div>
                    <button className="Boton1" onClick={restar}> - </button>
                    
                    <label className="count"> {count}</label>

                    <button className="Boton1" onClick={sumar}> + </button>
                </div>
                <button className="Agregar" onClick={AgregarCantidad}>AÑADIR AL CARRITO</button>
            </div>
        </>
    )
}


export default ItemCount