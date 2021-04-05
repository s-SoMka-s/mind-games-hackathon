<template>
    <div class="gameboard" id="gameboard">
        <div
            class="gameboard__row"
            v-for="row in rows"
            :key="row"
            v-bind:id="row"
        >
            <div
                class="gameboard__cell"
                v-for="column in columns"
                :key="column"
                v-bind:id="'(' + row + ',' + column + ')'"
            ></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Gameboard',
    props: {
        rows: Number,
        columns: Number,
        board: Array(Array),
    },
    methods: {
        computeHorizontalGap: function(imgSize) {
            const gameboardWidth = document.getElementById('gameboard')
                .offsetWidth

            console.log('gameboard width:', gameboardWidth)

            return gameboardWidth / this.columns + imgSize
        },
        computeVerticalGap: function(imgSize) {
            const gameboardHeight = document.getElementById('gameboard')
                .offsetHeight
            console.log('gameboard height:', gameboardHeight)

            return gameboardHeight / this.rows + imgSize
        },
    },

    mounted: function() {
        const black =
            'data:image/png;base64,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'

        document.getElementById(this.rows).style.display = 'none'
        const imgSize = 20

        for (var row = 0; row < this.rows; row++) {
            for (var col = 0; col < this.columns; col++) {
                const cell = document.getElementById(`(${row + 1},${col + 1})`)
                if (col + 1 === this.columns) {
                    cell.style.display = 'none'
                    continue
                }
            }
        }
    },
}
</script>
<style lang="scss">
$color-red: #e03e3b;
$color-black: #3c3c3a;
$color-white: #ffffff;
$color-yellow: #fbc467;

.gameboard {
    padding: 10px;
    width: 100%;
    height: 340px;
    background-color: $color-yellow;
    display: grid;
    grid-auto-flow: row;
    &__row {
        display: grid;
        grid-auto-flow: column;
    }

    &__cell {
        border: 1px solid $color-black;
    }

    &__stone {
        background-image: url('../assets/black.png');
        max-width: 10px;
    }
}
</style>
