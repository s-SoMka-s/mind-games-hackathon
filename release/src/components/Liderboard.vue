<template>
    <table class="table table-borderless">
        <thead class="header">
            <tr>
                <th class="align-middle" style="max-width: 27px">
                    <img src="../assets/id.png" />
                </th>
                <th class="align-middle">
                    <span class="header__text">Name</span>
                </th>
                <th class="align-middle">
                    <span class="header__text">Total score</span>
                </th>
                <th class="align-middle">
                    <span class="header__text">Game_1</span>
                </th>
                <th class="align-middle">
                    <span class="header__text">Game_2</span>
                </th>
            </tr>
        </thead>
        <tbody v-if="users.length">
            <tr v-for="user in users" v-bind:key="user.id" class="body__row">
                <th>{{ user.id }}.</th>
                <td>
                    {{ user.name }}
                </td>
                <td>
                    {{ user.score }}
                </td>
                <td>
                    <span class="body__row-textbtn" v-on:click="emitToParent"
                        >Game_1</span
                    >
                </td>
                <td>
                    <span class="body__row-textbtn" v-on:click="emitToParent"
                        >Game_2</span
                    >
                </td>
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
    props: {
        isPannelOpened: Boolean,
    },
    created: function() {
        this.loadUsers()
    },
    methods: {
        emitToParent(event) {
            console.log('clicked')
            this.$emit('onRowClick', !this.isPannelOpened)
        },

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
@font-face {
    font-family: 'Aqua';
    src: url('../assets/fonts/aqua-webfont.woff') format('woff'),
        url('../assets/fonts/aqua-webfont.woff2') format('woff2');
}

@mixin general-text {
    font-family: 'Aqua', Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    letter-spacing: -0.06em;
    font-size: 18px;
    line-height: 18px;
}

$color-red: #e03e3b;
$color-black: #3c3c3a;
$color-white: #ffffff;

table {
    background-color: white;

    .header {
        background-color: $color-red;

        th {
            vertical-align: middle;
        }

        &__text {
            color: $color-white;
            @include general-text;
        }
    }

    .body {
        &__row {
            color: $color-black;
            @include general-text;

            &:hover {
                background-color: $color-black;
                color: $color-white;
                transform: scale(1.007);
                box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            }

            &-textbtn {
                cursor: pointer;
            }
        }
    }
}
</style>
