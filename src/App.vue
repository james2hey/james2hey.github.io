<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<style lang="css">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1 {
        font-weight: normal;
        font-family: Helvetica;
        text-align: center;
    }

    h2 {
        font-weight: normal;
    }

    h5 {
        color: grey;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    card {
        border-color: transparent
    }

    li {
        display: inline-block;
        margin: 0 10px;
        color: black;
    }

    a {
        color: dodgerblue;
    }

    nav {
        background-color: transparent;
    }

    form {
        margin-left: auto;
        margin-right: auto;
    }
</style>