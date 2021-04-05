<template>
    <table class="table table-borderless">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Score</th>
                <th scope="col">Game_1</th>
                <th scope="col">Game_2</th>
            </tr>
        </thead>
        <tbody v-if="users.length">
            <tr v-for="user in users" v-bind:key="user.id">
                <th scope="row">{{ user.id }}</th>
                <td>{{ user.name }}</td>
                <td>{{ user.score }}</td>
                <td>Game_1</td>
                <td>Game_2</td>
            </tr>
        </tbody>
    </table>
</template>
<script>
class User {
    constructor(id, name, avatar, score) {
        this.id = id
        this.avatar = avatar
        this.name = name
        this.score = score
    }
}

export default {
    name: 'Liderboard',
    data: function() {
        return {
            users: [],
        }
    },
    created: function() {
        this.loadUsers()
    },
    methods: {
        loadUsers: function() {
            const url = 'http://localhost:3000/parse'
            const options = {
                method: 'GET',
            }

            fetch(url, options)
                .then(response => response.json())
                .then(
                    names =>
                        (this.users = names.map(
                            name => new User(1, name, null, 1000)
                        ))
                )
                .catch(error => console.log('error', error))
        },
    },
}
</script>
<style lang="scss">
table {
    background-color: white;
}
</style>
