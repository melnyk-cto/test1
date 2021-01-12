import React from 'react'
class CareersHeader extends React.Component {
    render () {
        return (
            <div className="flexbox-fix">
                <section className="hero careers-header-img">
                    <div className="hero__smokescreen"></div>
                    <div className="hero__container">
                        <div className="hero__content">
                            <h1 className="hero__title">Jobs.</h1>
                            <div className="hero__details"></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default CareersHeader;