
import React, { useEffect, useState } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from '@firebase/firestore'
import { db } from '../../Services/Firebase'


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()

    const { productId } = useParams()

    useEffect(() => {
        getDoc(doc(db, 'productos', productId)).then(response => {
            
            const producto = { id: response.id, ...response.data()}
            setProducto(producto)
        })
    }, [productId])

    return(
        <div className="ItemdetailContainer">
            <ItemDetail {...producto} />
        </div>
    )
}

export default ItemDetailContainer

