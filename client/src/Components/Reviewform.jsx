import React, { useState } from 'react';
import 'Reviewform.css';

const Reviewform = ({gameId, onSubmit}) => {
    const [name, setName] = useState("");
    const [review, setReview] = useState("");
    
    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch("/reviews", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                review,
                gameId,
            }),
        })

        const data = await response.json();
        onSubmit(data);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor='review'>Review:</label>
                <textarea
                    id="review"
                    value={review}
                    onChange={(event) => setReview(event.target.value)}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Reviewform