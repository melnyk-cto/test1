import React from 'react'
import PiecesGrid from "./piecesgrid";
import {PiecesData} from "./piecesdata";

class ImageGrid extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <div className="imggrid">
                {
                    PiecesData.map((data, index) =>
                        <PiecesGrid {...data}/>)
                }
            </div>
        );
    }
}

export default ImageGrid;