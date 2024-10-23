const Dialog = ({ message, closeMessage }) => {
    return (
        <div className='success-message'>
            <div className='success-message__cont'>
                <button className='success-message__cont--btn' onClick={ closeMessage }>x</button>
                <p className='success-message__cont--message'>{ message }</p>
            </div>
        </div>
    );
};

export default Dialog;