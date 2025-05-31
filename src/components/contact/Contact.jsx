import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [serviceType, setServiceType] = useState('');
  const [serviceTime, setServiceTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      name,
      email,
      serviceType,
      serviceTime,
      message
    });
    alert('Form submitted!');
  };

  return (
    <div className='contactContainer'>
    <div >
  <img className='contactimg' src='./contact.png' />
</div>

    <section className="contact-us">
      <h2>Contact Us</h2>
      <p>Let us know what type of maid service you need, and we'll get back to you!</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="number" 
            id="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="serviceType">Type of Service</label>
          <select
            id="serviceType"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            required
          >
            <option value="">Select Service</option>
            <option value="cookingMaid">Cooking Maid</option>
            <option value="cleaningMaid">Cleaning Maid</option>
            <option value="nanny">Nanny</option>
            <option value="caretaker">Caretaker</option>
            <option value="allRounder">All-Rounder</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="serviceTime">Service Time</label>
          <select
            id="serviceTime"
            value={serviceTime}
            onChange={(e) => setServiceTime(e.target.value)}
            required
          >
            <option value="">Select Time</option>
            <option value="partTime">Part-Time</option>
            <option value="fullTime">Full-Time</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <button type="submit" className="submit-button">Send message</button>
      </form>
    </section>
    </div>);
};

export default Contact;
