import React, { Component } from 'react';

import 'sass/components/common/pane';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			currentView: 0,
			transitionDirection: 'pane-next-transition'
		};
	}

	goToView (index) {
		this.setState({currentView: index});
	}

	goToNextView () {
		if (this.state.currentView < this.props.views.length - 1) {
			var currentView = this.state.currentView;
			currentView++
			this.setState({currentView: currentView, transitionDirection: 'pane-next-transition'});
		}
	}

	goToPrevView () {
		if (this.state.currentView > 0) {
			var currentView = this.state.currentView;
			currentView--
			this.setState({currentView: currentView, transitionDirection: 'pane-prev-transition'});
		}
	}

	render () {

		console.log(this.state);

		return (
			<div className="ds-pane">
				<div className="ds-pane-header">
					<span onClick={this.goToPrevView.bind(this)} className="icon">
						<svg viewBox="0 0 20 12.75">
							<polyline fill="none" stroke="#000000" stroke-miterlimit="10" points="6.816,12.408 0.816,6.408 
								6.816,0.408 	"/>
							<line fill="none" stroke="#000000" stroke-miterlimit="10" x1="0.816" y1="6.408" x2="20.236" y2="6.408"/></svg>
					</span>
					<span className="pane-title">{this.props.title}</span>
					<span className="icon right">
						<svg viewBox="0 0 13 13">
							<line fill="none" stroke="#000000" strokeWidth="1" stroke-miterlimit="10" x1="0.408" y1="12.408" x2="12.408" y2="0.408"/>
							<line fill="none" stroke="#000000" strokeWidth="1" stroke-miterlimit="10" x1="0.408" y1="0.408" x2="12.408" y2="12.408"/></svg>
					</span>
				</div>
				<div className="ds-pane-content">
					<ReactCSSTransitionGroup 
						transitionName={this.state.transitionDirection}
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}
					>
						{this.props.views[this.state.currentView]}
					</ReactCSSTransitionGroup>
				</div>
			</div>
		)
	}
}
