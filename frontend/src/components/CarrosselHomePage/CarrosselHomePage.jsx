import {userState} from "react"
import { Sparkles } from "lucide-react"
import "./CarrosselHomePage.css"

export default function CarrosselHomePage({
    alt, 
    icon = Saprkles,
    className = "",
}) {
    return (
        <figure className={'carrossel-home ${className}'} role = "group">
            <img
                src={require("./assets/image/Patisserie.jpg")}
                alt={alt}
                className="carrossel-home-img"
                draggable = {false}
            />
            <div className="carrossel-home-icon">
                <Icon className="icon-svg" />
            </div>
        </figure>
    )
}