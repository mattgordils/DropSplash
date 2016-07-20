import 'sass/components/common/buttons';

import React, { Component } from 'react';
import InlineSVG from 'svg-inline-react/lib';

import Pane from 'Components/Common/Pane';
import Button from 'Components/Common/Button';

export default class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            
        };     
    }

    paneContent () {
        return [
            (<div key="view1">
                <h1>View 1</h1>
                <p>It' the first one.</p>
                <Button buttonClass="tiny" label="Next" clickEvent={this.clickHandler.bind(this)} />
            </div>),
            (<div key="view2">
                <h1>View 2</h1>
                <p>View Number 2 is as good as number 1.</p>
                <Button buttonClass="tiny" label="Next" clickEvent={this.clickHandler.bind(this)} />
            </div>),
            (<div key="view3">
                <h1>View 3</h1>
                <p>View Number 3 sucks.</p>
                <Button buttonClass="tiny" label="Next" clickEvent={this.clickHandler.bind(this)} />
            </div>)
        ]
    }

    clickHandler () {
        this.refs.typePane.goToNextView();
    }

	render () {
		return (
			<Pane
                title="Type Pane"
                views={this.paneContent()}
                ref="typePane"
                {...this.props}
            />
		);
	}
}
