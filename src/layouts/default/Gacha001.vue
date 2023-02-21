<template>
  <v-app>
    <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->
    <v-expand-x-transition appear>
      <v-navigation-drawer v-model="drawer" app clipped permanent>
        
      </v-navigation-drawer>
    </v-expand-x-transition>
    <v-app-bar color="primary" dark app clipped-left>
      <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CNA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn >about</v-btn>
      <!-- <v-divider vertical></v-divider> -->
      <v-btn v-on:click="goToNews">news</v-btn>
      <div class=" w-25">
        <v-text-field class="" clearable label="search" variant="outlined" hide-details="auto"></v-text-field>
      </div>
      <!-- <v-divider vertical></v-divider> -->
      <v-btn>login</v-btn>
    </v-app-bar>
    <v-container class="" color="rgb(255, 0, 0, 0.2)">
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
  </v-container>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        :color="colors[i]"
        height="100%"
      >
        <div class="d-flex fill-height justify-center align-center">
          <div class="text-h2">
            {{ slide }} Slide
          </div>
        </div>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
  <v-app-bar
      app
      color="primary"
      dark
    >
    <v-card
      max-width="400"
      class="mx-auto my-auto"
      hover
    >
    <v-img
  :width="325"
  aspect-ratio="4/3"
  cover
  src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
></v-img>
    <v-card-title>My Carousel</v-card-title>
    <v-card-subtitle class="font-italic font-weight-black">John</v-card-subtitle>
    <v-card-text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</v-card-text>
  </v-card>
</v-app-bar>
    <!-- <v-footer color="primary" dark app>
      Vuetify
    </v-footer> -->
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
  }
}
</script>