import React from 'react'
import marked from "marked";
class ArticlesContents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:''
    }
  }
  componentDidMount() {
    const readmePath = require("../content.md");
    fetch(readmePath)
      .then(response => {
        return response.text()
      })
      .then(text => {
        this.setState({
          markdown: marked(text)
        })
      })
  }
  render () {
    const { markdown } = this.state;
    return (
      <div className="flexbox-fix">
        <div className="copy-section__container jobs-container">
          <div className="article-header col-sm-12"><p className="article-header__lead">Privacy and Terms of Use</p></div>
          <div className='text-body article__text' dangerouslySetInnerHTML={{__html: markdown}} />
        </div>
      </div>
    );
  }
}
export default ArticlesContents;
