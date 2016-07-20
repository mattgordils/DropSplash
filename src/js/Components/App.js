import React, { Component } from 'react';

import Button from 'Components/Button';
import PlusIcon from 'Icons/PlusIcon';
import Pane from 'Components/Pane';
import FooterNav from 'Components/FooterNav';

import 'sass/app';

export default class App extends Component {

	render () {
		return (
			<div>
				<div className="app-content">

					<h1> Hello World </h1> 
					<Button
						className=""
						label="button"
						icon=""
						clickHandler=""
						url=""
						{...this.props}
					/>
					<Button
						className="medium"
						label="button.medium"
						{...this.props}
					/>
					<Button
						className="tiny"
						label="button.medium"
						icon={PlusIcon}
						{...this.props}
					/>
					<Button
						className="secondary"
						label="button"
						{...this.props}
					/>
					<Button
						className="medium secondary"
						label="button.medium.secondary"
						{...this.props}
					/>
					<Button
						className="tiny secondary"
						label="button.medium.secondary"
						{...this.props}
					/>
					<Button
						className="tertiary"
						label="button"
						{...this.props}
					/>
					<Button
						className="medium tertiary"
						label="button.medium.tertiary"
						{...this.props}
					/>
					<Button
						className="tiny tertiary"
						label="button.medium.tertiary"
						{...this.props}
					/>
					<Button
						className="loading"
						label="button.loading"
						{...this.props}
					/>
					<Button
						className="success"
						label="button.success"
						{...this.props}
					/>
					<Button
						className="error"
						label="button.error"
						{...this.props}
					/>
					<Button
						className="circle button-ripple"
						icon={PlusIcon}
						{...this.props}
					/>
					<Button
						className="circle medium tertiary"
						icon={PlusIcon}
						{...this.props}
					/>
					<Button
						className="circle tiny secondary"
						icon={PlusIcon}
						{...this.props}
					/>

					<Pane
						className=""
					/>

				</div>

				<FooterNav
					className=""
				/>
			</div>
		)
	}
}