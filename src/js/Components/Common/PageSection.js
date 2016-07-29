import React, { Component } from 'react';

import InlineSVG from 'svg-inline-react/lib';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import ContentPane from 'Components/ContentPane/ContentPane';
import EditOptions from 'Components/Common/EditOptions';
import AddContentBetween from 'Components/Common/AddContentBetween';
import BackgroundContent from 'Components/Common/BackgroundContent';

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
    if (this.props.empty) {
    	return (
    		<div className="section-content">
    			<ContentPane />
    		</div>
    	)
    } else {

    	var containerStyle = {
		  	maxWidth: this.props.contentWidth
		  }

      return (
				<div className="section-content">
					<div className="container" style={containerStyle} >
						<div>
							<div className="ds-empty-content logo">
								<InlineSVG src={PlusIcon} element="span" className="icon" />
								<span className="text">Add Logo</span>
							</div>
						</div>
						<div className="ds-editable">
							<h1 className="content" contentEditable="true">The Splash Title</h1>
							<EditOptions />
						</div>
						<AddContentBetween />
						<div className="ds-editable">
							<p className="content" contentEditable="true">Use the button at the top left to easily add content to the page. You can insert headlines, text, images, videos, an Instagram or Twitter feed, buttons, and MailChimp Newsletter signups.</p>
							<EditOptions />
						</div>
						<div>
							<div className="ds-empty-content empty-button">
								<span className="text">Add Button</span>
							</div>
						</div>
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
				<div className="ds-section-controls">
					<div className="left-controls">
						<Button
							buttonClass="circle medium button-ripple add-content-button"
							icon={PlusIcon}
							clickEvent={this.addNew}
							{...this.props}
						/>
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

				{this.sectionContent()}
				
				<BackgroundContent 
					{...this.props}
				/>
			</div>
		);
		
	}
}