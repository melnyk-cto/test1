import React from 'react'
import Navmenu from "../common/navmenu";
import routes from '../../config/routes';


class MainComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nav_class: "global-nav-background",
            nav_btn_class: "h-logo h-logo--magenta",
            logo_btn_click: true,
        }
    }

    showHiedNavMenu = () => {
        if (this.state.logo_btn_click)
            this.setState({
                nav_class: "global-nav-background global-nav-background--open",
                nav_btn_class: "h-logo h-logo--opened",
                logo_btn_click: false,
            });
        else
            this.setState({
                nav_class: "global-nav-background",
                nav_btn_class: "h-logo h-logo--magenta",
                logo_btn_click: true,
            });
    }
    NavItem_Click = () => {
        this.setState({
            nav_class: "global-nav-background",
            nav_btn_class: "h-logo h-logo--magenta",
            logo_btn_click: true,
        });
    }

    render() {
        return (
            <div data-ui-role="content">
              <div className="wrapper" id="wrapper">
                    <div className={this.state.nav_class}>
                        <button aria-hidden="true" className="global-nav__hit-area" tabIndex="-1"
                                onClick={this.showHiedNavMenu}/>
                        <div aria-atomic="true" aria-live="off" className="a11y-hint" role="status"/>
                        <button className={this.state.nav_btn_class} id="header-logo-Waverly" tabIndex="0"
                                onClick={this.showHiedNavMenu}>
                            <div className="a11y-hint">Waverly logo. Click to open navigation.</div>
                            <div className="h-logo--wink"/>
                            <svg id="Layer_1" className="h-logo__svg"
                                 fill={this.state.logo_btn_click ? "black" : "white"} data-name="Layer 1"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><title>Option 1-3</title>
                                <path
                                    d="M734,298.41c-.06,0-19.84.24-33.39,23.52L608,484.4,509.89,318.32l2,3.41c-13.54-23.26-33.43-23.32-33.53-23.32h-125s20,0,33.54,23.32L608,701.59,829.34,321.27c13.56-22.85,33.25-22.86,33.25-22.86Z"/>
                                <path
                                    d="M300.51,321.73C287,298.47,267.08,298.41,267,298.41H137.33s19.86,0,33.43,23.15l220,380L455.69,593"/>
                            </svg>
                        </button>
                        <div className="global-content-vertical-fix homepage">
                            <div className="global-content-wrapper" id="global-content-wrapper">
                                {routes}
                            </div>
                        </div>
                        <Navmenu nav_wrapper_name={this.state.logo_btn_click} navItemclick={this.NavItem_Click}/>
                        <div className="framebox"/>
                    </div>

                </div>
            </div>
        );
    }
}

export default MainComponent;