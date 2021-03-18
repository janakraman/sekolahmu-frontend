<template>
  <div class="home">
    <header>
      <h1>Hai, mau belajar apa hari ini?</h1>
    </header>
    <div class="program-unggulan">
      <h2>Program Unggulan</h2>
      <h3>Temukan program-program menarik Sekolahmu!</h3>
    </div>
    <div class="cards">
      <Card v-for="program in programs" :program="program" :key="program.id" class="card"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Card from '../components/Card'

export default {
  name: 'Home',
  components: {
    Card
  },
  data () {
    return {
      programs: []
    }
  },
  created () {
    axios({
      url: 'https://api.dev.sekolah.mu/se-test/program?page=1',
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
</script>

<style scoped>
  .home {
    padding: 6em 12vw;
    min-height: 1vh;
  }

  header {
    padding: 2em;
    background-color: #F0FBFE;
    border-radius: 10px;
  }

  h1 {
    font-size: 24px;
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
    grid-gap: 20px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    /* grid-template-columns: repeat(5, 1fr); */
  }

</style>
