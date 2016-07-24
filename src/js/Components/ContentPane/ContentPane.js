import 'sass/components/common/buttons';

import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react/lib';

import Pane from 'Components/Common/Pane';
import Button from 'Components/Common/Button';
import ContentTypes from 'Components/ContentPane/ContentTypesView';

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
        title="Add Content"
        views={this.paneContent()}
        ref="addContent"
        {...this.props}
      />
		);
	}
}