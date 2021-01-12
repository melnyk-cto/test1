import React from "react";
import Footer from "../../../common/footer";

class Fadeanimation extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div>
                <div className= {this.props.s_active===0 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background hide-sm home-section-background_first"/>
                </div>
                <div className= {this.props.s_active===1 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background hide-sm home-section-background_first">
                        <div aria-hidden="false" className="home-section-background__index" >
                            01.<span className="home-section-background__line"/>
                        </div>
                    </div>
                    <div className="home-section-background hide-md-up home-section-background_first_side">
                        <div aria-hidden="false" className="home-section-background__index" >
                             01.&nbsp;<span className="home-section-background__line"/>
                         </div>
                    </div>
                </div>
                <div className= {this.props.s_active===2 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background home-section-back-six-img2 hide-sm">
                        <div aria-hidden="false" className="home-section-background__index">02.
                            <span className="home-section-background__line"/>
                        </div>
                    </div>
                    <div className="home-section-background home-section-back-six-img2 hide-md-up">
                        <div aria-hidden="false" className="home-section-background__index">02.
                            <span className="home-section-background__line"/>
                        </div>
                    </div>
                </div>
                <div className= {this.props.s_active===3 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background hide-sm home-section-background-section3-1">
                        <div aria-hidden="false" className="home-section-background__index home-section-background__index_section3_1" >
                            03&nbsp;.<span className="home-section-background__line_light" ></span>
                        </div>
                    </div>
                    <div className="home-section-background hide-md-up home-section-background-section3-2">
                        <div aria-hidden="false" className="home-section-background__index home-section-background__index_section3_2">
                            03&nbsp;.<span className="home-section-background__line_light"></span>
                        </div>
                    </div>
                </div>
                <div className= {this.props.s_active===4 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background home-section-background-fifth_lg  hide-sm">
                        <div aria-hidden="false" className="home-section-background__index ">
                            04.<span className="home-section-background__line"/>
                        </div>
                    </div>
                    <div className="home-section-background home-section-background-fifth_sm hide-md-up">
                        <div aria-hidden="false" className="home-section-background__index ">
                            04.<span className="home-section-background__line"/>
                        </div>
                    </div>
                </div>
                <div className= {this.props.s_active===5 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background hide-sm home-section-back-fourth-img1">
                        <div aria-hidden="false" className="home-section-background__index section3_a_tag">05
                            &nbsp;.<span className="home-section-background__line_light"/>
                        </div>
                    </div>
                    <div className="home-section-background hide-md-up home-section-back-fourth-img1_md">
                        <div aria-hidden="false" className="home-section-background__index section3_a_tag">05
                            &nbsp;.<span className="home-section-background__line_light"/></div>
                    </div>
                </div>
                <div className= {this.props.s_active===6 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background home-section-back-six-img1 hide-sm">
                        <div aria-hidden="false" className="home-section-background__index">06.
                            <span className="home-section-background__line"/>
                        </div>
                    </div>
                    <div className="home-section-background home-section-back-six-img1 hide-md-up">
                        <div aria-hidden="false" className="home-section-background__index">06.
                            <span className="home-section-background__line"/>
                        </div>
                    </div>
                </div>
                <div className= {this.props.s_active===7 ? "home-section--active home-section" : "home-section"}>
                    <div className="home-section-background hide-sm home-section-background_first"/>
                </div>

            </div>
        );
    }
}
export default Fadeanimation;

