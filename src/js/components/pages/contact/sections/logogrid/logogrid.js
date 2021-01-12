import React from 'react'
import {logodata} from "./logopathdata";

class LogoGrid extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
            <div className="logo-grid">
                <div className="logo-grid__container">
                    <div className="section-subtitle section3_a_tag">
                        <hr className="section-subtitle__rule section3_a_tag"/>
                            Select clients.
                    </div>
                    <div className="logo-grid__logos">
                        {
                            logodata.map((data, index) =>
                                <div className="logo-grid__logo">
                                    <img src={data}
                                         alt="American Express Logo" className="logo-grid__image"/>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        );
    }

}
export default LogoGrid;