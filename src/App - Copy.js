import React, { Component } from "react";
import dateInterval from "./helpers/dateInterval";
import timeInterval from "./helpers/timeInterval";
import countryData from "./helpers/countryData";
import firstClass from "./helpers/firstClass";
import { format } from "date-fns";

export default class AppCopy extends Component {
  state = {
    from: "",
    to: "",
    time: "",
    date: format(new Date(), "do MMM EEEEEE"),
    firstClass: firstClass(false),
    ticketType: "",
    country: "",
    submited: false,
  };

  onSelectChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  ticketTypeRadioChange = (ticketType) => {
    console.log(ticketType);
    this.setState({
      ticketType,
    });
  };

  onClickCheckbox = (event) => {
    console.log(event.target.checked);
    this.setState({
      firstClass: firstClass(event.target.checked),
    });
  };

  onInputChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      submited: true,
    });
    console.log(this.state);
  };

  render() {
    //
    const {
      from,
      to,
      time,
      date,
      firstClass,
      ticketType,
      country,
      submited,
    } = this.state;
    //
    return (
      <div className="app-container">
        <form className="ticket-form">
          <div className="travel-cont">
            <label>From:</label>
            <input
              name="from"
              value={from}
              onChange={this.onInputChange}
              type="string"
            ></input>
            <label>To:</label>
            <input
              name="to"
              value={to}
              onChange={this.onInputChange}
              type="string"
            ></input>
            <div className="checkbox-cont">
              <label>First class:</label>
              <input
                type="checkbox"
                checked={firstClass}
                onClick={this.onClickCheckbox}
              ></input>
            </div>
          </div>

          <div className="date-time-type-cont">
            <label>Date:</label>
            <select name="date" value={date} onChange={this.onSelectChange}>
              <optgroup label="Select day:">
                {dateInterval().map((date, idx) => {
                  return (
                    <option
                      value={date}
                      key={`day-${idx}`}
                      label={date}
                    ></option>
                  );
                })}
              </optgroup>
            </select>
            <label>Time:</label>
            <select name="time" value={time} onChange={this.onSelectChange}>
              <optgroup label="Select time:">
                {timeInterval().map((time, idx) => {
                  return (
                    <option
                      value={time}
                      key={`day-${idx}`}
                      label={time}
                    ></option>
                  );
                })}
              </optgroup>
            </select>
            <div className="radio-group">
              <div
                className="radio-wrapper"
                onClick={() => this.ticketTypeRadioChange("One way ticket")}
              >
                <input
                  type="radio"
                  checked={ticketType === "One way ticket"}
                  onChange={() => this.ticketTypeRadioChange("One way ticket")}
                ></input>
                <label>One way</label>
              </div>
              <div
                className="radio-wrapper"
                onClick={() => this.ticketTypeRadioChange("Return Ticket")}
              >
                <input
                  type="radio"
                  checked={ticketType === "Return Ticket"}
                  onChange={() => this.ticketTypeRadioChange("Return Ticket")}
                ></input>
                <label>Return</label>
              </div>
            </div>
          </div>

          <div className="country-selector">
            <select
              name="country"
              value={country}
              onChange={this.onSelectChange}
            >
              <optgroup label="Select country:">
                {countryData().map((data) => {
                  return (
                    <option value={data.ak} key={data.ar} label={data.sn} />
                  );
                })}
              </optgroup>
            </select>
            <button name="submited" onClick={this.onSubmit} value={submited}>
              Buy ticket
            </button>
          </div>
        </form>
        {submited && from !== "" && to !== "" && time !== "" && date !== "" ? (
          <div className="ticket">
            <h3>Ticket</h3>

            <div className="ticket-guts">
              <div className="ticket-row">
                <p className="ticket-properties">From:</p>
                <p> {from}</p>
              </div>
              <div className="ticket-row">
                <p className="ticket-properties">To:</p>
                <p> {to}</p>
              </div>
              <div className="ticket-row">
                <p className="ticket-properties">Date:</p>
                <p> {date}</p>
              </div>
              <div className="ticket-row">
                <p className="ticket-properties">Time:</p>
                <p> {time}</p>
              </div>
              <div className="ticket-row">
                <p className="ticket-properties">firstClass:</p>
                <p> {firstClass}</p>
              </div>
              <div className="ticket-row">
                <p className="ticket-properties">Type:</p>
                <p>{ticketType}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="error">Error! You must fill all fields!</div>
        )}
      </div>
    );
  }
}
