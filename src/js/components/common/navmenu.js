import React from 'react'
import {Link} from "react-router-dom";
class Navmenu extends React.Component {
    constructor (props) {
        super (props);
    }

    render () {
        const { nav_wrapper_name } = this.props.nav_wrapper_name;
        return (
            <div className={nav_wrapper_name === false ? "global-nav-wrapper global-nav-wrapper--open" : "global-nav-wrapper"} >
                <nav aria-hidden={nav_wrapper_name} className="global-nav">
                    <Link to="/" className="global-nav-item global-nav-item--active" onClick={this.props.navItemclick}>
                        <div className="global-nav-item__label">Home.</div>
                        <hr className="global-nav-item__rule"/>
                        <div className="global-nav-item__description">What we do.</div>
                    </Link>
                    <Link to="/careers" className="global-nav-item" tabIndex="-1" onClick={this.props.navItemclick}>
                        <div className="global-nav-item__label">Careers.</div>
                        <hr className="global-nav-item__rule"/>
                        <div className="global-nav-item__description">Join the team.</div>

                    </Link>
                    {/*

                    <Link to="/work" className="global-nav-item" onClick={this.props.navItemclick}>

                        <div className="global-nav-item__label">Work.</div>
                        <hr className="global-nav-item__rule"/>
                        <div className="global-nav-item__description">What we've made.</div>

                    </Link>
                    <Link  to="/about" className="global-nav-item" onClick={this.props.navItemclick}>
                        <div className="global-nav-item__label">About.</div>
                        <hr className="global-nav-item__rule"/>
                         <div className="global-nav-item__description">Who we are.</div>

                    </Link>
                    <Link to="/careers" className="global-nav-item" tabIndex="-1" onClick={this.props.navItemclick}>
                        <div className="global-nav-item__label">Careers.</div>
                        <hr className="global-nav-item__rule"/>
                        <div className="global-nav-item__description">Join the team.</div>

                    </Link>
                    */}
                    <Link to="/contact" className="global-nav-item" tabIndex="-1" onClick={this.props.navItemclick}>
                        <div className="global-nav-item__label">Contact.</div>
                        <hr className="global-nav-item__rule"/>
                        <div className="global-nav-item__description">Get in touch.</div>

                    </Link>
                </nav>
                <div aria-hidden="true" className="global-nav-social">
                    <span className="global-nav-social__link-copy">Follow us on </span>
                    <a href="https://www.instagram.com/waverly" rel="noopener noreferrer" target="_blank"
                    className="global-nav-social__link-text" tabIndex="-1" title="Magenta">Instagram</a>
                </div>
            </div>
        );
    }
}
export default Navmenu;
