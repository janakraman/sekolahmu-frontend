<template>
  <div class="home">
    <Header />
    <header>
      <h1>Hai, mau belajar apa hari ini?</h1>
    </header>
    <div class="program-unggulan">
      <h2>Program Unggulan</h2>
      <h3>Temukan program-program menarik Sekolahmu!</h3>
    </div>
    <!-- <router-view></router-view> -->
    <div class="cards">
      <Card v-for="program in programs" :program="program" :key="program.id" class="card"/>
    </div>
    <div class="pagination-container">
      <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" @click="changePage(1)" :class="{active: currentPage === 1}">1</a>
        <a href="#" @click="changePage(2)" :class="{active: currentPage === 2}">2</a>
        <a href="#" :class="{active: currentPage === 3}">3</a>
        <a href="#" :class="{active: currentPage === 4}">4</a>
        <a href="#" :class="{active: currentPage === 5}">5</a>
        <a href="#" :class="{active: currentPage === 6}">6</a>
        <a href="#">&raquo;</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './Header'
import Card from './Card'
export default {
  name: 'Body',
  components: {
    Card, Header
  },
  data () {
    return {
      programs: [],
      currentPage: 1
    }
  },
  created () {
    axios({
      url: `https://api.dev.sekolah.mu/se-test/program?page=${this.currentPage}`,
      method: 'GET',
      headers: {
        Authorization: 'secret_auth_token!!$$'
      }
    }).then(response => {
      this.programs = response.data.data.data
    }).catch(error => {
      console.log(error.response)
    })
  },
  methods: {
    changePage (number) {
      this.currentPage = number
      axios({
        url: `https://api.dev.sekolah.mu/se-test/program?page=${number}`,
        method: 'GET',
        headers: {
          Authorization: 'secret_auth_token!!$$'
        }
      }).then(response => {
        this.programs = response.data.data.data
      }).catch(error => {
        console.log(error.response)
      })
    }
  }
}
</script>

<style scoped>
  .home {
    padding: 6em 12vw;
    min-height: 1vh;
  }

  header {
    margin-top: 24px;
    padding: 2em;
    background-color: #F0FBFE;
    border-radius: 10px;
  }

  h1 {
    font-size: 24px;
    text-align: center;
  }

  h2 {
    font-size: 20px;
  }

  h3 {
    font-size: 15px;
    font-weight: 500;
    color: #828282;
  }

  .program-unggulan {
    margin: 2em 0;
  }

  .cards {
    display: grid;
    grid-gap: 40px;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }

  .pagination-container {
    margin: 50px 0;
    /* background-color: red; */
    display: flex;
    justify-content: center;
  }

  .pagination {
  display: inline-block;
  margin: auto;
}

.pagination a {
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

.pagination a.active {
  background-color: rgb(239, 149, 18);
  color: white;
  border-radius: 5px;
}

.pagination a:hover:not(.active) {
  background-color: #ddd;
  border-radius: 5px;
}

</style>
