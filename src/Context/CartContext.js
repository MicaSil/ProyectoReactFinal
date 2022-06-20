import {useState, createContext, useEffect, useRef} from "react"


const CartContext = createContext()

    export const CartContextProvider = ({children}) => {
        const [cart, setCart] = useState([])
        const CountRenderRef = useRef(0)
        useEffect(() => {
            const CartSaved = localStorage.getItem('cart')
            const CartSavedParsed = JSON.parse(CartSaved)
            setCart(CartSavedParsed)
        }, [])

        useEffect (() => {
            if(CountRenderRef.current > 0){
                localStorage.setItem('cart', JSON.stringify(cart))
            }CountRenderRef.current += 1
        }, [cart])

    const agregoItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)){
            setCart([...cart, productToAdd])
        }else{
            const cartNew = cart.map(prod => {
                if(prod.id === productToAdd.id){
                    const prodNew = {
                        ...prod, cantidad: prod
                    }
                    return prodNew
                }else {
                    return prod
                }
            })
            setCart(cartNew)
        }
        
    }

    const totalCantidad = () => {
        let cont = 0
        cart.forEach(prod =>{
        cont += prod.cantidad
        })
        return cont
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const productosCantidad = (id) => {
        const prod = cart.find(prod => prod.id === id)

        return prod ? prod.cantidad : 0
    }

    const borrarItem = (id) => {
        const cartNew  = cart.filter(prod => prod.id !== id)
        setCart(cartNew)
    }

    const precioTotal = () => {
        let total = 0
        cart.forEach(prod => {
            total += prod.cantidad * prod.precio
        })
        return total
    }
    

    const borrarTodo = () => {
        setCart([])
    }
    return(
        <CartContext.Provider value={{cart, agregoItem, totalCantidad, productosCantidad, borrarItem, borrarTodo, precioTotal}} >
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
