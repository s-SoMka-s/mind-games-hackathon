<template>
    <md-card class="game-info-container">
        <div class="game-table section">
            <img class="game-board" src="../assets/game.png" />
        </div>
        <div class="controls section">
            <md-button class="controls-item md-raised md-primary"
                >Previous move</md-button
            >
            <md-button class="controls-item md-raised md-primary"
                >Next move</md-button
            >
        </div>
        <div class="game-info section">
            <div class="general-info section">
                <div class="general-info-item">
                    score: 228
                </div>
                <div class="general-info-item">
                    Duration: 1 hour
                </div>
            </div>
            <div class="players-info section">
                <div class="players-info-item">
                    <img class="player-color" src="../assets/black.png" />Andrey
                    Fisher
                </div>
                <div class="players-info-item">
                    <img class="player-color" src="../assets/white.png" />Andrey
                    Fisher
                </div>
            </div>
            <div class="additional-info section">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Quisque id diam vel quam elementum. Amet purus gravida quis
                blandit turpis cursus. Lobortis mattis aliquam faucibus purus in
                massa tempor. Volutpat lacus laoreet non curabitur gravida.
                Risus quis varius quam quisque id diam vel quam elementum
            </div>
        </div>
    </md-card>
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

.general-info {
    display: flex;
    justify-content: space-between;
}
.section {
    border: 1px black dotted;
}
.general-info-item {
    margin-right: auto;
    margin-left: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    color: #e03e3b;
}

.game-board {
    height: 304px;
    width: 340px;
}

.player-color {
    max-width: 34px;
    max-height: 34px;
}

.additional-info {
    background-color: grey;
}
</style>
