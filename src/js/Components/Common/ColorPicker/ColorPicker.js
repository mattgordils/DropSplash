import React, { Component } from 'react';
import SketchPicker from 'react-color';

import 'sass/components/common/color-picker';

export default class App extends Component {

	render () {
		return (
			<div className="color-picker">
				<SketchPicker />
			</div>
		);
	}
}
