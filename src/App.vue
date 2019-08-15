<template>
  <div id="app">
    <v-app id="inspire">
      <v-app-bar absolute color="deep-purple accent-4" dark>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>Collapsing Bar</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-app-bar>
      <v-sheet id="scrolling-techniques-6" class="overflow-y-auto" max-height="600">
        <v-container style="height: 1000px;"></v-container>
      </v-sheet>

      <v-card>
        <test></test>
      </v-card>
    </v-app>
  </div>
</template>

<script>
import Test from "./Test";
export default {
  name: "App",
  components: {
    Test
  }
};
</script>
