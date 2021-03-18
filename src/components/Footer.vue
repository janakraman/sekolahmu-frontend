<template>
  <footer class="footer">
    <div class="footer-left">
      <img src="../assets/sekolahmu_logo.svg" alt="sekolahmu">
      <p>Sekolah.mu menghadirkan program-program pilihan untuk murid, supaya murid bisa memilih program sesuai dengan fokus dan impian yang ingin diraih.</p>
      <div class="socials">
        <a href="#"><font-awesome-icon class="social-icon" :icon="['fab', 'facebook']" ></font-awesome-icon></a>
        <a href="#"><font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" ></font-awesome-icon></a>
        <a href="#"><font-awesome-icon class="social-icon" :icon="['fab', 'youtube']" ></font-awesome-icon></a>
        <a href="#"><font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" ></font-awesome-icon></a>
        <a href="#"><font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']" ></font-awesome-icon></a>
      </div>
    </div>

    <ul class="footer-right">
      <li>
        <h2>Tentang Prakerja</h2>
        <ul class="box">
          <li><a href="#">Mitra Kolaborasi</a></li>
          <li><a href="#">Panduan Prakerja</a></li>
        </ul>
      </li>
      <li class="features">
        <h2>Tentang Kami</h2>
        <ul class="box">
          <li><a href="#">Tentang Sekolah.mu</a></li>
          <li><a href="#">Dewan Sekolah.mu</a></li>
        </ul>
      </li>
      <li>
        <h2>Lainnya</h2>
        <ul class="box">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Bantuan</a></li>
          <li><a href="#">Syarat Ketentuan</a></li>
          <li><a href="#">Kebijakan Privasi</a></li>
        </ul>
      </li>
    </ul>

    <div class="footer-bottom">
      <p>Created by Jan</p>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
* {
  /* display: grid; */
  margin: 0;
  font-size: 14px;
}

footer {
  display: flex;
  flex-flow: row wrap;
  padding: 50px;
  color: #2b2b2b;
  background-color: #dbdbdb;
}

.footer > * {
  flex: 1 100%;
}

.footer-left {
  margin: 0 1.25em 2em 0;
}
.footer-left img {
  width: 50%;
}

h2 {
  font-weight: bold;
  font-size: 17px;
  line-height: 2em;
}

.footer ul {
  list-style: none;
  padding-left: 0;
}

.footer li {
  line-height: 1em;
}

.footer a {
  text-decoration: none;
}

.footer-right {
  display: flex;
  flex-flow: row wrap;
}

.footer-right > * {
  flex: 1 50%;
  margin-right: 1.25em;
}

.box a {
  color: #2b2b2b;
  line-height: 2em;
}

.footer-bottom {
  text-align: center;
  color: #2b2b2b;
  /* padding-top: 20px; */
}

.footer-left p {
  padding-right: 20%;
  color: #2b2b2b;
}

.socials a {
  /* background: #364a62; */
  width: 40px;
  height: 40px;
  display: flex;
  display: inline-block;
  margin: 10px;
}

.social-icon {
  color: rgb(239, 149, 18);
  padding: 10px 12px;
  font-size: 20px;
}

@media screen and (min-width: 600px){
  .footer-right > * {
    flex: 1;
  }
  .footer-left{
    flex: 1 0px;
  }
  .footer-right{
    flex: 2 0px;
  }
}

@media (max-width: 600px){
  .foonter {
    padding: 15px;
  }
}
</style>
