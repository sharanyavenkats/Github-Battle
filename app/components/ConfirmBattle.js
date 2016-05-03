var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;

var styles = require('../styles');
var UserDetails = require('../components/UserDetails');
var UserDetailsWrapper = require('../components/UserDetailsWrapper');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function ConfirmBattleView(props) {
    return (
        <MainContainer>
            <h1>Confirm Players</h1>
            <div className='col-sm-8 col-sm-offset-2'>
                <UserDetailsWrapper header='Player 1'>
                    <UserDetails info={props.playerOneInfo} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header='Player 2'>
                    <UserDetails info={props.playerTwoInfo} />
                </UserDetailsWrapper>
            </div>
            <div className='col-sm-8 col-sm-offset-2'>
              <div className='col-sm-12' style={styles.space}>
                <button type='button' className='btn btn-lg btn-success'
                    onClick={props.onInitiateBattle}>
                    Initiate Battle!
                </button>
              </div>
              <div className='col-sm-12' style={styles.space}>
                <Link to='/playerOne'>
                  <button type='button' className='btn btn-lg btn-danger'>
                      Reselect Players
                  </button>
                </Link>
              </div>
            </div>
        </MainContainer>
    )
}

function ConfirmBattle (props) {
    return props.isLoading  === true ?
    <Loading /> :
    <ConfirmBattleView playerOneInfo={props.playersInfo[0]}
                    playerTwoInfo={props.playersInfo[1]} onInitiateBattle={props.onInitiateBattle} />
}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onInitiateBattle: PropTypes.func.isRequired,
    playersInfo: PropTypes.array.isRequired
}

module.exports = ConfirmBattle;
