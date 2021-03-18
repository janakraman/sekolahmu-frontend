<template>
  <div @mouseover="onHover" @mouseleave="onLeave">
    <img :src="program.avatar" :alt="program.slug" style="width:100%">
    <div class="container" v-if="!flip">
      <p class="card-category">{{program.category_name}}</p>
      <h4><b>{{program.name}}</b></h4>
      <div>
      <star-rating v-model="rating" :star-size="15" :read-only="true" :show-rating="false" :inline="true"/>
      <span class="program-rating">{{program.rating}} ({{program.reviewers}})</span>
      </div>
      <div>
        <span class="program-price">{{new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(program.price)}}</span>
        <span class="program-ori-price">{{new Intl.NumberFormat('id-ID', {style: 'currency', currency: 'IDR'}).format(program.price_normal)}}</span>
      </div>
    </div>
    <div class="container" v-if="flip">
      <p class="card-description">{{program.abstract}}</p>
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
      flip: false
    }
  },
  computed: {
    rating () {
      return Number(this.program.rating)
    }
  },
  methods: {
    onHover () {
      this.flip = true
    },
    onLeave () {
      this.flip = false
    }
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
    box-shadow: 0 8px 20px 0 rgba(0,0,0,0.2);
  }

  .card-category {
    background-color: rgb(239, 149, 18, 0.9);
    color: white;
    display: inline;
    line-height: 35px;
    padding: 5px;
    font-size: 12px;
    border-radius: 5px 0px;
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
    font-size: 12px;
    color: #2326B3;
  }

  .program-ori-price {
    margin-left: 0.6em;
    font-size: 12px;
    color: #BDBDBD;
    text-decoration: line-through;
  }

  .card-description {
    padding-top: 0.5em;
    font-size: 14px;
  }

</style>
