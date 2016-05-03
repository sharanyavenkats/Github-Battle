var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var MainContainer = require('./MainContainer');

module.exports = React.createClass({
    displayName: 'Home',
    render: function() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead">Some fancy motto</p>
                <Link to="/playerOne">
                    <button ttpe="button" className="btn btn-lg btn-success">
                        Get Started
                    </button>
                </Link>
            </MainContainer>
        )
    }
});
