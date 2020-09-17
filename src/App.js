import React, { useState } from "react";

import dateInterval from "./helpers/dateInterval";
import timeInterval from "./helpers/timeInterval";
import countryData from "./helpers/countryData";

import Ticket from "./Components/Ticket";

import { format } from "date-fns";

export default function App() {
  const [formValues, setFormValues] = useState({
    from: "",
    to: "",
    time: "",
    date: format(new Date(), "do MMM EEEEEE"),
    firstClass: false,
    ticketType: "",
    country: "",
    submited: false,
  });

  const [error, setError] = useState({
    error: false,
  });

  const {
    from,
    to,
    time,
    date,
    firstClass,
    ticketType,
    country,
    submited,
  } = formValues;

  //Event handlers

  const onSelectChange = (event) => {
    console.log(event.target.value);

    setFormValues({
      ...formValues,

      [event.target.name]: event.target.value,
    });
  };

  //

  const ticketTypeRadioChange = (ticketType) => {
    console.log(ticketType);

    setFormValues({
      ...formValues,

      ticketType,
    });
  };

  //

  const onClickCheckbox = (event) => {
    console.log(event.target.checked);

    if (event.target.checked === true) {
      setFormValues({
        ...formValues,

        firstClass: true,
      });

      return "Yes";
    } else {
      setFormValues({
        ...formValues,

        firstClass: false,
      });

      return "No";
    }
  };

  //

  const onInputChange = (event) => {
    console.log(event.target.value);

    setFormValues({
      ...formValues,

      [event.target.name]: event.target.value,
    });
  };

  //

  const onSubmit = (event) => {
    event.preventDefault();

    // Error handling

    if (
      from === "" ||
      to === "" ||
      time === "" ||
      date === "" ||
      ticketType === ""
    ) {
      setError(true);
    } else {
      setError(false);

      setFormValues({
        ...formValues,

        submited: true,
      });

      return <Ticket formValues={formValues} />;
    }

    console.log(formValues);
  };

  //render

  return (
    <div className="app-container">
      <form className="ticket-form">
        <div className="travel-cont">
          <label>From:</label>

          <input
            name="from"
            value={from}
            onChange={onInputChange}
            type="string"
          ></input>

          <label>To:</label>

          <input
            name="to"
            value={to}
            onChange={onInputChange}
            type="string"
          ></input>

          <div className="checkbox-cont">
            <label>First class:</label>

            <input
              type="checkbox"
              checked={firstClass}
              onChange={onClickCheckbox}
            ></input>
          </div>
        </div>

        <div className="date-time-type-cont">
          <label>Date:</label>

          <select name="date" value={date} onChange={onSelectChange}>
            <optgroup label="Select day:">
              {dateInterval().map((date, idx) => {
                return (
                  <option value={date} key={`day-${idx}`} label={date}></option>
                );
              })}
            </optgroup>
          </select>

          <label>Time:</label>

          <select name="time" value={time} onChange={onSelectChange}>
            <optgroup label="Select time:">
              <option value="" key={`time-${0}`} label={time}></option>
              {timeInterval().map((time, idx) => {
                return (
                  <option
                    value={time}
                    key={`time-${idx + 1}`}
                    label={time}
                  ></option>
                );
              })}
            </optgroup>
          </select>

          <div className="radio-group">
            <div
              className="radio-wrapper"
              onClick={() => ticketTypeRadioChange("One way ticket")}
            >
              <input
                type="radio"
                checked={ticketType === "One way ticket"}
                onChange={() => ticketTypeRadioChange("One way ticket")}
              ></input>

              <label>One way</label>
            </div>

            <div
              className="radio-wrapper"
              onClick={() => ticketTypeRadioChange("Return Ticket")}
            >
              <input
                type="radio"
                checked={ticketType === "Return Ticket"}
                onChange={() => ticketTypeRadioChange("Return Ticket")}
              ></input>

              <label>Return</label>
            </div>
          </div>
        </div>

        <div className="country-selector">
          <div className="country-selector-label">
            <label>Select country of origin:</label>
            <label>(COVID-19 precautions)</label>
          </div>
          <select name="country" value={country} onChange={onSelectChange}>
            <optgroup label="Select country:">
              {countryData().map((data) => {
                return <option value={data.ak} key={data.ar} label={data.sn} />;
              })}
            </optgroup>
          </select>

          <button name="submited" onClick={onSubmit} value={submited}>
            Buy ticket
          </button>
        </div>
      </form>
      {error === true ? (
        <div className="error">Error! You must fill all fields!</div>
      ) : (
        <div></div>
      )}
      {submited ? <Ticket formValues={formValues} /> : <div></div>}
    </div>
  );
}
