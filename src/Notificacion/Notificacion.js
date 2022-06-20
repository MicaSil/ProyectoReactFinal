import { createContext, useState, useContext } from "react";


const Notificacion = ({mensaje, severidad}) => {

    const notificacionEstilos = {
        position: 'absolute',
        top: 140,
        right: 5,
        width: 'auto',
        height: 'auto',
        backgroundColor: severidad === 'error' ? 'red'  :'pink',
        padding: '10px 20px 10px 20px'
    }

    if(mensaje === ''){
        return
    }

    return(
        <div style={notificacionEstilos}>
            {mensaje}
        </div>
    )
}

const NotificacionContext = createContext()

export const NotificacionProvider = ({children}) => {
    const[mensaje, setMensaje] = useState('')
    const [severidad, setSeveridad] = useState('sucesos')
    const setNotificacion = (severidad, mensaje) => {
        setMensaje(mensaje)
        setSeveridad(severidad)
        setTimeout(() => {
            setMensaje('')
        }, 2000)
    }
    return(
        <NotificacionContext.Provider value={{setNotificacion}}>
            <Notificacion mensaje={mensaje} severidad={severidad}/>
            {children}
        </NotificacionContext.Provider>
    )
}

export const useNotificacion = () => {
    return useContext(NotificacionContext)
}