import {createContext, useState} from 'react'

const FavouritesContext = createContext({
    favourites:[],
    totalFavourites:0,
    addFavourite:(favouritesMeetup)=>{},
    removeFavourite:(meetupId)=>{},
    itemIsFavourite:(meetupId)=>{}

})

export const FavourtiesContextProvider =(props)=>{
    const [userFavourites, setUserFavourites]= useState([])
    const addFavouriteHandler = (favouritesMeetup)=>{
        console.log('favouritesMeetup:',favouritesMeetup)
       
        setUserFavourites((prev)=>{
            return prev.concat(favouritesMeetup)

        })
        console.log(userFavourites)
    }
    const removeFavouriteHandler = (meetupId)=>{
        setUserFavourites((prev)=>{
            return prev.filter(meetup=> meetup.id !== meetupId)

        })
        
    }
    const itemIsFavouriteHandler = (meetupId)=> {
        return userFavourites.some(meetup=> meetup.id === meetupId)
    }
    const context ={
        favourites:userFavourites,
        totalFavourites:userFavourites.length,
        addFavourite:addFavouriteHandler,
        removeFavourite:removeFavouriteHandler,
        itemIsFavourite:itemIsFavouriteHandler
    }
    
    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext