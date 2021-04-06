<template>
    <div class="page-container">
        <liderboard
            :isPannelOpened="isPannelOpened"
            class="liderboard"
            :class="{ liderboard__active: isPannelOpened }"
            v-on:onRowClick="onRowClick"
        ></liderboard>
        <game-info
            class="game-info"
            :info="gameInfo"
            :isPannelOpened="isPannelOpened"
            :class="{ 'game-info__active': isPannelOpened }"
        ></game-info>
    </div>
</template>

<script>
class Move {
    constructor(x = 1, y = 1, name = 'MOVE', color = 'black', id = 0) {
        this.x = x
        this.y = y
        this.color = color
        this.name = name
        this.id = 0
    }
}

class Game {
    constructor(
        id = 1,
        score = '1000',
        duration = '1 hour',
        name1 = 'Andrey Fisher',
        color1 = 'white',
        name2 = 'Daniel Nikola',
        color2 = 'black',
        size = 19
    ) {
        this.id = id
        this.score = score
        this.duration = duration
        this.name1 = name1
        this.name2 = name2
        this.color1 = color1
        this.color2 = color2
        this.size = size
    }
    setMoves(moves) {
        this.moves = moves
    }
}
import GameInfo from './components/Game-Info.vue'
import Liderboard from './components/Liderboard.vue'
export default {
    name: 'App',
    data: function() {
        return { isPannelOpened: false, gameInfo: {} }
    },
    components: { Liderboard, GameInfo },
    created: function() {
        this.postLoging()
    },
    methods: {
        onRowClick(value, name, gameId) {
            this.isPannelOpened = value
            this.loadGameInfo(name, gameId)
        },
        loadGameInfo: function(name, gameId) {
            console.log(`load ${gameId} info for`, name)
            this.postGameInfo(name, gameId)
        },
        postGameInfo: function(name, id) {
            const data = {
                type: 'JOIN_ARCHIVE_REQUEST',
                name: name,
            }

            var requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                redirect: 'follow',
            }

            fetch('http://localhost:3000/api', requestOptions)
                .then(res => res.text())
                .then(res => this.getGameInfo(id))
                .catch(error => console.log('error', error))
        },
        getGameInfo: function(id) {
            var requestOptions = {
                method: 'Get',
                headers: {
                    'Content-Type': 'application/json',
                },
            }
            fetch('http://localhost:3000/api', requestOptions)
                .then(response => response.json())
                .then(result => this.parseGames(result, id))
                .catch(error => console.log('error', error))
        },
        parseGames: function(raw, id) {
            const games = []
            for (var i = 0; i < raw['messages'].length; i++) {
                if (raw['messages'][i]['games'])
                    games.push(raw['messages'][i]['games'])
            }

            var currGame = games[0][id - 1]
            console.log(currGame)
            this.gameInfo = new Game(
                id,
                `${currGame.score}`,
                '1 hour',
                currGame.players.black.name,
                'black',
                currGame.players.white.name,
                'white',
                currGame.size
            )
            this.igame(currGame.timestamp)
        },
        igame: function(timestamp) {
            console.log('ROOM_LOAD_GAME')
            const data = {
                type: 'ROOM_LOAD_GAME',
                timestamp: timestamp,
                private: true,
                channelId: '31',
            }

            var requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                redirect: 'follow',
            }

            fetch('http://localhost:3000/api', requestOptions)
                .then(res => res.text())
                .then(res => this.getigame())
                .catch(error => console.log('error', error))
        },
        parseMoves: function(raw) {
            const sgfEvents = []
            class Move {
                constructor(
                    x = 1,
                    y = 1,
                    name = 'MOVE',
                    color = 'black',
                    id = 0
                ) {
                    this.x = x
                    this.y = y
                    this.color = color
                    this.name = name
                    this.id = id
                }
            }

            const moves = []
            console.log(raw)
            for (var i = 0; i < raw['messages'].length; i++) {
                if (raw['messages'][i]['sgfEvents'])
                    sgfEvents.push(raw['messages'][i]['sgfEvents'])
            }

            for (var i = 1; i < sgfEvents[0].length; i++) {
                if (sgfEvents[0][i].type === 'PROP_GROUP_ADDED') {
                    //console.log(sgfEvents[0][i].props[0].loc)
                    moves.push(
                        new Move(
                            sgfEvents[0][i].props[0].loc.x,
                            sgfEvents[0][i].props[0].loc.y,
                            sgfEvents[0][i].props[0].color,
                            sgfEvents[0][i].props[0].name,
                            sgfEvents[0][i].nodeId
                        )
                    )
                }
            }
            //moves.push(new Move())
            return moves
        },
        getigame: function() {
            var requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            fetch('http://localhost:3000/api', requestOptions)
                .then(response => response.json())
                .then(res => this.parseMoves(res))
                .then(moves => this.gameInfo.setMoves(moves))
                .catch(error => console.log('error', error))
        },
        genMoves: function() {
            const moves = []
            for (var x, y = 0; x < 10; x++, y++) moves.push(new Move())
            return moves
        },
        postLoging: function() {
            const data = {
                type: 'LOGIN',
                name: 'somka',
                password: 'ewkihv',
                locale: 'en_US',
            }

            var requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
                redirect: 'follow',
            }

            fetch('http://localhost:3000/api/reg', requestOptions)
                .then(response => response.text())
                .then(result => this.getLoginResponse())
                .catch(error => console.log('error', error))
        },
        getLoginResponse: function() {
            var requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
            }
            fetch('http://localhost:3000/api/reg', requestOptions)
                .then(response => response.json())
                .then(result => console.log(result))
                .catch(error => console.log('error', error))
        },
    },
}
</script>

<style lang="scss">
.page-container {
    background-image: url('./assets/background.png');
}
.game-info {
    position: absolute;
    top: 0;
    left: 75%;
    z-index: 1;
    width: 25%;
    transition: 0.5s;
    transform: translateX(100%);

    &__active {
        transform: translateX(0%);
    }
}

.liderboard {
    transition: 0.5s;
    position: relative;
    z-index: 0;

    &__active {
        //transform: translateX(-30%);
        max-width: 70%;
        overflow-x: hidden;
    }
}
</style>
