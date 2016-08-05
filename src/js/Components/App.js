import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import PlusIcon from 'assets/icons/plus-icon';
import CheckIcon from 'assets/icons/check';
import BackArrow from 'assets/icons/arrow-2-back';
import DSLogo from 'assets/icons/temp-logo';
import TwitterIcon from 'assets/icons/twitter';
import GoogleIcon from 'assets/icons/twitter';
import TypePane from 'Components/TypePane/TypePane';
import ContentPane from 'Components/ContentPane/ContentPane';
import Switch from 'Components/Common/Switch';
import BackgroundContent from 'Components/Common/BackgroundContent';
import FooterNav from 'Components/FooterNav';
import AddContentBetween from 'Components/Common/AddContentBetween';
import PageSection from 'Components/Common/PageSection';
import Pane from 'Components/Common/Pane';
import Modal from 'Components/Modal/Modal';

import InlineSVG from 'svg-inline-react/lib';

import EditOptions from 'Components/Common/EditOptions'

import 'sass/components/app';
import 'sass/components/login';
import 'sass/components/common/font-pane-view';
import 'sass/components/ds-landing';
import 'sass/components/settings';

export default class App extends Component {

	addNew () {
		console.log(this);
		var currentClass = this.state.buttonClass.replace('button-ripple', '');
        this.setState({buttonClass: currentClass});
	}

	paneLinkAccount () {
    return [
    	(
    		<div className="has-button" key="view1">
					<div className="content pane-padded">
						<div className="row">
							<label>Username</label>
			        <input disabled="disabled" className="lg" type="text" value="dropsplash123" />
		        </div>
		        <div className="row">
							<label>Password</label>
			        <input className="lg" type="password" />
		        </div>
		      </div>
		      <div className="pane-view-actions">
		        <Button
		        	buttonClass="medium"
		        	label="Link Account" 
		        	clickEvent={this.props.clickHandler} 
		        />
	        </div>
		    </div>
    	)
    ]
	}

	paneLinkSuccess () {
    return [
    	(
    		<div className="has-button" key="view1">
					<div className="content pane-padded">
						<span class="small-caps">Linked Account</span>
						<p>Instagram</p>
		      </div>
		      <div className="pane-view-actions">
		        <Button
		        	buttonClass="medium tertiary"
		        	label="Edit Account Info" 
		        	clickEvent={this.props.clickHandler} 
		        />
	        </div>
		    </div>
    	)
    ]
	}

	backgroundPaneViews () {
    return [
    	(
    		<div className="has-button has-tabs" key="view1">
    			<div className="ds-pane-tabs small-caps">
	    			<div className="tab active">
	    				Image
	    			</div>
	    			<div className="tab">
	    				Video
	    			</div>
	    			<div className="tab">
	    				Color
	    			</div>
	    			<hr/>
    			</div>
					<div className="content pane-padded">
						<span class="small-caps">Linked Account</span>
						<p>Instagram</p>
		      </div>
		      <div className="pane-view-actions">
		        <Button
		        	buttonClass="medium"
		        	icon={CheckIcon}
		        	clickEvent={this.props.clickHandler} 
		        />
	        </div>
		    </div>
    	)
    ]
	}

