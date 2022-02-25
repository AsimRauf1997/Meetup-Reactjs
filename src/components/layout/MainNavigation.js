import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Badge from 'react-badges'
import FavouritesContext from '../../store/favouriteContext'
import styles from './MainNavigation.module.css'
export const MainNavigation = () => {
  const {totalFavourites}=useContext(FavouritesContext)
  return (
    <header className={styles.header}>
        <div className={styles.logo}>React MeetUps</div>
        <nav className={styles.navbar}>
            <ul>
                <Link to='/'>
                <li>All Meetups</li>
                </Link>
                <Link to='/new/meetup'>
                <li>New MeetUp</li>
                </Link>
                <Link to='/favourites'>
                <li>Favorites</li>
                
                </Link>
                <li>
                {totalFavourites ?
                (<Badge type = 'success'>
                {totalFavourites}
                </Badge>) : (<></>)}

                </li>
            </ul>
        </nav>
    </header>
  )
}
