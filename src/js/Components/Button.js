import 'sass/common/buttons';

import React, { Component } from 'react';

export default class App extends Component {

	render () {

		var className = 'button';
		if (this.props.className) {
      className += ' '+this.props.className;
    }

    var icon = '';
    if (this.props.icon) {
    	icon = <this.props.icon />
    }

    var label = '';
    if (this.props.label) {
    	label = <span className="label">{this.props.label}</span>
    }

		return (
			<button className={className}>{icon}{label}</button>
		)
	}
}