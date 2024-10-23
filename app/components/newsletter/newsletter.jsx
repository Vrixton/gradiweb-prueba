import React, { useState } from 'react';
import Dialog from "@/app/components/dialog/dialog"

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [sended, setSended] = useState(false);

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!validateEmail(email)) {
            setError('*Please enter a valid email.');
            return;
        }
        setSended(true);
        setSuccessMessage('Your email has been added successfully')

    };

    const closeMessage = () => {
        setSended(false);
    };

    return (
        <div>
        { sended &&
            <Dialog closeMessage={ closeMessage } message={successMessage} />
        }
            <div className="newsletter__cont-form">
                <form onSubmit={handleSubmit}>
                    <input
                        className="newsletter__cont-form--input"
                        placeholder="Your email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="newsletter__cont-form--button btn-pink" type="submit">
                        Send
                    </button>
                </form>
            </div>
            {error && <div className="error-message">{error}</div>}
        </div>
        
    );
};

export default Newsletter;