import 'sass/components/common/buttons';

import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react/lib';

import Pane from 'Components/Common/Pane';
import Button from 'Components/Common/Button';
import ContentTypes from 'Components/ContentPane/ContentTypesView';

import 'sass/components/common/add-content-pane';

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
        
    };     
  }

  paneContent () {
    return [
      (<ContentTypes />),
      (<ContentTypes />),
      (<ContentTypes />)
    ]
  }

  clickHandler () {
    this.refs.addContent.goToNextView();
  }

	render () {
		return (
			<Pane
        paneClass="add-content-pane wide"
        title="Add Content"
        views={this.paneContent()}
        paneHeight="317px"
        ref="addContent"
        {...this.props}
      />
		);
	}
}