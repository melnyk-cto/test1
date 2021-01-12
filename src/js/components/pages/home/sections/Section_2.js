import React from 'react'
class Section_2 extends React.Component{
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="component first-component">
                <div className="home-section__wrapper">
                    <h5 className="home-section-details__eyebrow section3_a_tag"  >Paid Media.</h5>
                    <div className="home-section-details">
                        <div className="home-section-details__container">
                            <h2 className="home-section-details__title">
                            We live, eat, and breathe Facebook and Instagram ads.
                            </h2>
                            <div className="home-section-details__subtitle">
                                <div className="home-section-details__subtitle-wrapper">
                                    <hr className="home-section-details__separator section_hr_tag"/>
                                    With well over a billion monthly active users, Facebook is the largest and most powerful social media advertising platform in the world. Let our ad veterans get you the ROI you need.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default Section_2;
