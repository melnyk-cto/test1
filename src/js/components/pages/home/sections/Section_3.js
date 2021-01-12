import React from 'react'
class Section_3 extends React.Component {
    render () {
        return (
            <div className="component first-component">
                <div className="home-section__wrapper">
                    <div className="home-section-details">
                        <h5 className="home-section-details__eyebrow " >Content Creation.</h5>
                        <div className="home-section-details__container">
                            <h2 className="home-section-details__title font-color-black">
                                We breathe inspiration into your story.</h2>
                            <div className="home-section-details__subtitle">
                                <div className="home-section-details__subtitle-wrapper font-color-black">
                                    <hr className="home-section-details__separator font-color-black"/>
                                        Our creative masterminds develop your message and punctuate your brand imagery. With each phase comes an abundant sense of progress for your brand and its ability to affect consumer behavior.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-section-media-wrapper">
                        <div className="home-section-media home-section-media--video home_section_third_image"/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Section_3;
