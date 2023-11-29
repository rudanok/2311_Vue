<template>
    <div>
        <footer class="w1200">
            <!-- Часть 1 -->
            <div class="footer-1">
                <!-- Логотип футера -->
                <div class="logo">
                    <img src="@/assets/logo.png">
                    Interno
                </div>
                <p>
                    It is a long established fact that a reader <br>
                    will be distracted lookings.
                </p>

                <!-- Иконки -->
                <div class="footer-icons">
                    <img src="@/assets/twitter.jpg" class="footer-icon-first">
                    <img src="@/assets/in.jpg" class="footer-icon">
                </div>
            </div>

            <!-- Вторая часть футера - меню -->
            <nav class="footer-2">
                <b>Pages</b>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Project</a>
                    </li>
                    <li>
                        <a href="#">Blog</a>
                    </li>
                </ul>
            </nav>

            <!-- Третья часть футера -->
            <div class="footer-3">
                <b>Contact</b>
                <p class="small-lh">
                    55 East Birchwood Ave. <br>
                    Brooklyn, New York 11201
                </p>
                <p>contact@interno.com</p>
                <p>(123) 456 - 7890</p>
            </div>
        </footer>
    </div>
</template>

<script>
export default {
  name: 'FooterBlock'
}
</script>

<style lang="css" scoped>

</style>
