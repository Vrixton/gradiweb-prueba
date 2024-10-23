import FooterBg from "@/app/components/footer-background/footer-background"
const Footer = () => {
    return (
        <div className="footer">
            <FooterBg />
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


