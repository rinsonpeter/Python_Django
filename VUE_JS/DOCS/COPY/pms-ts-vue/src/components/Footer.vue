<template>
  <v-footer padless fixed dark height="50" color="black darken-3">
    <v-col class="text-center m-b-3" cols="12">
      {{ new Date().getFullYear() }} — <strong>© RinzCorp. All Rights Reserved.</strong>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {

}
</script>