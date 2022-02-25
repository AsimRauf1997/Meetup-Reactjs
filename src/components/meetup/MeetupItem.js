import React, { useContext } from 'react'
import FavouritesContext from '../../store/favouriteContext'
import { Card } from '../ui/Card'
import styles from './MeetupItem.module.css'
export const MeetupItem = (props) => {
  const favObj = useContext(FavouritesContext)
  console.log(props)
  const itemIsFav = favObj.itemIsFavourite(props.id)
  console.log(itemIsFav)
   const toggleFavourites = () =>{
     if(itemIsFav){
      favObj.removeFavourite(props.id)
     }else{
      favObj.addFavourite({
         id:props.id,
         title:props.title,
         image:props.image,
         address:props.address,
         description:props.description
       })
     }

   }
  return (
    <li className={styles.item}>
   <Card>
   <div className={styles.image}>
    <img  src={props.image} alt=''/>
    </div>
    <div className={styles.content}>
    <p>{props.title}</p>
    <address>{props.address}</address>
    <p>{props.description}</p>
    </div>
    <div className={styles.actions}>
        <button onClick={toggleFavourites}>{itemIsFav ? 'Remove': 'Add'}</button>
    </div>
   </Card>
    
    </li>
  )
}
