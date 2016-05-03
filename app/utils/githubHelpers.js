var axios = require('axios');

function getUserInfo(username) {
    return axios.get('https://api.github.com/users/' + username);
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos?per_page=100');
}

function getTotalStars(repos) {
    return repos.data.reduce(function(prev, cur) {
        return prev + cur.stargazers_count;
    }, 0)
}

function getPlayersData (player) {
    return getRepos(player.login)
            .then(getTotalStars)
            .then(function(totalStars) {
                return {
                    followers: player.followers,
                    totalStars: totalStars
                }
            })
}

function calculateScores (players) {
    return [
        players[0].followers * 3 + players[0].totalStars + 3,
        players[1].followers * 3 + players[1].totalStars + 3
    ]
}

var helpers = {
    /* Gets the players info */
    getPlayersInfo(players) {
        return axios.all(players.map(function(player) {
            return getUserInfo(player);
        })).then(function(info) {
            return info.map(function(user) {
                return user.data;
            })
        }).catch(function(err) {
            console.log('Error in getPlayersInfo', err);
        })
    },

    battle(players) {
        return axios.all(players.map(function(player){
            return getPlayersData(player)
        })).then(calculateScores)
        .catch(function (err) {console.warn('Error in getPlayersInfo: ', err)})
    }
};

module.exports = helpers;
