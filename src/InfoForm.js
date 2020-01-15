import React from 'react';
const InfoForm = ({ handleChange, handleNext }) => {
  return (
    <>
      <form>
            <label>
              First Name
              <input type="text" name="first-name" placeholder="First Name" onChange={handleChange} data-reactname="firstName"></input>
            </label>

            <label>
              Last Name
              <input type="text" name="last-name" placeholder="Last Name" onChange={handleChange} data-reactname="lastName"></input>
            </label>

            <label>
              Email
              <input type="email" name="email" placeholder="Email" onChange={handleChange} data-reactname="email"></input>
            </label>

            <label>
              Your Message
              <textarea name="your-message" placeholder="Your Message" onChange={handleChange} data-reactname="yourmessage"></textarea>
            </label>

            <button className="next-button" onClick={handleNext} data-currentform="1">Next</button>
          </form>
    </>
  );
}

export default InfoForm;