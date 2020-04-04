import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import WizardDemo from './showcase/wizard/WizardDemo';
import HomeComponent from './showcase/home/HomeComponent';

const AppRouter = (props) => {

  // addPagePath(path) {
  //     window['gtag']('config', 'UA-93461466-1', {
  //         'page_path': '/primereact' + path
  //     });
  // }

  // componentDidMount() {
  //     this.addPagePath(this.props.location.pathname);

  //     this.unlisten = this.props.history.listen((location) => {
  //         if (this.props.location.pathname !== location.pathname) {
  //             this.addPagePath(location.pathname);
  //         }
  //     });
  // }

  // componentWillUnmount() {
  //     this.unlisten();
  // }

  return (
    <>
      <Route exact path="/" component={HomeComponent} />
      <Route path="/wizard" component={WizardDemo} />
    </>
  );
}

export default withRouter(AppRouter);