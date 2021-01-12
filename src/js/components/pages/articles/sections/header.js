import React from 'react'
class ArticlesHeader extends React.Component {



  render () {

    return(
      <div className="flexbox-fix">
        <div className="hero articles-header-img">
            <p className='articles-header-img-title d-md-block d-sm-none d-none'>Privacy & Terms of Use</p>
            <p className='hero__title'>The fine print.</p>
        </div>
      </div>
    );
  }
}
export default ArticlesHeader;