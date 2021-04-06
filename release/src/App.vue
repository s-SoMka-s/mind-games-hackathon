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
import GameInfo from './components/Game-Info.vue'
import Liderboard from './components/Liderboard.vue'
export default {
    name: 'App',
    data: function() {
        return { isPannelOpened: false, gameInfo: {} }
    },
    components: { Liderboard, GameInfo },
    methods: {
        onRowClick(value) {
            this.isPannelOpened = value
            this.loadGameInfo()
        },

        loadGameInfo: function() {
            this.gameInfo.name1 = 'Andrey Fisher'
            this.gameInfo.name2 = 'Daniel Nicola'
            this.gameInfo.color1 = 'black'
            this.gameInfo.color2 = 'white'
            console.log(this.gameInfo)
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
