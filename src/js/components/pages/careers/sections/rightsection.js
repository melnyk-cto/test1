import React from 'react'
import { Link } from "react-router-dom";
class RightSection extends React.Component {
    constructor (props) {
        super(props);
    }
    render () {
        return (
            <div className="text-body article__text jobs-body">
                <h2 className="jobs__location-name">{this.props.city}</h2>
                <ul className="job-listings__group">
                    {
                        this.props.career.map((data, index) => {
                            return (
                                <li className="job-listings__item" key={index}>
                                    <Link className="job-listings__link" to={data.link_url}>{data.job_type}</Link>
                                </li>
                            );
                        })
                    }

                </ul>
            </div>
        );
    }
}
export default RightSection;