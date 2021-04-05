<template>
    <div class="page-container">
        <liderboard
            class="liderboard"
            :class="{ liderboard__active: isMenuOpen }"
        ></liderboard>

        <button v-on:click="isMenuOpen = !isMenuOpen">Открыть</button>
        <game-info
            class="game-info"
            :class="{ 'game-info__active': isMenuOpen }"
        ></game-info>
    </div>
</template>

<script>
import GameInfo from './components/Game-Info.vue'
import Liderboard from './components/Liderboard.vue'
export default {
    name: 'App',
    data: function() {
        return { isMenuOpen: false }
    },
    components: { Liderboard, GameInfo },
}
</script>

<style lang="scss">
.game-info {
    position: absolute;
    top: 0;
    left: 75%;
    z-index: 1;
    width: 25%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
    }
}
</style>
