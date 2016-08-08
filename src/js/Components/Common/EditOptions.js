import React, { Component } from 'react';

import 'sass/components/common/editable';

import InlineSVG from 'svg-inline-react/lib';
import Button from 'Components/Common/Button';

import SettingsIcon from 'assets/icons/settings-icon';
import CheckIcon from 'assets/icons/check';
import DeleteIcon from 'assets/icons/trash';
import EditIcon from 'assets/icons/edit';

export default class App extends Component {

	editOptionContent () {
		if(this.props.editing === true) {
			return (<div className="ds-edit-options">
					<div data-tooltip-text="Settings" className="option edit">
						<InlineSVG src={SettingsIcon} element="span" className="icon" />
					</div>
					<div data-tooltip-text="Save" className="option done" onClick={this.props.clickHandler}>
						<InlineSVG src={CheckIcon} element="span" className="icon" />
					</div>
					<div data-tooltip-text="Delete" className="option">
						<InlineSVG src={DeleteIcon} element="span" className="icon" />
					</div>
				</div>)
		} else {
			return (
				<Button 
					buttonClass="tiny circle ds-edit-button"
					icon={EditIcon}
					tooltipText="Edit"
					clickEvent={this.props.clickHandler}
				/>
			)
		}
	}

	render () {

		return (
			<div className="ds-edit-actions">
				{this.editOptionContent()}
			</div>
		);
		
	}
}