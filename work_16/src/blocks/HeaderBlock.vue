<template>
    <div>
        <header class="w1200">
            <div class="logo">
                <img src="@/assets/logo.png" alt="logo">
                Interno
            </div>

            <nav>
                <div class="menu">
                    <router-link to="/">Home</router-link>
                    <router-link to="/project">Project</router-link>
                    <router-link to="/blog">Blog</router-link>
                    <!-- <a href="#">Home</a>
                    <a href="#">Project</a>
                    <a href="#">Blog</a> -->
                </div>
            </nav>
        </header>
        <!-- <router-view/> -->
    </div>
</template>

<script>
export default {
  name: 'HeaderBlock'
}
</script>

<style lang="css" scoped>

</style>
