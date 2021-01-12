import React from 'react'
import Footer from "../../../../common/footer";
import Div100vh from "react-div-100vh";
import JobItemContents from "./sections/contents";
import JobItmesHeader from "./sections/header";
class JobItemsUxDesigner extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <Div100vh>
        <article className="article jobs">
          <JobItmesHeader/>
          <JobItemContents/>
          <Footer/>
        </article>
      </Div100vh>
    );
  }
}
export default JobItemsUxDesigner;
