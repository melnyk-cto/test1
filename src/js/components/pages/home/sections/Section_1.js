import React from 'react'
class Section_1 extends React.Component{
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="component first-component">
                <div className="home-section__wrapper ">
                    <div className="home-section-details">
                        <h5 className="home-section-details__eyebrow" >Instagram Growth.</h5>
                        <div className="home-section-details__container">
                            <h2 className="home-section-details__title font-color-black">
                                We eliminate the negative stigma around Instagram Growth.
                            </h2>
                            <div className="home-section-details__subtitle">
                                <div className="home-section-details__subtitle-wrapper first_section_divide">
                                    <hr className="home-section-details__separator " />
                                    With our proprietary method, we are able to reroute and drive targeted competitor traffic on an unrivaled scale. Let us build your pages social proof authentically with ease and speed. We guarantee extraordinary results fit for profound influencers and world renowned brands.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-section-media-wrapper">
                        <div className="home-section-media home-section-media--video home_section_first_image"/>
                    </div>
                </div>
            </div>

        );
    }
}
export default Section_1;
