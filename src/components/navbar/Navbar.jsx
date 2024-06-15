import "./navbar.scss"
import { useState} from "react";
function Navbar() {

    const [open ,setOpen] = useState(false)
    return(
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="/" />
                    <span>RealEstate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Others</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/">Signin</a>
                <a href="/" className="register">SignUp</a>
                <div className="menuicon">
                    <img src="/menu.png" alt="" onClick={() => setOpen(prev=>!prev)}/>
                </div>
                <div className={open?"menu active" : "menu"}>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Others</a>
                <a href="/">Agents</a>
                <a href="/">Signin</a>
                <a href="/">Signup</a>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;