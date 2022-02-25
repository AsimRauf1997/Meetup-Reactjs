import React, { useContext } from 'react'
import { MeetupList } from '../components/meetup/MeetupList'
import FavouritesContext from '../store/favouriteContext'

export const Favourites = () => {
  const {favourites, totalFavourites}=useContext(FavouritesContext)
  console.log(favourites)
  return (
    <section>
      <h1> My Favourites</h1>
      {totalFavourites===0?(
        <h4> You have No Favourites Start Adding Some</h4>
      ):(

        <MeetupList meetups = {favourites}/>
      )}
     
    </section>
  )
}
