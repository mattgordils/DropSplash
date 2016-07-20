import React, { Component } from 'react';

import Button from 'Components/Button';
import PlusIcon from 'Icons/PlusIcon';

import 'sass/common/footer-nav';

export default class App extends Component {

	render () {

		return (
			<div className="footer-nav">
				<div className="left-items">
					<div className="link"><PlusIcon />Settings</div>
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
					<div className="link">Preview<PlusIcon /></div>
				</div>		
			</div>
		)
	}
}