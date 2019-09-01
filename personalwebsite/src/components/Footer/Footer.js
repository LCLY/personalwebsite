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
        <div
            className="ui inverted vertical segment"
            style={{ padding: "5rem 0 5rem 0" }}
        >
            <div className="container footer__innerContainer">
                <div className="footer__spacing">
                    <h1 style={{ fontFamily: "Poppins, cursive" }}>
                        Let's talk
                    </h1>
                    <a href="mailto:lchoo9294@gmail.com" target="_blank">
                        <button
                            className="ui button inverted"
                            style={{ fontSize: "1.5rem" }}
                        >
                            Contact me
                        </button>
                    </a>
                </div>
                <div className="footer__spacing">
                    <a
                        href="https://github.com/LCLY"
                        target="_blank"
                        style={{ color: "inherit" }}
                    >
                        <i className="fab fa-github footer__icon" />
                    </a>
                    <a
                        href="https://linkedin.com/in/lcly9294/"
                        target="_blank"
                        style={{ color: "inherit" }}
                    >
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
                    <i className="far fa-copyright" /> 2019 Henry Choo. All
                    rights reserved.
                </div>
            </div>
            {/* hidden textarea to copy the email */}
            <div style={{ position: "fixed", opacity: 0 }}>
                <form>
                    <textarea ref={textAreaRef} value="lchoo9294@gmail.com" />
                </form>
            </div>
        </div>
    );
};

export default Footer;
