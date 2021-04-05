<template>
    <div class="game-info">
        <div class="game-info__board">
            <img src="../assets/board.png" />
        </div>
        <div class="game-info__controls">
            <div class="game-info__controls-item">
                <button>Previous move</button>
            </div>
            <div class="game-info__controls-item">
                <button>Next move</button>
            </div>
        </div>
        <div class="game-info__totals">
            <div class="game-info__totals-item">Score: 228</div>
            <div class="game-info__totals-item">Score: 228</div>
        </div>
        <div class="game-info__players">
            <div class="game-info__players-item">
                <img src="../assets/black.png" />Andrew Fisher - W
            </div>
            <div class="game-info__players-item">
                <img src="../assets/white.png" />Daniel Nicola - L
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
export default {
    name: 'Game-Info',
}
</script>
<style lang="scss">
.game-info {
    background-color: white;

    &__board {
        max-width: 100%;
        img {
            max-width: 100%;
        }
    }

    &__controls {
        width: 100%;
        display: flex;
        justify-content: space-between;

        &-item {
            min-width: 50%;
        }
    }

    &__totals {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
}
</style>
