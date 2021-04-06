<template v-if="info.timestamp">
    <div class="game-info" v-if="info.size">
        <gameboard
            :size="info.size"
            :stone="stone"
            :moveNumber="moveNumber"
        ></gameboard>
        <div class="game-info__controls">
            <div class="game-info__controls-item">
                <button v-on:click="onPrvClick">
                    <span class="game-info__controls-item-text"
                        >Previous move</span
                    >
                </button>
            </div>
            <div class="game-info__controls-item">
                <button v-on:click="onNextClick">
                    <span class="game-info__controls-item-text">Next move</span>
                </button>
            </div>
        </div>
        <div class="game-info__totals">
            <div class="game-info__totals-item">
                <span class="game-info__totals-item-text"
                    >Score: {{ info.score }}</span
                >
            </div>
            <div class="game-info__totals-item">
                <span class="game-info__totals-item-text"
                    >duration: {{ info.duration }}</span
                >
            </div>
        </div>
        <div class="game-info__players">
            <div class="game-info__players-item">
                <img v-if="info.color1 === 'black'" src="../assets/black.png" />
                <img
                    v-if="info.color1 === 'white'"
                    src="../assets/white.png"
                /><span class="game-info__players-item-text"
                    >{{ info.name1 }} - W</span
                >
            </div>
            <div class="game-info__players-item">
                <img v-if="info.color2 === 'white'" src="../assets/white.png" />
                <img
                    v-if="info.color2 === 'black'"
                    src="../assets/black.png"
                /><span class="game-info__players-item-text"
                    >{{ info.name2 }} - L</span
                >
            </div>
        </div>
        <div class="game-info__additional">
            <div class="game-info__additional-title">
                Дополнительная информация
            </div>
            <div class="game-info__additional-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo
                vel orci porta non pulvinar neque. Enim eu turpis egestas
                pretium aenean pharetra magna ac placerat. Feugiat nisl pretium
                fusce id velit ut tortor. Ornare arcu dui vivamus arcu felis
                bibendum ut. Suscipit tellus mauris a diam. Nunc lobortis mattis
                aliquam faucibus purus in massa tempor. Neque laoreet
                suspendisse interdum consectetur libero.
            </div>
        </div>
    </div>
</template>
<script>
export class Move {
    constructor(x = 1, y = 1, name = 'MOVE', color = 'black', id = 0) {
        this.x = x
        this.y = y
        this.color = color
        this.name = name
        this.id = 0
    }
}

import Gameboard from './Gameboard.vue'
export default {
    name: 'Game-Info',
    components: { Gameboard },
    props: {
        isPannelOpened: Boolean,
        info: {
            name1: String,
            name2: String,
            color1: String,
            color2: String,
            score: String,
            duration: String,
            size: Number,
            moves: Array,
            timestamp: String,
        },
    },
    data: function() {
        return { stone: {}, moveNumber: 0 }
    },
    mounted: function() {},
    watch: {
        isPannelOpened: function() {},
    },
    methods: {
        onNextClick: function() {
            const step = this.info.moves[this.moveNumber]
            console.log(step)
            this.stone.x = step.x
            this.stone.y = step.y
            this.stone.color = step.name
            this.moveNumber += 1
        },
        onPrvClick: function() {
            const step = this.info.moves[this.moveNumber]
            console.log(step)
            this.stone.x = step.x
            this.stone.y = step.y
            this.stone.color = step.name
            this.moveNumber -= 1
        },
    },
}
</script>
<style lang="scss">
@mixin general-text {
    font-family: 'Aqua', Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: -0.06em;
    font-size: 18px;
    line-height: 18px;
}

$color-red: #e03e3b;
$color-black: #3c3c3a;
$color-white: #ffffff;
$color-yellow: #fbc467;

.game-info {
    background-color: white;

    &__controls {
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-item {
            min-width: 50%;

            button {
                width: 100%;
                height: 32px;
                background-color: $color-black;
            }

            &-text {
                color: $color-white;
                @include general-text;
            }
        }
    }

    &__totals {
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-item {
            width: 50%;
            padding-top: 40px;
            padding-bottom: 40px;
            padding-left: 10%;
            padding-right: 10%;

            &-text {
                color: $color-red;
                @include general-text;
            }
        }
    }

    &__players {
        &-item {
            &-text {
                color: $color-black;
                @include general-text;
            }
        }
    }

    &__additional {
        &-title {
            margin-top: 20px;
            text-align: center;
            margin-bottom: 20px;
            color: $color-black;
            @include general-text;
        }
    }
}
</style>
