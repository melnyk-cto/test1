import React from 'react'
import Header_copy from "./sections/header-copy";
import Footer from "../../common/footer";
import Div100vh from 'react-div-100vh'

class ContactPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Div100vh>
                <main className="work-page">
                    <Header_copy/>
                    <div className="iframe_div_parent">
                        <iframe src="https://social2018.typeform.com/to/Bq2U5H"
                                className="contant_ifram_section"/>
                    </div>
                    <Footer/>
                </main>
            </Div100vh>
        );
    }
}

export default ContactPage;
