import React, {useEffect, useState} from "react"
import ItemList from '../ItemList/ItemList'
import {useParams} from "react-router-dom"
import  "./ItemListContainer.css"
import Slider from '../Slider/Slider'
import { db } from "../../Services/Firebase"
import {getDocs, collection, query, where} from "@firebase/firestore"


    const ItemListContainer = ({greeting}) => {
    
        const [productos, setProdcutos ] = useState ([])
        
        const { categoryId } = useParams()
        
        useEffect(() => {
            const collectionRef = categoryId
            ? query(collection(db, 'productos'), where('category', '==', categoryId))
            : collection(db, 'productos')

            getDocs(collectionRef).then(response => {
                const productos = response.docs.map(doc => {
                    return{id: doc.id, ...doc.data()}
                    
                })
                setProdcutos(productos)
            })
        }, [categoryId])

    

        return(
            <>
            <Slider />
            <div>
                <h1 className="greetin">{greeting}</h1>
                {productos.length > 0 
                    ?<ItemList productos={productos}/>
                    :<h1>Cargando...</h1>
                }
                
            </div>
            </>
        )
    }      


export default ItemListContainer
