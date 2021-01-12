import React from 'react'
class Section_4 extends React.Component{
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="component first-component">
                <div className="home-section__wrapper">
                <div className="home-section-details">
                    <h5 className="home-section-details__eyebrow section3_a_tag" >Viral Awareness</h5>
                    <div className="home-section-details__container">
                        <h2 className="home-section-details__title">
                            We create conversation with the world, in one click.
                        </h2>
                        <div className="home-section-details__subtitle">
                            <div className="home-section-details__subtitle-wrapper">
                                <hr className="home-section-details__separator section3_a_tag" />
                                With our 750M+ user network, your opportunities are endless. We create engaging campaigns and place you in front of millions with our unrivaled network of high-profile pages. Use your viral campaign to drive website traffic, app downloads, music streams, and much more.
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
export default Section_4;
