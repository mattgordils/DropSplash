import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import TypePane from 'Components/TypePane/TypePane';
import ContentPane from 'Components/ContentPane/ContentPane';
import Switch from 'Components/Common/Switch';
import BackgroundContent from 'Components/Common/BackgroundContent';
import FooterNav from 'Components/FooterNav';
import AddContentBetween from 'Components/Common/AddContentBetween';
import PageSection from 'Components/Common/PageSection';

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
					
					<PageSection 
						overlayColor="#000000"
						overlayOpacity=".2"
						backgroundImage="http://unsplash.it/2000x1500"
						{...this.props}
					/>

					<PageSection 
						empty="true"
						{...this.props}
					/>

					<PageSection 
						alignment="left"
						contentWidth="800px"
						height="500px"
						overlayColor="#000000"
						overlayOpacity=".8"
						backgroundImage="http://unsplash.it/1500x1500"
						{...this.props}
					/>

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