	fontsPaneView () {
    return [
    	(
    		<div className="has-tabs" key="view1">
    			<div className="ds-pane-tabs four-tabs small-caps">
	    			<div className="tab">
	    				All
	    			</div>
	    			<div className="tab active">
	    				Sans
	    			</div>
	    			<div className="tab">
	    				Serif
	    			</div>
	    			<div className="tab">
	    				Mono
	    			</div>
	    			<hr/>
    			</div>
					<div className="content">
						<form>
							<ul className="font-list">
								<li>
									<input type="radio" name="font" id="roboto"/>
									<label htmlFor="roboto">
										<span className="font-name">Roboto RobotoRoboto Roboto</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="merriweather"/>
									<label htmlFor="merriweather">
										<span className="font-name">Merriweather</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="space-mono"/>
									<label htmlFor="space-mono">
										<span className="font-name">Space Mono</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="league-gothic"/>
									<label htmlFor="league-gothic">
										<span className="font-name">League Gothic</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Montserrat"/>
									<label htmlFor="Montserrat">
										<span className="font-name">Montserrat</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Bagnard"/>
									<label htmlFor="Bagnard">
										<span className="font-name">Bagnard</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="work-sans"/>
									<label htmlFor="work-sans">
										<span className="font-name">Work Sans</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="roboto"/>
									<label htmlFor="roboto">
										<span className="font-name">Roboto RobotoRoboto Roboto</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="merriweather"/>
									<label htmlFor="merriweather">
										<span className="font-name">Merriweather</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="space-mono"/>
									<label htmlFor="space-mono">
										<span className="font-name">Space Mono</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="league-gothic"/>
									<label htmlFor="league-gothic">
										<span className="font-name">League Gothic</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Montserrat"/>
									<label htmlFor="Montserrat">
										<span className="font-name">Montserrat</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Bagnard"/>
									<label htmlFor="Bagnard">
										<span className="font-name">Bagnard</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="work-sans"/>
									<label htmlFor="work-sans">
										<span className="font-name">Work Sans</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="roboto"/>
									<label htmlFor="roboto">
										<span className="font-name">Roboto RobotoRoboto Roboto</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="merriweather"/>
									<label htmlFor="merriweather">
										<span className="font-name">Merriweather</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="space-mono"/>
									<label htmlFor="space-mono">
										<span className="font-name">Space Mono</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="league-gothic"/>
									<label htmlFor="league-gothic">
										<span className="font-name">League Gothic</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Montserrat"/>
									<label htmlFor="Montserrat">
										<span className="font-name">Montserrat</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Bagnard"/>
									<label htmlFor="Bagnard">
										<span className="font-name">Bagnard</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="work-sans"/>
									<label htmlFor="work-sans">
										<span className="font-name">Work Sans</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="roboto"/>
									<label htmlFor="roboto">
										<span className="font-name">Roboto RobotoRoboto Roboto</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="merriweather"/>
									<label htmlFor="merriweather">
										<span className="font-name">Merriweather</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="space-mono"/>
									<label htmlFor="space-mono">
										<span className="font-name">Space Mono</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="league-gothic"/>
									<label htmlFor="league-gothic">
										<span className="font-name">League Gothic</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Montserrat"/>
									<label htmlFor="Montserrat">
										<span className="font-name">Montserrat</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="Bagnard"/>
									<label htmlFor="Bagnard">
										<span className="font-name">Bagnard</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
								<li>
									<input type="radio" name="font" id="work-sans"/>
									<label htmlFor="work-sans">
										<span className="font-name">Work Sans</span>
										<span className="selected-check"></span>
										<span className="style-count">8 Styles</span>
									</label>
								</li>
							</ul>
						</form>
		      </div>
		    </div>
    	)
    ]
	}

