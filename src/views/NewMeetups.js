import React from 'react'
import { NewMeetupForm } from '../components/meetup/NewMeetupForm'
import {useHistory} from 'react-router-dom'
export const NewMeetup = () => {
  const history = useHistory()
  const addMeetupHandler=(meetupData)=>{
    fetch(
      'https://meetup-dfb31-default-rtdb.firebaseio.com/meetups.json',
      {
        method:'POST',
        body: JSON.stringify(meetupData),
        headers:{
          'Content-Type':'application/json'
        }
      },
  )
  .then(()=> history.replace('/'))
  .catch(err=> console.log(err))
  }
  return (
    <div>
      <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
    </div>
  )
}
