import React from 'react';

export default function DataRequestPage() {
    return (
        <div>
            <h1>Contact Data Request</h1>
            <form>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="request">Request:</label>
                    <textarea id="request" name="request" required></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}