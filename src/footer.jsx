import React from "react";
import github from "../images/GitHub-Icon.png"
import linkedin from "../images/linkedin.png"

function Footer() {
    return (
        <div className="Footer">
            <a href="https://github.com/anelissao" target="_blank"> <img src={github} alt="github icon"/> </a>
            <a href="https://www.linkedin.com/in/anouar-elissaoui-785752227/" target="_blank"> <img src={linkedin} alt="linkedin icon"/> </a>
        </div>
    )
}

export default Footer