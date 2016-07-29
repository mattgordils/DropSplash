import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import InlineSVG from 'svg-inline-react/lib';

import 'sass/components/common/inputs';

export default class App extends Component {

	render () {

		return (
			<div className="has-button" key="view1">
        <input type="text" />
        <Button label="Next" clickEvent={this.props.clickHandler} />
	    </div>
		);

	}

}
