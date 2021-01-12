import React from 'react'
import {Work_bottom_div} from '../../../common/customStyle'
class WorkBottom extends React.Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
            <Work_bottom_div backImg = "//images.ctfassets.net/fiz3jwws2um7/6kLXDYVEI3rZhygZbHDSFt/cf9f45743fad6038127bcc49bfb72a11/frame_00_delay-0.1s.jpg?w=1600">
                <div className="about-latest-news__container">
                    <a href="https://magenta.as/" rel="noopener noreferrer" target="_blank"
                       className="about-latest-news__promo">Magenta.</a>
                    <a href="https://magenta.as/should-logo-designers-fear-the-internets-id-18b0e6aca4fd"
                       rel="noopener noreferrer" target="_blank" className="about-latest-news__content">
                        <h3 className="about-latest-news__title">Should Logo Designers Fear the Internet’s Id?</h3>
                        <p className="about-latest-news__body">When a company rebrands, one thing nearly always follows:
                            backlash. But can designers always avoid the criticism? Should they?</p>
                    </a>
                </div>
            </Work_bottom_div>
        );
    }
}
export default WorkBottom;