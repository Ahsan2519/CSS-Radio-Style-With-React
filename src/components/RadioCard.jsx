import React from "react";

const RadioCard = () => {
  return (
    <form class="form-container">
      <div class="card">
        <input type="radio" id="standard" name="subscriptionOption" />
        <label htmlFor="standard">
          <h2>Standard</h2>
          <h3>
            <span>$</span>15<span>/Month</span>
          </h3>
        </label>
      </div>
      <div class="card">
        <input type="radio" id="basic" name="subscriptionOption" checked = 'true'  />
        <label htmlFor="basic">
          <h2>Basic</h2>
          <h3>
            <span>$</span>15<span>/Month</span>
          </h3>
        </label>
      </div>
      <div class="card">
        <input type="radio" id="premium" name="subscriptionOption" />
        <label htmlFor="premium">
          <h2>Premium</h2>
          <h3>
            <span>$</span>15<span>/Month</span>
          </h3>
        </label>
      </div>
    </form>
  );
};

export default RadioCard;
