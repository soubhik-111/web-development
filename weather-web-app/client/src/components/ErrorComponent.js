import React from 'react';

const ErrorComponent = ({ message, onClose }) => (
    <div className="error">
        <span>{message}</span>
        <button onClick={onClose}>x</button>
    </div>
);

export default ErrorComponent;
