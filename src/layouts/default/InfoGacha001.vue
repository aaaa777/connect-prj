<template>
  <v-app>
    <!-- <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></v-parallax> -->
    <v-container>
    <v-app-bar color="primary" dark app>
      <!-- <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon> -->
      <v-toolbar-title>CNA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-on:click="goToInfo001">G001</v-btn>
      <v-btn v-on:click="goToList">Owned</v-btn>
      <div class=" w-25">
        <v-text-field class="" clearable label="search" variant="outlined" hide-details="auto"></v-text-field>
      </div>
      <!-- <v-divider vertical></v-divider> -->
      <!-- <v-btn v-on:click="goToLogin">login</v-btn> -->
    </v-app-bar>
    </v-container>

    <v-container
    >

    <v-container
    ></v-container>

    

    <v-container
      
    >
      <v-row
        width="auto"
      >
        <v-col
          width="auto"
          cols="12"
          sm="6"
        >
          <v-card
          class="mx-auto "
          fill-height
          variant="outlined"
          v-on:click="goToGacha001Cm"
          >
            <v-img
              
              aspect-ratio="4/3"
              cover
              src="@/assets/gachacm.png"
            ></v-img>
            <v-card-actions>
              普通ガチャ
              <v-spacer></v-spacer>
              <v-btn
                variant="outlined"
                
                >
                回す！
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          width="auto"
          cols="12"
          sm="6"
        >  
          <v-card
          class="mx-auto"
          fill-height
          variant="outlined"
          v-on:click="goToGacha001Ex"
          >
            <v-img
              
              aspect-ratio="4/3"
              cover
              src="@/assets/gachaex.png"
            ></v-img>
            <v-card-actions>
              高級ガチャ
              <v-spacer></v-spacer>
              <v-btn variant="outlined">
                回す！
              </v-btn>
            </v-card-actions>
          </v-card>
    
        </v-col>
      </v-row>
    </v-container>

  </v-container>
  </v-app>
  
</template>

<script>
export default {
  data(){
    return {
    }
  },
  methods: {
    goToGacha001Cm() {
      this.$router.push("/spin/gacha001/0")
    },
    goToGacha001Ex() {
      this.$router.push("/spin/gacha001/1")
    },
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

<style>
.bg {
   background-color: #486d46;            /* 背景色 */
   background-image: url("/src/assets/bg03.jpg"); /* 画像 */
   background-size: cover;               /* 全画面 */
   background-attachment: fixed;         /* 固定 */
   background-position: center center;   /* 縦横中央 */
}
</style>