import React, { Component } from 'react';

import InlineSVG from 'svg-inline-react/lib';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import ContentPane from 'Components/ContentPane/ContentPane';
import EditOptions from 'Components/Common/EditOptions';
import AddContentBetween from 'Components/Common/AddContentBetween';
import BackgroundContent from 'Components/Common/BackgroundContent';
import EmptyContent from 'Components/Common/EmptyContent';
import SectionControls from 'Components/Common/SectionControls'
import EditableComponent from 'Components/Common/EditableComponent'

export default class App extends Component {

	constructor (props) {
		super(props);
		this.state = {
			empty: ''
		};
	}

	sectionClass () {
    var sectionClass = 'ds-page-section';
    if (this.props.alignment) {
      sectionClass += ' '+this.props.alignment;
    }
    return sectionClass;
  }

  sectionContent () {

  	var containerStyle = {
	  	maxWidth: this.props.contentWidth,
	  	color: this.props.textColor,
	  	opacity: this.props.contentOpacity
	  }

    if (this.props.empty) {
    	return (
    		<div className="section-content">
    			<ContentPane />
    		</div>
    	)
    }

    else if (this.props.initialBlock) {

    	var containerStyle = {
		  	maxWidth: this.props.contentWidth
		  }

    	return (
    		<div className="section-content">
					<div className="container" style={containerStyle} >
						<div>
							<EmptyContent
								emptyContentClass="logo"
								emptyContentText="Add Logo"
								emptyContentIcon={PlusIcon}
							/>
						</div>
						<div className="ds-editable">
							<h1 className="content" contentEditable="true">The Splash Title</h1>
							<EditOptions />
						</div>
						<AddContentBetween />
						<EditableComponent />
						<AddContentBetween />
						<div className="ds-editable">
							<p className="content" contentEditable="true">Use the button at the top left to easily add content to the page. You can insert headlines, text, images, videos, an Instagram or Twitter feed, buttons, and MailChimp Newsletter signups.</p>
							<EditOptions />
						</div>
						<div>
							<EmptyContent
								emptyContentClass="empty-button"
								emptyContentText="Add Button"
							/>
						</div>
					</div>
				</div>
    	)
    } 

    else {

      return (
				<div className="section-content">
					<div className="container" style={containerStyle} >
						<AddContentBetween />
						<div className="ds-editable">
							<h1 className="content" contentEditable="true">The Splash Title</h1>
							<EditOptions />
						</div>
						<AddContentBetween />
						<div className="ds-editable">
							<p className="content" contentEditable="true">Use the button at the top left to easily add content to the page. You can insert headlines, text, images, videos, an Instagram or Twitter feed, buttons, and MailChimp Newsletter signups.</p>
							<EditOptions />
						</div>
						<AddContentBetween />
					</div>
				</div>
      )
    }
  }

	render () {

		var sectionStyle = {
	  	minHeight: this.props.height
	  }

		return (
			<div className={this.sectionClass()} style={sectionStyle} >
				<SectionControls />

				{this.sectionContent()}
				
				<BackgroundContent 
					{...this.props}
				/>
			</div>
		);
		
	}
}