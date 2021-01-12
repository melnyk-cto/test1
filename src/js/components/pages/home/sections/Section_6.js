import React from 'react'
class Section_6 extends React.Component {
    render () {
        return (
            <div className="component first-component">
                <div className="home-section__wrapper">
                    <div className="home-section-details">
                        <h5 className="home-section-details__eyebrow font-color-black" >Technology.</h5>
                        <div className="home-section-details__container">
                            <h2 className="home-section-details__title font-color-black">
                                Cutting-edge software experiences that excites.
                            </h2>
                            <div className="home-section-details__subtitle">
                                <div className="home-section-details__subtitle-wrapper font-color-black">
                                    <hr className="home-section-details__separator font-color-black"/>
                                        We engineer and design software that is focused on your customer’s actual needs. That’s how we create business value. Instead of just viable prototypes and code, our designers and engineers dig deep to discover what really moves your customers.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-section-media-wrapper">
                        <div className="home-section-media home-section-media--video home_section_fifth_image"/>
                    </div>
                </div>
            </div>

        );
    }
}
export default Section_6;
