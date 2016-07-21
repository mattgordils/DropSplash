import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import InlineSVG from 'svg-inline-react/lib';

import 'sass/components/footer-nav';

export default class App extends Component {

	render () {

		return (
			<div key="view1">
                <h1>View {this.props.title}</h1>
                <p>It' the first one.</p>
                <Button buttonClass="tiny" label="Next" clickEvent={this.props.clickHandler} />
            </div>
		);

	}

}
