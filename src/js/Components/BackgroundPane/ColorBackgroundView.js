import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import CheckIcon from 'assets/icons/check';
import InlineSVG from 'svg-inline-react/lib';
import ColorPicker from 'Components/Common/ColorPicker/ColorPicker';

import 'sass/components/common/inputs';

export default class App extends Component {

	render () {

		return (
			<div className="has-button has-tabs" key="view1">
				<div className="content">
					<ColorPicker />
	      </div>
	      <div className="pane-view-actions">
	        <Button
	        	buttonClass="medium tertiary"
	        	icon={CheckIcon}
	        	clickEvent={this.props.clickHandler} 
	        />
        </div>
	    </div>
		);

	}

}