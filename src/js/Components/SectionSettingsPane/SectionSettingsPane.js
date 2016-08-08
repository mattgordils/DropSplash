import 'sass/components/common/buttons';

import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react/lib';

import Pane from 'Components/Common/Pane';
import TypographyView from 'Components/TypePane/TypePaneView';
import EffectsView from 'Components/SectionSettingsPane/EffectsView';
import LayoutView from 'Components/SectionSettingsPane/LayoutView';

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
            (<TypographyView key="1" title="view 1" clickHandler={this.clickHandler.bind(this)} />),
            (<EffectsView key="2" title="view 2" clickHandler={this.clickHandler.bind(this)} />),
            (<LayoutView key="3" title="view 3" clickHandler={this.clickHandler.bind(this)} />)
        ]
    }

	render () {
		return (
			<Pane
                paneClass="wide"
                paneHeight="317px"
                title="Section Settings"
                views={this.paneContent()}
                ref="backgroundPane"
                paneTabs={['Type', 'Effects', 'Layout']}
                {...this.props}
            />
		);
	}
}
