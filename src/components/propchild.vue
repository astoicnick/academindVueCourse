<template>
    <div>

    <h1 style="text-align: center;"> {{ parentName }}</h1>
   <button type="button" @click="changeNameToBen">Change Name to Ben</button>
    </div>

</template>

<script>
    import {eventBus} from "@/main";

    export default {
        name: "propchild",
        props: {
            parentName: String
        },
        methods: {
            changeNameToBen: function() {
                this.parentName = "Ben";
                eventBus.changeName(this.parentName);
            }
        }
    }
</script>

<style scoped>

</style>