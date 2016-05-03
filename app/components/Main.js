var React = require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');
require('../main.css')

module.exports = React.createClass({
    displayName: 'Main',
    render: function() {
        return (
            <div className="main-container">
                <ReactCSSTransitionGroup transitionName="appear"
                                transitionEnterTimeout={500}
                                transitionLeaveTimeout={500} >
                    <div key={this.props.location.pathname}>
                        {this.props.children}
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});
