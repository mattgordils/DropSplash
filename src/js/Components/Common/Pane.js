import React, { Component } from 'react';

import 'sass/components/common/pane';
import 'sass/setup/icons';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import InlineSVG from 'svg-inline-react/lib';
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

	paneClass () {
    var paneClass = 'ds-pane';
    if (this.props.paneClass) {
      paneClass += ' '+this.props.paneClass;
    }
    if (this.props.paneTabs) {
      paneClass += ' '+'has-tabs';
    }
    return paneClass;
  }

  paneStyle () {
  	var paneStyle = {
	  	height: this.props.paneHeight
	  }
	  return paneStyle
  }

  paneTabs () {
  	var tabs = this.props.paneTabs;
  	if (this.props.paneTabs) {
  		return (
  			<div className="ds-pane-tabs small-caps">
	  			<div className="tab active">
	  				{tabs[0]}
	  			</div>
	  			<div className="tab">
	  				{tabs[1]}
	  			</div>
	  			<div className="tab">
	  				{tabs[2]}
	  			</div>
	  			<hr/>
				</div>
			)
  	}
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
				<div className={this.paneClass()} style={this.paneStyle()}>
					<div className="ds-pane-header">
						{this.showBackArrow()}
						<span className="pane-title">{this.props.title}</span>
						<InlineSVG src={CloseX} element="span" className="icon right" />
					</div>

					<div className="ds-pane-content">
						{this.paneTabs()}
						<ReactCSSTransitionGroup 
							transitionName={this.state.transitionDirection}
							transitionEnterTimeout={550}
							transitionLeaveTimeout={550}
						>
							{this.props.views[this.state.currentView]}
						</ReactCSSTransitionGroup>
					</div>
				</div>
			</ReactCSSTransitionGroup>
		)
	}

}
