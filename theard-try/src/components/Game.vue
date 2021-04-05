<template>
    <div class="game">
        <game-board></game-board>
        <div class="game__info">
            <div class="game__info-results">
                <div class="game__info-results-item">
                    <span>Score: 228</span>
                </div>
                <div class="game__info-results-item">
                    <span>Score: 228</span>
                </div>
            </div>
            <div class="game__info-players">
                <div class="game__info-players-item"></div>
                <div class="game__info-players-item"></div>
            </div>
            <div class="game__info-general"></div>
        </div>
    </div>
</template>
<script>
import GameBoard from './Game-Board.vue'
export default {
    components: { GameBoard },
    name: 'Game',
}
</script>
<style lang="scss">
.game {
    width: 20%;
    border: 1px dotted grey;

    &__info {
        &-results {
            display: flex;
            justify-content: ;
        }

        &-
    }
}
</style>
