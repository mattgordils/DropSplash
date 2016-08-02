import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import ForwardsArrow from 'assets/icons/arrow-2-forwards';
import SettingsIcon from 'assets/icons/settings-icon';
import InlineSVG from 'svg-inline-react/lib';

import 'sass/components/footer-nav';

export default class App extends Component {

	render () {

		return (
			<div className="footer-nav">
				<div className="left-items">
					<div className="link"><InlineSVG src={SettingsIcon} element="span" className="icon" />Settings</div>
				</div>
				<div className="center-items">
					<Button
						buttonClass="tiny"
						label="Add Page Section"
						icon={PlusIcon}
					/>
				</div>
				<div className="right-items">
					<div className="link">Preview<InlineSVG src={ForwardsArrow} element="span" className="icon" /></div>
				</div>		
			</div>
		);
		
	}
}
