import React, { Component } from 'react';

import 'sass/components/common/add-content-between';
import Button from 'Components/Common/Button'
import PlusIcon from 'assets/icons/plus-icon'

export default class App extends Component {

	render () {

		return (
			<div className="add-content-between">
				<div className="line">
					<Button
						buttonClass="tiny circle"
						tooltipText="Add Content"
						tooltipPosition="bottom"
						icon={PlusIcon}
						{...this.props}
					/>
				</div>
			</div>
		);
		
	}
}