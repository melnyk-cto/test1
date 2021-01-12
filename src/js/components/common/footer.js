import React from 'react'
class Footer extends React.Component{
    render () {
        return (
            <div className="component global-footer">
                <div className="global-footer__wrapper">
                    <div className="global-footer__branding">
                        <a className="global-footer__Waverly" href="/">
                            <svg className="footer_logo_svg"  id="Layer_1" fill="white" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><title>Option 1-3</title><path d="M734,298.41c-.06,0-19.84.24-33.39,23.52L608,484.4,509.89,318.32l2,3.41c-13.54-23.26-33.43-23.32-33.53-23.32h-125s20,0,33.54,23.32L608,701.59,829.34,321.27c13.56-22.85,33.25-22.86,33.25-22.86Z"/><path d="M300.51,321.73C287,298.47,267.08,298.41,267,298.41H137.33s19.86,0,33.43,23.15l220,380L455.69,593"/></svg>
                        </a>
                         <p className="global-footer__mantra">We Make Magic Happen</p>
                    </div>
                    <div className="global-footer__nav-wrapper">
                        <nav className="global-footer__nav" role="navigation" aria-label="Explore the site.">
                            <a className="global-footer__link" href="/">Home</a>
                            <a className="global-footer__link" href="/careers">Career</a>
                            <a className="global-footer__link" href="/contact">Contact</a>
                        </nav>
                        <aside className="global-footer__copyright" role="complementary" aria-label="The Fine Print.">
                                            <span className="global-footer__copyright-item global-footer__list-item">
                                                © 2019 Waverly LLC.&nbsp;<a className="global-footer__link"
                                                                                 href="https://www.waverly.co/legal">Legal.</a>
                                            </span>
                        </aside>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;
