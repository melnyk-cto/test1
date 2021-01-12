import React from 'react'
import { WorkPieceGrid_a_tag} from "../../../../common/customStyle";

class PiecesGrid extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <WorkPieceGrid_a_tag backImg = {this.props.backImg} href = {this.props.url}>
                <h2 className="imggrid-tile__title">{this.props.title}</h2>
                <div className="imggrid-tile__arrow">
                    <svg className="arrow-thin-right__svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         x="0px" y="0px" width="39.002px" height="26.005px" viewBox="286.5 382.498 39.002 26.005"
                         enable-background="new 286.5 382.498 39.002 26.005" title="Next">
                        <g>
                            <polygon fill="#FFFFFF"
                                     points="325.041,396.329 325.502,395.861 325.046,395.398 325.432,395.008 325.041,394.612 325.041,394.533 324.963,394.533 313.102,382.498 311.805,383.814 322.367,394.533 286.5,394.533 286.5,396.395 322.354,396.395 311.732,407.172 313.044,408.503 324.977,396.395 325.041,396.395     "></polygon>
                        </g>
                    </svg>
                </div>
            </WorkPieceGrid_a_tag>

        );
    }
}
export default PiecesGrid;