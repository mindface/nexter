<script setup lang="ts">
import { useRoute } from "#app";
import { ref } from "vue";

const route = useRoute();
const id = ref(route.params.id);
</script>

<template>
  <div class="wrapper">id {{ id }}</div>
</template>
