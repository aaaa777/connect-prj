<template>
    <v-app id="inspire">
    <v-app-bar color="primary" dark app>
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
  
      <v-navigation-drawer
        v-model="drawer"
        temporary
      >
        <!--  -->
      </v-navigation-drawer>
  
      <v-main class="bg-grey-lighten-2">
        <v-container>
          <v-row>
            <template v-for="n in 4" :key="n">
              <v-col
                class="mt-2"
                cols="12"
              >
                <strong>Category {{ n }}</strong>
              </v-col>
  
              <v-col
                v-for="j in 6"
                :key="`${n}${j}`"
                cols="6"
                md="2"
              >
                <v-sheet height="150"></v-sheet>
              </v-col>
            </template>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </template>
  
  <script>
    export default {
      data: () => ({ drawer: null }),
    }
  </script>