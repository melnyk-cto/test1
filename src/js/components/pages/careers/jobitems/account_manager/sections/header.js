import React from 'react'
class JobItmesHeader extends React.Component {



  render () {

    return(
      <div className="flexbox-fix">
        <div className="hero articles-header-img ">
          <div className='articles-header-top d-md-flex d-sm-none d-none'>
            <p className='articles-header-img-title'>Log Angeles</p>
            <div className='articles-header-top-divide'/>
            <p className='articles-header-img-title'>Account Manager</p>
          </div>
          <p className='hero__title'>Account Manager</p>
        </div>
      </div>
    );
  }
}
export default JobItmesHeader;