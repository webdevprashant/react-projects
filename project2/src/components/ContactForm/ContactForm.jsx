import { MdMessage } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import { useState } from 'react';

const ContactForm = () => {
  let [name, setName] = useState("Ministry Of Darkness");
  let [email, setEmail] = useState("deathvalley@gmail.com");
  let [text, setText] = useState("Here comes the pain");
  function handleClick()  {
    console.log("Here comes the pain...");
  }
  function onSubmit(event)  {
    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);

    event.preventDefault();
  }
  return (
    <section className={styles.container}>
        <div className={styles.ContactForm}>
            <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize='24px' />} />
            <Button onClick = {handleClick} text="VIA CALL" icon={<FaPhoneAlt fontSize='24px' />} />
            </div>
            <Button text="VIA EMAIL FORM" isOutLine={true} icon={<HiMail fontSize='24px' />} />

          <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
            </div>

            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email" />
            </div>

            <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={10} />
            </div>

            <div style={{display: 'flex' , justifyContent: 'flex-end' }}>
              <Button text="SUBMIT BUTTON"  />
            </div>
            
            <div>{name + "  " + email + "   " + text} </div>
          </form>
        </div>
        <div className={styles.ContactFormImage}>
          <img src="images/Service 24_7-pana 1.svg" alt="A Girl with a Basket" />
        </div>
    </section>
  );
}

export default ContactForm;