	render () {
		return (
			<div>

				<div className="settings-panel">
					<div className="settings-block">
						<span className="panel-title small-caps">Settings</span>
					</div>
					<div className="settings-block">
						<span className="settings-block-title small-caps">Account</span>

					</div>
				</div>

				<div className="app-content settings-open">

					<div className="ds-page-section ds-landing">
						<div className="section-content">
							<div className="container">
								<InlineSVG src={DSLogo} element="span" className="logo" />
								<p>Easy, elegant, one page websites (splash pages). <br/>Sign up and we will give you a heads up when we launch.</p>
								<form className="newsletter-form">
									<input type="text" id="newsletter" placeholder="drop@splash.com" />
									<button className="medium" htmlFor="newsletter">Let me know</button>
								</form>
							</div>
						</div>
					</div>

					<div className="ds-page-section ds-login">
						<div className="v-center">
							<div className="ds-login-form">
								<div className="login-intro">
									<h6 className="small-caps">Password recovery</h6>
									<p>Please enter the email address that you used when creating your account.</p>
								</div>
								<div className="fancy-input-wrap">
									<input className="login-input" required type="text" />
									<label>Email</label>
								</div>
								<Button buttonClass="medium login" label="Send Recovery Email" />
								<Button buttonClass="medium tertiary" label="Back to login" icon={BackArrow} />
							</div>
						</div>
					</div>

					<div className="ds-page-section ds-login">
						<div className="v-center">
							<div className="ds-login-form">
								<div className="fancy-input-wrap">
									<input className="login-input" required type="text" />
									<label>Email</label>
								</div>
								<div className="fancy-input-wrap">
									<input className="login-input" required type="password" />
									<label>Password</label>
								</div>
								<div className="fancy-input-wrap">
									<input className="login-input" required type="password" />
									<label>Confirm Password</label>
								</div>
								<Button buttonClass="medium login" label="Sign Up" />
								<span className="alt-login-divider small-caps">Or sign up with</span>
								<Button 
									buttonClass="medium google-login"
									label="Google"
								/>
								<Button 
									buttonClass="medium twitter-login"
									label="Twitter"
								/>
								<Button 
									buttonClass="medium facebook-login"
									label="Facebook"
								/>
							</div>
						</div>
						<p className="ds-signup-prompt">Already have an account? <Button buttonClass="tiny secondary" label="Login" /></p>
					</div>

					<div className="ds-page-section ds-login">
						<div className="v-center">
							<div className="ds-login-form">
								<div className="fancy-input-wrap">
									<input className="login-input" required type="text" />
									<label>Email</label>
								</div>
								<div className="fancy-input-wrap">
									<input className="login-input" required type="password" />
									<label>Password</label>
								</div>
								<div className="login-row">
									<div className="remember-me">
										<input type="checkbox" checked="checked" id="remember-me" /><label htmlFor="remember-me"><span className="checkbox"></span>Remember me</label>
									</div>
									<a className="forgot" href="#">Forgot Password?</a>
								</div>
								<Button buttonClass="medium login" label="Login" />
								<span className="alt-login-divider small-caps">Or login with</span>
								<div className="login-with">
									<Button 
										buttonClass="medium google-login"
										label="Google"
									/>
									<Button 
										buttonClass="medium twitter-login"
										label="Twitter"
									/>
									<Button 
										buttonClass="medium facebook-login"
										label="Facebook"
									/>
								</div>
							</div>
						</div>
						<p className="ds-signup-prompt">Dont have an account? <Button buttonClass="tiny secondary" label="Sign Up" /></p>
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

						<Pane
								paneClass="wide"
                title="Background"
                views={this.backgroundPaneViews()}
                paneHeight="317px"
                ref="backgroundView"
                {...this.props}
            />

            <Pane
								paneClass="wide"
                title="Fonts"
                views={this.fontsPaneView()}
                paneHeight="calc(100vh - 90px)"
                ref="backgroundView"
                {...this.props}
            />

						<Pane
								paneClass="add-content-pane"
                title="Instagram"
                views={this.paneLinkAccount()}
                ref="instagramView"
                {...this.props}
            />

            <Pane
                title="Instagram"
                views={this.paneLinkSuccess()}
                ref="typeView"
                {...this.props}
            />

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

					<PageSection 
						initialBlock="true"
						overlayColor="#000000"
						overlayOpacity=".3"
						backgroundImage="http://unsplash.it/2001x1500"
						// backgroundImage="assets/images/0.jpg"
						{...this.props}
					/>

					<PageSection 
						height="80px"
						overlayColor="#f3f3f3"
						overlayOpacity="1"
						textColor="#444"
						{...this.props}
					/>

					<PageSection 
						empty="true"
						{...this.props}
					/>

					<PageSection 
						alignment="left"
						contentWidth="400px"
						height="500px"
						textColor="#16E1B9"
						// contentOpacity=".5"
						overlayColor="#000000"
						overlayOpacity=".8"
						backgroundImage="http://unsplash.it/1500x1500"
						{...this.props}
					/>

				</div>
				<FooterNav/>
			</div>
		)
	}
}
