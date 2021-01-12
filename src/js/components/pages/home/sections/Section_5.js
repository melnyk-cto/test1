import React from 'react'
class Section_5 extends React.Component{
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="component first-component">
                <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow font-color-black" >Public Relations.</h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title font-color-black">
                          Make News Happen Fast with On-Demand Public Relations.
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper font-color-black">
                                <hr className="home-section-details__separator font-color-black" />
                                We will announce your news to appear in respected media channels and websites. Our team of communication professionals has a track record of success and guarantees the most time-efficient and effective way to increase your brand’s visibility.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-section-media-wrapper"/>
            </div>
            </div>

        );
    }
}
export default Section_5;
