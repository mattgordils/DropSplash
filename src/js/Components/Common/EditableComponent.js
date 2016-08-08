import React, { Component } from 'react';

import 'sass/components/common/input-switch';
import EditOptions from 'Components/Common/EditOptions'

export default class App extends Component {

	constructor (props) {
    super(props);
    this.state = {
      editing: false
    };
  }

	editableTag(text) {
		var tag = 'h1'
		if(this.props.editableTag) {
			tag = this.props.editableTag;
		}
		return 
	}

	enterEditMode () {
		if (this.state.editing === false) {
			this.setState({editing: true});
		}
	}

	exitEditMode () {
		if (this.state.editing === true) {
			this.setState({editing: false});
		}
	}

	editableClass () {
    var editableClass = 'ds-editable';
    if (this.state.editing === true) {
      editableClass += ' editing';
    }
    return editableClass;
  }

  clickHandler () {
    if (this.state.editing === true) {
			this.setState({editing: false});
		} else {
			if (this.state.editing === false) {
				this.setState({editing: true});
			}
		}
  }

	render () {

		return (
			<div>
				<div className={this.editableClass()} onClick={this.enterEditMode.bind(this)}>
					<p className="content" contentEditable="true" >
						Some Content in the EditableComponent
					</p>
					<EditOptions 
						editing={this.state.editing} 
						clickHandler={this.clickHandler.bind(this)} 
					/>
				</div>
			</div>
		);
		
	}
}