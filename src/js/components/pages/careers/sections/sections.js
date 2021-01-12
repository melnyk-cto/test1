import React from 'react'
import {LeftSection} from "./leftsection";
import RightSection from "./rightsection";
import {CareerData} from "./career_data";

class Sections extends React.Component {
    render () {
        return (
            <div className="copy-section__container jobs-container">
                <LeftSection/>
                {
                    CareerData.map((data, index) => {
                        return (
                            <RightSection city = {data.city} career = {data.career} key={index}/>
                        );
                    })
                }
            </div>
        );
    }
}
export default Sections;