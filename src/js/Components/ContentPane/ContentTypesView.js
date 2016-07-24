import React, { Component } from 'react';

import Button from 'Components/Common/Button';
import ContentType from 'Components/ContentPane/ContentType';
import InlineSVG from 'svg-inline-react/lib';

import HeadlineIcon from 'assets/icons/headline';
import ParagraphIcon from 'assets/icons/paragraph';
import ImageIcon from 'assets/icons/image';
import VideoIcon from 'assets/icons/play';
import MailIcon from 'assets/icons/mail';
import TwitterIcon from 'assets/icons/twitter';
import InstagramIcon from 'assets/icons/instagram';
import ButtonIcon from 'assets/icons/button';
import DividerIcon from 'assets/icons/divider';
import MapIcon from 'assets/icons/map';
import MediumIcon from 'assets/icons/medium';

export default class App extends Component {

	render () {

		return (
			<div className="ds-pane-content">
				<div className="new-content-grid clearfix">
					<ContentType
						icon={HeadlineIcon}
						title="Headline"
					/>
					<ContentType
						icon={ParagraphIcon}
						title="Paragraph"
					/>
					<ContentType
						icon={ImageIcon}
						title="Image"
					/>
					<ContentType
						icon={VideoIcon}
						title="Video"
					/>
					<ContentType
						icon={VideoIcon}
						title="Audio"
					/>
					<ContentType
						icon={MapIcon}
						title="Map"
					/>
					<ContentType
						icon={MediumIcon}
						title="Medium"
					/>
					<ContentType
						icon={ButtonIcon}
						title="Button"
					/>
					<ContentType
						icon={DividerIcon}
						title="Divider"
					/>
					<ContentType
						icon={TwitterIcon}
						title="Twitter"
					/>
					<ContentType
						icon={InstagramIcon}
						title="Instagram"
					/>
					<ContentType
						icon={MailIcon}
						title="Mailchimp"
					/>
				</div>
			</div>
		);
		
	}
}