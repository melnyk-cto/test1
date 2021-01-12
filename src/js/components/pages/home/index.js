import React from 'react';
import Section_home from "./sections/Section_home";
import Section_1 from "./sections/Section_1";
import Section_2 from "./sections/Section_2";
import Section_3 from "./sections/Section_3";
import Section_4 from "./sections/Section_4";
import Section_5 from "./sections/Section_5";
import Section_6 from "./sections/Section_6";
import Fadeanimation from "./sections/animation";
import ReactPageScroller from "./sections/FullPageEngin";
import Footer from "../../common/footer";
import {isMobileSafari} from 'react-device-detect'

class Home extends React.Component {

    constructor(props) {
        super(props);
        this._pageScroller = null;
        this.state = {
            lastPage: false,
            showfooterid: 0,
            currentPage: 1

        }
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {

        this.setState({currentPage: number});
    };

    render() {
        return (
            <main className="main home-page">
                    <div className="home-page__scroll-jacking home-page__scroll-jacking--locked-eyebrow">
                        <Fadeanimation s_active={this.state.currentPage - 1}/>
                        <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                            <Section_home/>
                            <Section_1/>
                            <Section_2/>
                            <Section_3/>
                            <Section_4/>
                            <Section_5/>
                            <Section_6/>
                            <Footer/>
                        </ReactPageScroller>
                        <div
                            className={this.state.currentPage - 1 !== 0 ?  "home-page-today home-page-today--fade-fast" : isMobileSafari ? "home-page-today home-page-today--fade-fast home-page-today--visible mobile_safari_ourservice" : "home-page-today home-page-today--fade-fast home-page-today--visible" }>
                            <a className="home-page-today__text" onClick={() => this.goToPage(1)}>Our Services.</a>
                            <span className="home-page-today__bar"/>
                        </div>
                    </div>
            </main>
        );
    }
}

export default Home;
