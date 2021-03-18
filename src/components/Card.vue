<template>
  <div>
    <img :src="program.avatar" alt="Program" style="width:100%">
    <div class="container">
      <p class="card-category">{{program.category_name}}</p>
      <h4><b>{{program.name}}</b></h4>
      <div>
      <star-rating v-model="program.rating" :star-size="15" :read-only="true" :show-rating="false" :inline="true"/>
      <span class="program-rating">{{program.rating}} ({{program.reviewers}})</span>
      </div>
      <div>
        <span class="program-price">{{new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(program.price)}}</span>
        <span class="program-ori-price">{{new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(program.price_normal)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'Card',
  props: ['program'],
  components: {
    StarRating
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<style>
.card {
    /* Add shadows to create the "card" effect */
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    min-width: 200px;
    position: relative;
    border-radius: 10px;
    overflow: hidden;
    padding-bottom: 15px;
    cursor: pointer;
  }

  /* On mouse-over, add a deeper shadow */
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }

  .card-category {
    background-color: rgb(239, 149, 18, 0.9);
    display: inline;
    /* left: 70%;
    bottom: 85%;
    position: absolute; */
    line-height: 35px;
    padding:5px;
    font-size: 12px;
    border-radius: 5px;
    font-weight: bold;
  }

  /* Add some padding inside the card container */
  .container {
    padding: 2px 16px;
  }

  .program-rating {
    margin-left: 0.5em;
    font-size: 14px;
    color: #BDBDBD;
  }

  .program-price {
    font-size: 14px;
    color: #2326B3;
  }

  .program-ori-price {
    margin-left: 0.6em;
    font-size: 14px;
    color: #BDBDBD;
    text-decoration: line-through;
  }

</style>
