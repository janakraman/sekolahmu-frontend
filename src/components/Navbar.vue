<template>
  <header>
      <img class="logo" src="../assets/sekolahmu_logo.svg" alt="sekolahmu" />
      <ul class="nav-links">
        <li><a href="#">Pilihan Jenjang <font-awesome-icon class="social-icon" :icon="['fas', 'caret-down']" /></a></li>
        <li>
          <form>
            <input type="text" placeholder = "Cari program belajar">
          </form>
        </li>
        <li><a href="#">Bantuan</a></li>
      </ul>
      <a class="masuk-daftar" href="#">Masuk | Daftar</a>
  </header>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    position: fixed;
    top: 0;
    width: 100%;
    background: white;
    z-index: 300;
  }

  li, a {
    text-decoration: none;
    list-style: none;
  }

  .nav-links {
    padding: 5px;
  }

  .nav-links li {
    padding: 0 20px;
    display: inline-block;
  }

  .nav-links li a {
    color: #828282;
    font-weight: bold;
  }

  .logo {
    cursor: pointer;
  }

  input {
    width: 30vw;
    padding: 5px 10px;
    border-radius: 10px;
    border-color: #828282;
  }

  input ::placeholder {
    color:#828282;
  }

  .masuk-daftar {
    background-color: #3498DA;
    padding: 4px 12px;
    border-radius: 20px 20px;
    color: white;
    font-weight: bold;
  }

  .masuk-daftar:hover {
    background-color: white;
    color: #3498DA;
    border-color: #3498DA;
    border-width: 5px;
  }

  @media (max-width: 900px){
    ul {
      display: none;
    }
  }

</style>
