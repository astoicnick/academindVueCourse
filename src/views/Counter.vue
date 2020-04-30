<template>
    <div style="text-align: center;">
    <h4>{{ count }}</h4>
        <button v-on:click="Increment">Increment</button>
        <button v-on:click="Decrement">Decrement</button>
    </div>

</template>

<script lang="ts">
    export default {
        name: "Counter",
        data: function() {
            return {
                count: 0
            }
        },
        methods: {
            Increment: function () {
                // this.count += 1;
            },
            Decrement : function () {
                // this.count -= 1;
            }
        }
    }
</script>

<style scoped>

</style>