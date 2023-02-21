<template>
  <v-app>
    <v-app-bar color="primary" dark app >
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
      <v-btn v-on:click="goToLogin">login</v-btn>
    </v-app-bar>
    <v-container
      class="tm-6"
    >
      <v-row>
        <v-col>


          <v-card
          class="mx-auto "
          variant="outlined"
          >
            <v-img
              
              aspect-ratio="16/9"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
            <v-card-actions>
              <v-btn variant="outlined">
                回す！
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col>  
          <v-card
          class="mx-auto w-75"
          variant="outlined"
          >
            <v-img
              
              aspect-ratio="16/9"
              cover
              src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            ></v-img>
            <v-card-actions>
              <v-btn variant="outlined">
                回す！
              </v-btn>
            </v-card-actions>
          </v-card>
    
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
</script>