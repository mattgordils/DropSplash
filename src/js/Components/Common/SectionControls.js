import React, { Component } from 'react';

import InlineSVG from 'svg-inline-react/lib';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import ContentPane from 'Components/ContentPane/ContentPane'

import 'sass/components/common/section-controls';

export default class App extends Component {

	constructor (props) {
    super(props);
    this.state = {
      showContentPane: false
    };
  }

	toggleContentPane () {
		if (this.state.showContentPane === false) {
			this.setState({showContentPane: true});
		} else {
			this.setState({showContentPane: false});
		}
	}

	addContentOptions () {
		if(this.state.showContentPane === true) {
			return <ContentPane />
		}
	}

	render () {

		return (
			<div className="ds-section-controls">
				<div className="left-controls">
					<Button
						buttonClass="circle medium button-ripple add-content-button"
						icon={PlusIcon}
						clickEvent={this.toggleContentPane.bind(this)}
						tooltipText="Add Content"
						{...this.props}
					/>
					{this.addContentOptions()}
				</div>

				<div className="right-controls">
					<div className="button-group two-buttons">
						<Button
							buttonClass="medium"
							label="Section Options"
							{...this.props}
						/>
						<Button
							buttonClass="medium"
							label="Background"
							{...this.props}
						/>
					</div>
				</div>
			</div>
		);
		
	}
}