<template>
    <div class="about-teams">
        <h5 v-text="heading" :style="headingStyle"></h5>

        <ol v-if="lists.length" :style="arrayStyle">
            <li v-for="list in lists" :key="list.id" v-text="list"></li>
        </ol>
    </div>
</template>

<script>
    export default {
        props: ['lists', 'heading', 'headingStyle', 'arrayStyle']
    }
</script>

<style lang="scss" scoped>
    h5 {
        font-size: 24px;
        line-height: 34px;
    }

    ol {
        padding-left: 25px;

        li {
            font-size: 24px;
            line-height: 34px;
        }
    }
</style>