<template>
  <v-app>
    
    <!-- <v-expand-x-transition appear>
      <v-navigation-drawer v-model="drawer" app clipped permanent>
      </v-navigation-drawer>
    </v-expand-x-transition> -->
    <v-container>
    <v-app-bar color="primary" dark app clipped-left>
      <!-- <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>CNA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-on:click="goToAbout">about</v-btn>
      <!-- <v-divider vertical></v-divider> -->
      <v-btn v-on:click="goToNews">news</v-btn>
      <div class=" w-25">
        <v-text-field class="" clearable label="search" variant="outlined" hide-details="auto"></v-text-field>
      </div>
      <!-- <v-divider vertical></v-divider> -->
      <!-- <v-btn v-on:click="goToLogin">login</v-btn> -->
      <v-btn v-on:click="goToInfo001">g001</v-btn>
      <v-btn v-on:click="goToList">owned</v-btn>
    </v-app-bar>
    </v-container>
    <v-container></v-container>
    <!-- <v-container class="" color="rgb(255, 0, 0, 0.2)">
    <v-row no-gutters>
      <v-col
        v-for="n in 3"
        :key="n"
        cols="12"
        sm="4"
      >
        <v-sheet class="ma-2 pa-2">
          One of three columns
        </v-sheet>
      </v-col>
    </v-row>
    </v-container> -->

  <v-carousel
    cycle
    height="auto"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
    <v-img
      
      aspect-ratio="16/9"
      cover
      src="@/assets/gacha001ba.png"
    ></v-img>
      <!-- <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
  <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->
  <v-container
    
  >
  <v-card-title>お知らせ</v-card-title>
    <v-card
    class="mx-auto"
    >
    <v-list
    :items="items"
    item-title="name"
    item-value="id"
    class="w-100"
    ></v-list>
    </v-card>
  </v-container>
  <v-carousel
    cycle
    height="auto"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
    <v-img
      
      aspect-ratio="16/9"
      cover
      src="@/assets/gacha002ba.png"
    ></v-img>
      <!-- <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet> -->
    </v-carousel-item>
  </v-carousel>
  
  <!-- <v-container>
    <v-card
      max-width="400"
      class="mx-auto my-auto"
      hover
      variant="tonal"
    >
    <v-img
  class="w-100"
  aspect-ratio="4/3"
  cover
  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
></v-img>
    <v-card-title>My Carousel</v-card-title>
    <v-card-subtitle class="font-italic font-weight-black">John</v-card-subtitle>
    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
  </v-card>
  </v-container> -->
  <v-container>

  </v-container>
  <v-footer class="bg-grey-lighten-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data(){
    return {
        drawer: null,
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        items: [
          {
            name: '【お詫び】2/21までの当サイトのアクセス障害について',
            id: 1,
          },
          {
            name: '新カードパック実装！うる星やつらを追加しました（非公式）',
            id: 2,
          },
          {
            name: '【お知らせ】サーバーメンテナンスを実施します。2/31 12:00 ~',
            id: 3,
          },
        ],
        links: [
          'Home',
          'About Us',
          'Team',
          'Services',
          'Blog',
          'Contact Us',
        ],
      }
    }
  ,
  methods: {
    goToNews() {
      this.$router.push("/news")
    },
    goToAbout() {
      this.$router.push("/about")
    },
    goToHome() {
      this.$router.push("/home")
    },
    goToLogin() {
      this.$router.push("/login")
    },
    goToInfo001() {
      this.$router.push("/info/gacha001")
    },
    goToList() {
      this.$router.push("/list")
    },
  }
}
</script>