import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import TypePane from 'Components/TypePane/TypePane';
import FooterNav from 'Components/FooterNav';

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
						label="button.medium"
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
						label="button.medium.secondary"
						{...this.props}
					/>
					<Button
						buttonClass="tertiary"
						label="button"
						{...this.props}
					/>
					<Button
						buttonClass="medium tertiary"
						label="button.medium.tertiary"
						{...this.props}
					/>
					<Button
						buttonClass="tiny tertiary"
						label="button.medium.tertiary"
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

				</div>

				<FooterNav/>
			</div>
		)
	}
}
