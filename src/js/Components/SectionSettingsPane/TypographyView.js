import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import InlineSVG from 'svg-inline-react/lib';

import 'sass/components/common/inputs';

export default class App extends Component {

	render () {

		return (
			<div className="has-button has-tabs" key="view1">
				<div className="content pane-padded">
				
	      </div>
	      <div className="pane-view-actions">
	        <Button
	        	buttonClass="medium tertiary"
	        	label="Edit account info"
	        	clickEvent={this.props.clickHandler} 
	        />
        </div>
	    </div>
		);

	}

}