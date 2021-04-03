<template>
    <div id="liderboard">
        <md-table md-card>
            <md-table-row class="head-row">
                <md-table-head md-numeric>ID </md-table-head>
                <md-table-head>Top 100 players</md-table-head>
                <md-table-head>Total score</md-table-head>
                <md-table-head>Game 1</md-table-head>
                <md-table-head>Game 2</md-table-head>
            </md-table-row>
            <md-table-row class="data-row" v-for="user in users" :key="user.id">
                <md-table-cell md-numeric class="id-cell">{{
                    user.id
                }}</md-table-cell>
                <md-table-cell>{{ user.name }}</md-table-cell>
                <md-table-cell>{{ user.score }}</md-table-cell>
                <md-table-cell>Game 1</md-table-cell>
                <md-table-cell>Game 2</md-table-cell>
            </md-table-row>
        </md-table>
    </div>
</template>
<script>
export default {
    name: 'Liderboard',
    data: function() {
        return { users: this.genUsers() };
    },
    methods: {
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
#liderboard {
    min-width: 1000px;
}

.head-row {
    background-color: #e03e3b;
}

.data-row:hover {
    background-color: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    color: white;
}

.id-cell {
    max-width: 10px;
}
</style>
