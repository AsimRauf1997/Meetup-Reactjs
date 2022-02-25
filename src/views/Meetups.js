import React,{useEffect, useState} from 'react'
import { BallTriangle} from 'react-loader-spinner';
import { MeetupList } from '../components/meetup/MeetupList';

export const MeetUps = () => {
  const [loadMeetup, setLoadMeetup] = useState([])
  const [loading, setLoading] = useState(true)
  const getMeetupHandler =()=>{
    fetch(
      'https://meetup-dfb31-default-rtdb.firebaseio.com/meetups.json',
      {
        method:'GET',
      },
  )
 .then(res=> {
   return res.json()
 }).then(data=>{
   const meetups = []
   for(const key in data){
     const meetup = {
       id:key,
       ...data[key]
     }
     meetups.push(meetup)

   }
   if(meetups.length>0){
    setLoading(false)
    setLoadMeetup(meetups)

   } else{
     setLoading(true)
   }
   
 })
  .catch(err=> console.log(err))

  }
  useEffect(()=>{
    getMeetupHandler()
    console.log('UseEffect', typeof data)

  },[])
  
  return (
    <section>
       {loading? (
        <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
        <BallTriangle color="#614385" height={80} width={80} />
        
        </div>

      ):(
        <>
         <h1>All Meetups</h1>
          <MeetupList meetups={loadMeetup}/>
        </>
       

      )}
       
       
    </section>
  )
}
