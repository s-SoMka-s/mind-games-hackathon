<template>
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
</template>
<script>
export default {
    name: 'Liderboard',
    data: function() {
        return { users: this.genUsers() }
    },
    methods: {
        genUsers: function() {
            let user = {
                id: 1,
                score: 1111,
                name: 'Name',
            }

            var users = []
            for (var i = 0; i < 10; i++) {
                users.push(user)
            }
            return users
        },
    },
}
</script>
<style>
.head-row {
    background-color: #e03e3b;
}

.data-row:hover {
    background-color: black;
    color: white;
}

.id-cell {
    max-width: 10px;
}
</style>
