import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/pages/home/index';
import Work from '../components/pages/work/index';
import About from '../components/pages/about/index';
import Contact from '../components/pages/contact/index';
import Careers from '../components/pages/careers/index';
import ArticlesPage from '../components/pages/articles/index';
import JobItemsUxDesigner from '../components/pages/careers/jobitems/ux_designer/index';
import JobItemsAccountManager from "../components/pages/careers/jobitems/account_manager";
import JobItemsContentCreator from "../components/pages/careers/jobitems/content_creator";
import JobItemsFrontendDeveloper from "../components/pages/careers/jobitems/frontend_developer";
import JobItemsGraphicDesigner from "../components/pages/careers/jobitems/graphic_design";

export default (
  <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/work" component={Work}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/careers" component={Careers}/>
    <Route exact path="/articles" component={ArticlesPage}/>
    <Route exact path="/careers/job/ux-designer" component={JobItemsUxDesigner}/>
    <Route exact path="/careers/job/Account-Manager" component={JobItemsAccountManager}/>
    <Route exact path="/careers/job/Content-Creator" component={JobItemsContentCreator}/>
    <Route exact path="/careers/job/frontend-developer" component={JobItemsFrontendDeveloper}/>
    <Route exact path="/careers/job/Graphic-Design" component={JobItemsGraphicDesigner}/>

  </Switch>
);
