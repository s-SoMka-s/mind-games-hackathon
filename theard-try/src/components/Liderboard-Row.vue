<template>
    <div class="liderboard-row">
        <div class="liderboard-row__item">{{ user.id }}</div>
        <div class="liderboard-row__item">{{ user.name }}</div>
        <div class="liderboard-row__item">{{ user.score }}</div>
        <div class="liderboard-row__item">Game_1</div>
        <div class="liderboard-row__item">Game_2</div>
    </div>
</template>
<script>
export default {
    name: 'Liderboard-Row',
    props: ['user'],
}
</script>
<style lang="scss">
.liderboard-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
