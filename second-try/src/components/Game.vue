<template>
    <div class="game-info-container">
        <div class="game-table">
            <img scr="./game.png" />
        </div>
        <div class="controls">
            <button>Вперед</button>
            <button>Вперед</button>
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
        </div>
    </div>
</template>
<script>
export default {
    name: 'Game',
}
</script>
<style>
.game-info-container {
    max-width: 304px;
}

.controls {
    display: flex;
    justify-content: space-between;
}

.general-info {
    display: flex;
    justify-content: space-between;
}

img {
    max-width: 304px;
}
</style>
