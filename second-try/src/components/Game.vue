<template>
    <div class="game-info-container">
        <div class="game-table">
            <img scr="../assets/game.png" />
        </div>
        <div class="controls">
            <md-button class="controls-item md-raised md-primary"
                >Previous move</md-button
            >
            <md-button class="controls-item md-raised md-primary"
                >Next move</md-button
            >
        </div>
        <div class="game-info">
            <div class="general-info">
                <div class="general-info-item">
                    score: 228
                </div>
                <div class="general-info-item">
                    Duration: 1 hour
                </div>
            </div>
            <div class="players-info">
                <div class="players-info-item">
                    <img class="player-color" src="../assets/black.png" />Andrey
                    Fisher
                </div>
                <div class="players-info-item">
                    <img class="player-color" src="../assets/white.png" />Andrey
                    Fisher
                </div>
            </div>
            <div class="additional-info">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quisque id diam vel quam elementum. Amet purus gravida quis
                blandit turpis cursus. Lobortis mattis aliquam faucibus purus in
                massa tempor. Volutpat lacus laoreet non curabitur gravida.
                Risus quis varius quam quisque id diam vel quam elementum
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Game',
};
</script>
<style>
.game-info-container {
    max-width: 304px;
}

.controls-item {
    min-width: 49%;
}

.controls {
    display: flex;
    justify-content: space-between;
}

.game-table {
    background-color: black;
    height: 304px;
}

.general-info {
    display: flex;
    justify-content: space-between;
}

img {
    height: 304px;
    width: 304px;
}

.player-color {
    max-width: 34px;
    max-height: 34px;
}

.additional-info {
    background-color: grey;
}
</style>
