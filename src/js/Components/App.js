import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import TypePane from 'Components/TypePane/TypePane';
import ContentPane from 'Components/ContentPane/ContentPane';
import Switch from 'Components/Common/Switch';
import BackgroundContent from 'Components/Common/BackgroundContent';
import FooterNav from 'Components/FooterNav';
import AddContentBetween from 'Components/Common/AddContentBetween';

import InlineSVG from 'svg-inline-react/lib';

import EditOptions from 'Components/Common/EditOptions'

import 'sass/components/app';

export default class App extends Component {

	addNew () {
		console.log(this);
		var currentClass = this.state.buttonClass.replace('button-ripple', '');
        this.setState({buttonClass: currentClass});
	}

	render () {
		return (
			<div>
				<div className="app-content">

					<div className="ds-page-section">
						<div className="ds-section-controls">
							<div className="left-controls">
								<Button
									buttonClass="circle medium button-ripple add-content-button"
									icon={PlusIcon}
									clickEvent={this.addNew}
									{...this.props}
								/>
								<ContentPane />
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

						<div className="section-content">
							<div className="container">
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

						<BackgroundContent 
							image="http://unsplash.it/2000x1500"
							overlayColor="#000000"
							overlayOpacity=".2"
							{...this.props}
						/>
					</div>

					<div className="ds-page-section">
						<h1> Hello World </h1> 
						<Button
							label="button"
							{...this.props}
						/>
						<Button
							buttonClass="medium"
							label="button.medium"
							{...this.props}
						/>
						<Button
							buttonClass="tiny"
							label="button.tiny"
							icon={PlusIcon}
							{...this.props}
						/>
						<Button
							buttonClass="secondary"
							label="button"
							{...this.props}
						/>
						<Button
							buttonClass="medium secondary"
							label="button.medium.secondary"
							{...this.props}
						/>
						<Button
							buttonClass="tiny secondary"
							label="button.tiny.secondary"
							{...this.props}
						/>
						<Button
							buttonClass="tertiary"
							label="button.tertiary"
							{...this.props}
						/>
						<Button
							buttonClass="medium tertiary"
							label="button.medium.tertiary"
							{...this.props}
						/>
						<Button
							buttonClass="tiny tertiary"
							label="button.tiny.tertiary"
							{...this.props}
						/>
						<Button
							buttonClass="loading"
							label="button.loading"
							{...this.props}
						/>
						<Button
							buttonClass="success"
							label="button.success"
							{...this.props}
						/>
						<Button
							buttonClass="error"
							label="button.error"
							{...this.props}
						/>
						<Button
							buttonClass="circle button-ripple"
							icon={PlusIcon}
							clickEvent={this.addNew}
							{...this.props}
						/>
						<Button
							buttonClass="circle medium tertiary"
							icon={PlusIcon}
							{...this.props}
						/>
						<Button
							buttonClass="circle tiny secondary"
							icon={PlusIcon}
							{...this.props}
						/>

						<ContentPane />
						<TypePane />

						<div className="button-group three-buttons">
							<Button
								buttonClass="medium"
								label="button in group"
								icon={PlusIcon}
								{...this.props}
							/>
							<Button
								buttonClass="medium medium"
								label="button in group"
								icon={PlusIcon}
								{...this.props}
							/>
							<Button
								buttonClass="medium"
								label="button in group"
								icon={PlusIcon}
								{...this.props}
							/>
						</div>

						<Switch />

					</div>

				</div>
				<FooterNav/>
			</div>
		)
	}
}
