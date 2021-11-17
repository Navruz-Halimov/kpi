<template>
    <div>
        <login />
    </div>
</template>

<script>
    export default {
        components:{
              login: () => import("@/components/auth/login.vue"),
        }
    }
</script>

<style lang="scss" scoped>

</style>