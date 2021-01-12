import React from 'react'
import CareersHeader from "./sections/header";
import Sections from "./sections/sections";
import Footer from "../../common/footer";
import Div100vh from "react-div-100vh";
class CareersPage extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <Div100vh>
                <article className="article jobs">
                    <CareersHeader/>
                    <Sections/>
                    <Footer/>
                </article>
            </Div100vh>
        );
    }
}
export default CareersPage;
