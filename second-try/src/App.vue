<template>
    <div class="container">
        <liderboard></liderboard>
        <game></game>
    </div>
</template>

<script>
import Game from './components/Game.vue'
import Liderboard from './components/Liderboard.vue'

export default {
    name: 'App',
    components: {
        Liderboard,
        Game,
    },
}
</script>

<style>
.container {
    display: flex;
    justify-content: space-between;
    background-image: url('./assets/background.png');
}
</style>
