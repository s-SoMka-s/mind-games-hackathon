<template>
    <div class="container">
        <liderboard v-on:childToParent="onChildClick"></liderboard>
        <game v-if="clicked"></game>
    </div>
</template>

<script>
import Game from './components/Game.vue';
import Liderboard from './components/Liderboard.vue';

export default {
    name: 'App',
    data: function() {
        return { clicked: false };
    },
    methods: {
        onChildClick(value) {
            console.log(value);
            this.clicked = value;
        },
    },
    components: {
        Liderboard,
        Game,
    },
};
</script>

<style>
.container {
    padding: 60px;
    display: flex;
    justify-content: space-between;
}
</style>
