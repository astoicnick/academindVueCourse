<template>
    <div>
    <input v-model="name" />
    <propchild :parentName="name" />
    </div>
</template>

<script>
    import propchild from '@/components/propchild.vue';
    import {eventBus} from "@/main";

    export default {
        name: "propexample",
        data: function () {
            return {
                name: "Nick"
            }
        },
        components: {
            propchild
        },
        created() {
            eventBus.$on('nameChange', (updatedName) => {
                this.name = updatedName;
            });
        }
    }
</script>

<style scoped>

</style>