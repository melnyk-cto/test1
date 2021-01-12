import React from 'react'
import ArticlesHeader from "./sections/header";
import Footer from "../../common/footer";
import Div100vh from "react-div-100vh";
import ArticlesContents from "./sections/contents";
import 'bootstrap/dist/css/bootstrap.css';
class ArticlesPage extends React.Component {
  constructor (props) {
    super (props);
  }
  render () {
    return (
      <Div100vh>
        <article className="article jobs">
          <ArticlesHeader/>
          <ArticlesContents/>
          <Footer/>
        </article>
      </Div100vh>
    );
  }
}
export default ArticlesPage;
