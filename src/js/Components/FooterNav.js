import React, { Component } from 'react';

import Button from 'Components/Button';
import PlusIcon from 'Icons/PlusIcon';

import 'sass/common/footer-nav';

export default class App extends Component {

	render () {

		return (
			<div className="footer-nav">
				<div className="left-items">
					<a href="#"><PlusIcon />Settings</a>
				</div>
				<div className="center-items">
					<Button
						className="tiny"
						label="Add Page Section"
						icon={PlusIcon}
						{...this.props}
					/>
				</div>
				<div className="right-items">
					<a href="#">Preview<PlusIcon /></a>
				</div>		
			</div>
		)
	}
}