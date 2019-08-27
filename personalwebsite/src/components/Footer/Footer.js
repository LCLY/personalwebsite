import React, { useRef, useState } from "react";
import { Popup } from "semantic-ui-react";
const Footer = () => {
    const [formData, setFormData] = useState({
        copySuccess: "Click to copy email",
    });
    const { copySuccess } = formData;

    const textAreaRef = useRef(null);

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand("copy");
        e.target.focus();
        setFormData({ ...formData, copySuccess: "Copied!" });
        //change the text back to original after 3s
        setTimeout(function() {
            setFormData({ ...formData, copySuccess: "Click to copy email!" });
        }, 3000);
    }
    return (
        <div className="ui inverted vertical segment">
            <div className="container footer__innerContainer">
                <div className="footer__spacing">
                    <h1>Contact me</h1>
                </div>
                <div className="footer__spacing">
                    <a>
                        <i className="fab fa-github footer__icon" />
                    </a>
                    <a>
                        <i className="fab fa-linkedin footer__icon" />
                    </a>
                    <a>
                        {document.queryCommandSupported("copy") && (
                            <Popup
                                content={copySuccess}
                                trigger={
                                    <i
                                        className="fas fa-envelope footer__icon"
                                        onClick={copyToClipboard}
                                    />
                                }
                            />
                        )}
                    </a>
                </div>
                <div className="footer__spacing">
                    <i class="far fa-copyright" /> 2019 Henry Choo
                </div>
            </div>
            {/* hidden textarea to copy the email */}
            <div style={{ display: "none" }}>
                <form>
                    <textarea ref={textAreaRef} value="lchoo9294@gmail.com" />
                </form>
            </div>
        </div>
    );
};

export default Footer;
