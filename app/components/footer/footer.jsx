const Footer = () => {
    return (
        <div className="footer">
            <svg className="footer__top" width="1440" height="550" viewBox="0 0 1440 550" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1046.78 84.2501C839.09 84.2501 839.09 0 631.427 0C423.794 0 423.794 84.2501 216.13 84.2501C106.685 84.2501 54.8932 60.8592 0 38.7124V550H1440V0.355453C1254.23 6.11432 1246.79 84.2501 1046.78 84.2501Z" fill="#CAF0FF"/>
            </svg>
            <h1 className="footer__title">Join the green revolution without commitment</h1>
            <p className="footer__description"> If you are missing something and don't want to miss future promotions  or our future products</p>
            <div className="footer--cont-form">
                <input type="text" />
                <button>send</button>
            </div>
        </div>
    )
}

export default Footer


