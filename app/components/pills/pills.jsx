import Pill1 from "@/public/assets/pill1.png"
import Pill2 from "@/public/assets/pill2.png"
import Pill3 from "@/public/assets/pill3.png"
import Pill4 from "@/public/assets/pill4.png"
import Pill5 from "@/public/assets/pill5.png"
import Image from "next/image"

const Pills = () => {
    return (
        <div>
            <div className="cont-pills">
                <Image src={Pill1} className="cont-pills__pill pill1" alt="pill1"/>
                <Image src={Pill2} className="cont-pills__pill pill2" alt="pill2"/>
                <Image src={Pill3} className="cont-pills__pill pill3" alt="pill3"/>
                <Image src={Pill4} className="cont-pills__pill pill4 " alt="pill4"/>
                <Image src={Pill5} className="cont-pills__pill pill5" alt="pill5"/>
            </div>
        </div>
    )
}
export default Pills