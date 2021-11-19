<template>
  <v-card :loading="loading" class="mx-auto my-12" max-width="374">
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>



    <v-card-title>Project NightFall</v-card-title>

    <v-card-text>
      <div>📅 Start Date:12/10/1992|  3 months</div>
    </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>Highlights</v-card-title>

    <v-card-text>
      <v-chip-group
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
      >
        <v-chip>✓ Budget:600 Pounds</v-chip>

        <v-chip>✓ Client: Exxon Mobil </v-chip>

        <v-chip>✓ Type: Web App</v-chip>
      </v-chip-group>
    </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2"  text @click="reserve">
        Info
      </v-btn>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Edit 
      </v-btn>
    </v-card-actions>
  </v-card>
</template>