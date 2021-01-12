import React from 'react'
import VideoSection from "./sections/videosection"
import Header_copy from "./sections/header-copy";
import ImageGrid from "./sections/imagegrid";
import LogoGrid from "./sections/logogrid/logogrid";
import WorkBottom from "./sections/workbottom";
class WorkPage extends React.Component {
    constructor (props) {
        super (props);
    }
    render () {
        return (
            <main className="work-page">
                <Header_copy/>
                <LogoGrid/>
            </main>
        );
    }
}
export default WorkPage;
