<template>
    <div id="liderboard">
        <md-table md-card>
            <md-table-row class="head-row">
                <md-table-head md-numeric width="40px">ID </md-table-head>
                <md-table-head>Top 100 players</md-table-head>
                <md-table-head>Total score</md-table-head>
                <md-table-head>Game 1</md-table-head>
                <md-table-head>Game 2</md-table-head>
            </md-table-row>
            <md-table-row class="data-row" v-for="user in users" :key="user.id">
                <md-table-cell md-numeric class="id-cell">{{
                    user.id
                }}</md-table-cell>
                <md-table-cell
                    ><md-avatar class="user-avatar">
                        <img
                            src="../assets/avatar.png"
                            alt="Avatar"
                        /> </md-avatar
                    ><span class="user-name">{{
                        user.name
                    }}</span></md-table-cell
                >
                <md-table-cell>{{ user.score }}</md-table-cell>
                <md-table-cell
                    ><md-button v-on:click="greet" class="md-raised md-primary"
                        >Game_1</md-button
                    ></md-table-cell
                >
                <md-table-cell
                    ><md-button v-on:click="greet" class="md-raised md-primary"
                        >Game_2</md-button
                    ></md-table-cell
                >
            </md-table-row>
        </md-table>
    </div>
</template>
<script>
export default {
    name: 'Liderboard',
    data: function() {
        return { users: this.genUsers(), clicked: false };
    },
    methods: {
        emitToParent: function(event) {
            console.log('emit');
            this.clicked = !this.clicked;
            this.$emit('clicked', this.clicked);
        },

        greet: function(event) {
            this.clicked = !this.clicked;
            console.log(this.clicked);
            this.$emit('childToParent', this.clicked);
        },

        genUsers: function() {
            class User {
                constructor(id) {
                    this.id = id;
                    (this.name = 'Name'), (this.score = 1000);
                }
            }

            var users = [];
            for (var i = 0; i < 10; i++) {
                users.push(new User(i));
            }
            return users;
        },
    },
};
</script>
<style>
.liderboard {
    width: 100%;
}

.head-row {
    background-color: #e03e3b;
}

.data-row:hover {
    background-color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: white;
}

.user-avatar {
    max-height: 48px;
}

.user-name {
    margin-left: 10px;
}

.id-cell {
    max-width: 10px;
}
</style>
