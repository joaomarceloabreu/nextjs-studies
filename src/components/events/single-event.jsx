import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Image from 'next/image';

const SingleEvent = ({ data }) => {
    const inputEmail = useRef();
    const router = useRouter();
    const [message, setMessage] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        const emailValue = inputEmail.current.value;
        const eventId = router.query.id;

        try {
            const response = await fetch('/api/email-registration', {
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({email: emailValue, eventId})
            });

            if(!response.ok) throw new Error('Error: ' + response.status);
            
            const data = await response.json();
            setMessage(data.message);
            inputEmail.current.value = '';
            console.log('POST', data)
            
        } catch (error) {
            console.log(error)
        }

    }
  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get registered for this event</label>
        <input ref={inputEmail} type="email" id="email" placeholder="Please insert your email" />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
