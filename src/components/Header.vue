<template>
  <div id="slider">
    <figure>
      <img src="../assets/1.png" alt="slider 1">
      <img src="../assets/2.png" alt="slider 2">
      <img src="../assets/3.jpg" alt="slider 3">
    </figure>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
  #slider {
    overflow: hidden;
    border-radius: 50px 0px;
  }

  #slider figure {
    position: relative;
    width: 300%;
    margin: 0;
    left: 0;
    animation: 20s slider infinite;
  }

  #slider figure img {
    width: 33.333%;
    float: left;
  }

  @keyframes slider {
    0% {
      left: 0;
    }
    30% {
      left: 0;
    }
    35% {
      left: -100%;
    }
    65% {
      left: -100%;
    }
    70% {
      left: -200%;
    }
    95% {
      left: -200%;
    }
  }

</style>
