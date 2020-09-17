import React from "react";

export default function Ticket(formValues) {
  const {
    from,
    to,
    date,
    time,
    firstClass,
    ticketType,
  } = formValues.formValues;

  return (
    <div>
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
            <p className="ticket-properties">First Class:</p>
            <p> {firstClass === false ? "No" : "Yes"}</p>
          </div>
          <div className="ticket-row">
            <p className="ticket-properties">Type:</p>
            <p>{ticketType}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
