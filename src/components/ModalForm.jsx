import React from "react";

export default function ModalForm(props) {

    return (
        <div className="modal">
            <div className="close-modal" onClick={props.closeModal}>X</div>
            <h1>Book a Trip</h1>
            <form onSubmit={props.handleSubmit} >
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={props.handleChange}
                    name="firstName"
                    value={props.firstName}
                />
                <props.ValidationError
                    prefix="firstName"
                    field="firstName"
                    errors={props.errors}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={props.handleChange}
                    name="email"
                    value={props.email}
                />
                <props.ValidationError
                    prefix="email"
                    field="email"
                    errors={props.errors}
                />
                <label htmlFor="destination">Where would you like to go?</label>
                <select
                    id="destination"
                    onChange={props.handleChange}
                    value={props.destination}
                    name="destination"
                >
                    <option value="noSelection">--select a destination--</option>
                    <option value="frenchQuarter">French Quarter</option>
                    <option value="mountFuji">Mount Fuji</option>
                    <option value="sydney">Sydney Australia</option>
                    <option value="norway">Norway</option>
                </select>
                <button type="submit" disabled={props.submitting}>{props.submitted ? 'Thank You' : 'Submit'}</button>
            </form>
        </div>
    )
}