import React from 'react'
import marked from "marked";
import 'bootstrap/dist/css/bootstrap.css';
class JobItemContents extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      markdown: ''
    }
  }
  componentDidMount() {
    const readmePath=require("../content.md");
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

  render() {
    const {markdown}=this.state;
    return (
      <div className="flexbox-fix">
        <div className="copy-section__container jobs-container">
          <div className="article-header"><p className="article-header__lead"/></div>
          <div className='job-list-parent-div d-md-flex d-sm-block'>
            <div className='left_job col-md-5 col-sm-12'>
              <div className='left_job_divide col-md-5 col-sm-9'/>
              <p>Overview</p>
            </div>
            <div className='text-body right_job col-md-6 col-sm-12' dangerouslySetInnerHTML={{__html: markdown}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default JobItemContents;
