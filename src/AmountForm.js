import React from 'react';
const InfoForm = ({ handleChange, handleNext }) => {
  return (
    <>
      <form>
            <label>
              How much can we count on you for?
              <input type="number" name="amount" placeholder="10" onChange={handleChange} data-reactname="amount"></input>
            </label>

            <button className="next-button" onClick={handleNext} data-currentform="0">Next</button>
          </form>
    </>
  );
}

export default InfoForm;