import FooterBg from "@/app/components/footer-background/footer-background"
import Newsletter from "@/app/components/newsletter/newsletter"

const Footer = () => {
    return (
        <div className="footer">
            <FooterBg />
            <h1 className="footer__title">Join the green revolution without commitment</h1>
            <p className="footer__description"> If you are missing something and don't want to miss future promotions  or our future products</p>
            <Newsletter />
        </div>
    )
}

export default Footer


