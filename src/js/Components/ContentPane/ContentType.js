import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import InlineSVG from 'svg-inline-react/lib';;

export default class App extends Component {

	render () {

		return (
			<div className="content-item">
				<InlineSVG src={this.props.icon} element="span" className="icon" />
				<div className="label">{this.props.title}</div>
			</div>
		);
		
	}
}