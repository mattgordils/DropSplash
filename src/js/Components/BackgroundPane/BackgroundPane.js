import 'sass/components/common/buttons';

import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react/lib';

import Pane from 'Components/Common/Pane';
import ImageBackground from 'Components/BackgroundPane/ImageBackgroundView';
import VideoBackground from 'Components/BackgroundPane/VideoBackgroundView';
import ColorBackground from 'Components/BackgroundPane/ColorBackgroundView';

import 'sass/components/common/modal';

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
        };
    }

    clickHandler () {
        this.refs.typePane.goToNextView();
    }

    paneContent () {
        return [
            // (<ImageBackground key="1" title="view 1" clickHandler={this.clickHandler.bind(this)} />),
            (<VideoBackground key="2" title="view 2" clickHandler={this.clickHandler.bind(this)} />),
            (<ColorBackground key="3" title="view 3" clickHandler={this.clickHandler.bind(this)} />)
        ]
    }

	render () {
		return (
			<Pane
                paneClass="wide"
                paneHeight="317px"
                title="Background"
                views={this.paneContent()}
                ref="backgroundPane"
                paneTabs={['Image', 'Video', 'Color']}
                {...this.props}
            />
		);
	}
}
