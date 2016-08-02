import React, { Component } from 'react';

import 'sass/components/common/pane';
import 'sass/setup/icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InlineSVG from 'svg-inline-react/lib';
// import Arrow from 'assets/icons/arrow';
import BackArrow from 'assets/icons/arrow-2-back';
import CloseX from 'assets/icons/close-x';

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

	showBackArrow () {
		backArrow = ''
		if (this.state.currentView > 0) {
			var backArrow = (<InlineSVG src={BackArrow} element="span" className="icon" onClick={this.goToPrevView.bind(this)} />)
		}
		return (backArrow);
	}

	render () {
		return (
			<ReactCSSTransitionGroup 
				transitionName='pane-transition'
				transitionAppear={true}
				transitionAppearTimeout={500}
				transitionEnterTimeout={500}
				transitionLeaveTimeout={500}
			>
				<div className="ds-pane">
					<div className="ds-pane-header">
						{this.showBackArrow()}
						<span className="pane-title">{this.props.title}</span>
						<InlineSVG src={CloseX} element="span" className="icon right" />
					</div>

					<div className="ds-pane-content">
						<ReactCSSTransitionGroup 
							transitionName={this.state.transitionDirection}
							transitionEnterTimeout={500}
							transitionLeaveTimeout={500}
						>
							{this.props.views[this.state.currentView]}
						</ReactCSSTransitionGroup>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		)
	}

}
