import React,{useRef} from 'react'
import { Card } from '../ui/Card'
import styles from './NewMeetupForm.module.css'
export const  NewMeetupForm = (props) => {
    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const descriptionInputRef = useRef()
    const addressInputRef = useRef()
    const submitHandler = (event) =>{

        event.preventDefault();
       const enteredTitle = titleInputRef.current.value;
       const enteredImage = imageInputRef.current.value;
       const enteredDescription = descriptionInputRef.current.value;
       const enteredAddress = addressInputRef.current.value;
       const data = {
           title: enteredTitle,
           image:enteredImage,
           description: enteredDescription,
           address:enteredAddress
       }
       props.onAddMeetup(data);

    }
  return (
    <Card>
        <form className={styles.form} onSubmit= {submitHandler}>
            <div className={styles.control}>
            <label htmlFor='title'> Meetup Title</label>
            <input type='text' required id='title' ref={titleInputRef}/>
            </div>
            <div className={styles.control}>
            <label htmlFor='image'> Meetup Image</label>
            <input type='url' required id='image' ref={imageInputRef}/>
            </div>
            <div className={styles.control}>
            <label htmlFor='adress'> Address</label>
            <input type='text' required id='address' ref={addressInputRef}/>
            </div>
            <div className={styles.control}>
            <label htmlFor='description'> Description</label>
            <textarea type='text' required id='description' rows='5' ref={descriptionInputRef}></textarea>
            </div>
            <div  className={styles.actions}>
                <button> Add Meetup</button>
            </div>
        </form>
    </Card>
  )
}
