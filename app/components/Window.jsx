/**
 * Created by Peter on 13/08/2016.
 */
'use strict';

import React from 'react';
import {connect} from 'react-redux'
import {setWindow, toggleWindowActive} from '../redux/actions/app'
import {importSections} from '../redux/actions/sections'

import Message from './windows/Message.jsx'
import Export from './windows/Export.jsx'
import Import from './windows/Import.jsx'

class Window extends React.Component {

    static propTypes = {
        sections: React.PropTypes.array,
        defaultSections: React.PropTypes.object,
        window: React.PropTypes.object,
        version: React.PropTypes.number
    };

    generateWindowContent = (type) => {
        switch (type) {
            case 'message':
                return <Message title={this.props.window.title} content={this.props.window.title}
                                onCloseClick={this.props.onToggleWindowActive}/>;
            case 'export':
                return <Export sections={this.props.sections} version={this.props.version}
                               onCloseClick={this.props.onToggleWindowActive}/>;
            case 'import':
                return <Import onImportSections={this.props.onImportSections}
                               onCloseClick={this.props.onToggleWindowActive}
                               defaultSections={this.props.defaultSections}/>;
        }
    };

    /**
     * render out the window
     * @returns {XML}
     */
    render() {

        var windowClassName = 'window ' + (this.props.window.active ? 'active' : '');

        return (
            <div className={windowClassName}>
                <div className='overlay'></div>
                <div className='content-container'>
                    {this.generateWindowContent(this.props.window.type)}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sections: state.sections.toArray().map((section) => {
            return section.toObject()
        }),
        defaultSections: state.defaultSections,
        window: state.window.toObject(),
        version: state.version
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onToggleWindowActive: () => {
            dispatch(toggleWindowActive())
        },
        onImportSections: (sections, version) => {
            dispatch(importSections(sections, version))
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Window);