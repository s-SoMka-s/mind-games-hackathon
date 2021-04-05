<template>
    <div class="page-container">
        <liderboard></liderboard>
        <game></game>
    </div>
</template>

<script>
import Game from './components/Game.vue'
import Liderboard from './components/Liderboard.vue'
export default {
    components: { Liderboard, Game },
    name: 'App',
}
</script>

<style lang="scss">
.page-container {
    display: flex;
    justify-content: space-between;
}
</style>
