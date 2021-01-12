import React from 'react'
class Section_home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeNum: 1
        }
    }

    componentDidMount() {
        this.timer = setInterval(this.tick, 2000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        if (this.state.activeNum === 5) {
            this.setState({activeNum: 0});
        }
        this.setState({activeNum: this.state.activeNum + 1});

    }

    render() {
        return (
            <div className="component home-section-header-parent home-section-safari-parent">

                <div className="home-section-header-div">
                    <p className="home-hero-hello">Waverly is a creative growth</p>
                    <p className="home-hero-hello">agency that empowers brands</p>
                    <p className="home-hero-hello">and influencers through</p>
                    <p className="home-hero-hello">cutting edge technology.</p>
                    <h1 className="home-hero__static-hi">Waverly is a creative growth agency that empowers brands and influencers through cutting edge technology. </h1>
                    <p className="home-hero-des_text">We utilize unconventional strategies powered</p>
                    <p className="home-hero-des_text" style={{padding: '0'}}>by a relentless commitment to excellence.</p>
                    <p className="home-hero-des_text1">We utilize unconventional strategies powered by a relentless commitment to excellence.</p>
                    <div className="home-hero_logos1 d-lg-flex">
                        <img className="home-hero_logo_active"
                             src="https://s3.amazonaws.com/waverly-marketing-site/atlantic-records-logo.png"/>
                        <img className="home-hero_logo_active"
                             src="https://s3.amazonaws.com/waverly-marketing-site/bebe-logo.png"/>
                       <img className="home-hero_logo_active"
                            src="https://s3.amazonaws.com/waverly-marketing-site/hubble-studio-logo.png"/>
                       <img className="home-hero_logo_active"
                            src="https://s3.amazonaws.com/waverly-marketing-site/republic-records-logo.png"/>
                        <img className="home-hero_logo_active"
                             src="https://s3.amazonaws.com/waverly-marketing-site/venus-et-fleur-logo.png"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section_home;
