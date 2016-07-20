import React, { Component } from 'react';

import 'sass/common/pane';

export default class App extends Component {

	render () {

		return (
			<div className="ds-pane">
				<div className="ds-pane-header">
					<span className="icon">
						<svg viewBox="0 0 20 12.75">
							<polyline fill="none" stroke="#000000" stroke-miterlimit="10" points="6.816,12.408 0.816,6.408 
								6.816,0.408 	"/>
							<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="0.816" y1="6.408" x2="20.236" y2="6.408"/></svg>
					</span>
					<span className="pane-title">Add Content</span>
					<span className="icon right">
						<svg viewBox="0 0 13 13">
							<line fill="none" stroke="#000000" strokeWidth="1" stroke-miterlimit="10" x1="0.408" y1="12.408" x2="12.408" y2="0.408"/>
							<line fill="none" stroke="#000000" strokeWidth="1" stroke-miterlimit="10" x1="0.408" y1="0.408" x2="12.408" y2="12.408"/></svg>
					</span>
				</div>
			</div>
		)
	}
}