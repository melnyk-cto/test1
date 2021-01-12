import React from 'react'
class VideoSection extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <section className="hero hero--video">
            <div className="teaser_hero_container">
            <div className="video-player video-player--dimmed hero__video">
            <div className="video-player__copy video-player__copy--hidden"/>
            <video className="video-player__video clickable"
        poster="//images.ctfassets.net/fiz3jwws2um7/rP56xo1coCAiE84eOweuq/4cfd265c3506ec21203fd961130e46d1/Black__1_.png?w=1600">
            <source src="//videos.ctfassets.net/fiz3jwws2um7/3sffxxbEME4CGweoaMUi60/766b61f78a79c828ff9ca1206b242db7/aoy_reel_2017_eod_101717_1.mp4" type="video/mp4"/>
            <p className="fnt-white p1"> Your browser doesn´t support HTML5 video.
        <a href="https://videos.ctfassets.net/fiz3jwws2um7/BnR0hsPLjwYAeW0E8i2wS/4dbe58061edfbf2e4986e6fd4e92dd0d/AOY_REELMash_v10_2_noH__RESIZE.mp4"
           rel="noopener noreferrer" target="_blank" title="Download">Download
        </a>
        the
        video instead.
    </p>
    </video>
    </div>
    <div className="hero__teaser">
            <video autoPlay="autoplay" loop="" playsinline="" className="hero-video-loop">
            <source src="//videos.ctfassets.net/fiz3jwws2um7/3sffxxbEME4CGweoaMUi60/766b61f78a79c828ff9ca1206b242db7/aoy_reel_2017_eod_101717_1.mp4" type="video/mp4"/>
            </video>
    </div>
    </div>
        <div className="hero__smokescreen"/>
        <div className="video-play-button teaser-play-button" tabIndex="0">
            <button className="video-play-button__button" aria-label="Play Video">
            <span className="video-play-button__button__background"/>
            <span className="video-play-button__play"/>
            </button>
    </div>
    </section>

        );
    }
}
export default VideoSection;