<!-- app.vue -->
<template>
    <div id="app">
        hello world
        <form action="demo-form.php">
            <input type="text" name="fname" placeholder="First name"><br>
            <input type="text" name="lname" placeholder="Last name"><br>
            <input type="submit" value="提交">
        </form>

    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style >
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
        transform: rotate(0deg);
        border-radius: 25px;
        background: #8AC007;
    }


    ::placeholder {
        color: red;
    }
    .image {
        background-image: url(584_201809039473584.png);
    }
    @media (min-resolution: 2dppx) {
        .image {
            background-image: url(584_201809039473584.png);
        }
    }
</style>

