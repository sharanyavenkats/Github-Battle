var React = require('react');

var Results = require('../components/Results')
var githubHelpers = require('../utils/githubHelpers');

var ResultsContainer = React.createClass({
    getInitialState() {
        return {
            isLoading: true,
            scores: []
        }
    },

    componentDidMount() {
        var playersInfo = this.props.location.state.playersInfo;
        githubHelpers.battle(playersInfo)
            .then(function(scores) {
                this.setState({
                    isLoading: false,
                    scores: scores
                })
            }.bind(this))
    },

    render() {
        return <Results
                    isLoading={this.state.isLoading}
                    scores={this.state.scores}
                    playersInfo={this.props.location.state.playersInfo} />
    }
});

module.exports = ResultsContainer;
