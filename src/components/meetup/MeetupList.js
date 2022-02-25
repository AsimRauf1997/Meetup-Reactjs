import React from 'react'
import { MeetupItem } from './MeetupItem'
import styles from './MeetupList.module.css'
export const MeetupList = (props) => {
  console.log('Meetups From List',props.meetups)
  return (
    <ul className={styles.list}>
       {props.meetups.map(meetup=>(
           <MeetupItem 
           key={meetup.id} 
           id={meetup.id}
           image = {meetup.image}
           description = {meetup.description}
           title = {meetup.title}
           address = {meetup.address}
           />
       ))}
        
    </ul>
  )
}
