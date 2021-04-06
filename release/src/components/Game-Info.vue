<template>
    <div class="game-info">
        <gameboard
            :size="size"
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
                <span class="game-info__totals-item-text">Score: 228</span>
            </div>
            <div class="game-info__totals-item">
                <span class="game-info__totals-item-text">Score: 228</span>
            </div>
        </div>
        <div class="game-info__players">
            <div class="game-info__players-item">
                <img src="../assets/black.png" /><span
                    class="game-info__players-item-text"
                    >Andrew Fisher - W</span
                >
            </div>
            <div class="game-info__players-item">
                <img src="../assets/white.png" /><span
                    class="game-info__players-item-text"
                    >Daniel Nicola - L</span
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
import Gameboard from './Gameboard.vue'
export default {
    name: 'Game-Info',
    components: { Gameboard },
    data: function() {
        return { stone: {}, size: 5, moveNumber: 0 }
    },
    methods: {
        onNextClick: function() {
            var x = 3
            var y = 3
            this.stone.x = x
            this.stone.y = y
            this.stone.color = 'black'
            this.moveNumber += 1
            console.log(this.stone)
        },
        onPrvClick: function() {
            var x = 2
            var y = 2
            this.stone.x = x
            this.stone.y = y
            this.stone.color = 'white'
            this.moveNumber -= 1
            console.log(this.stone)
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
}
</style>
