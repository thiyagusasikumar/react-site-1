import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6786ae57-077e-4752-99d4-f18b1c1fc80e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact container '>
        <div className='left'>
            <div className='message'>
                <h1>Send us a message </h1>
                <img src={msg} alt="" />
            </div>
            <p className='left-p'>Feel free to reach out through contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us as we strive to provide
                exceptional service to our university community.</p>
            <div className='mainInfo'>
            <div className='information'>
                <img src={mail} alt="" /> 
                <p>sthiyagusasikumark@gmail.com</p>
            </div>
            <div className='information'>
                <img src={phone} alt="" /> 
                <p>9360977635</p>
            </div>
            <div className='information'>
                <img src={location} alt="" /> 
                <p>32/1 Balamurugan Kovil Street Thathaneri Madurai-18</p>
            </div>
            </div>
        </div>
        <div className='right'>
            <form className='form' onSubmit={onSubmit} action="">
                <div className='element'>
                <label >Your Name</label>
                <input name='name' type="text" placeholder='Enter Your Name'/>
                </div>
                <div className='element'> 
                <label >Phone Number</label>
                <input name='phone' type="tel" placeholder='Enter Your Phone Number '/>
                </div>
                <div className='element'>
                <label >Your Email</label>
                <input name='email' type="email" placeholder='Enter our Email Id '/>
                </div>
                <div className='element'>
                <label >Write your messages here</label>
                <textarea name='message' className='yourMessage' type="text" placeholder='Enter Your Message '/>
                </div>
                <div className='elemwnt'>
                        <button className='btn btn-color'>Sumbit Now <img src={arrow} alt="" /></button>
                </div>
            </form>
            <span className='send'>{result}</span>
        </div>
        
    </div>
  )
}

export default Contact