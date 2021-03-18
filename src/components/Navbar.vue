<template>
  <nav>
      <img class="logo" src="../assets/sekolahmu_logo.svg" alt="sekolahmu" />
      <ul class="nav_links">
        <li><a href="#">Home</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  nav {
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
  }
</style>
