<template>
    <div class="liderboard">
        <div class="liderboard__header">
            <div class="liderboard__header-item">Id</div>
            <div class="liderboard__header-item">Name</div>
            <div class="liderboard__header-item">Score</div>
            <div class="liderboard__header-item">Game_1</div>
            <div class="liderboard__header-item">Game_2</div>
        </div>
        <div class="liderboard__body">
            <div
                class="liderboard__row-container"
                v-for="user in users"
                :key="user.id"
            >
                <liderboard-row v-bind:user="user"></liderboard-row>
            </div>
        </div>
    </div>
</template>
<script>
import LiderboardRow from './Liderboard-Row.vue'
export default {
    components: { LiderboardRow },
    name: 'Liderboard',
    data: function () {
        return { users: this.genUsers() }
    },
    methods: {
        genUsers: function () {
            class User {
                constructor(id, name, score) {
                    this.id = id
                    this.name = name
                    this.score = score
                }
            }

            var users = []
            for (var i = 0; i < 100; i++) {
                users.push(new User(i, 'Andrey Fisher', 1000 - i))
            }

            return users
        },
    },
}
</script>
<style lang="scss">
.liderboard {
    width: 60%;
    border: 1px dotted grey;
    &__header {
        height: 64px;
        border: 1px dotted grey;
        background-color: #e03e3b;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>
