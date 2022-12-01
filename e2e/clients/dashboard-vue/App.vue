<template>
  <dashboard :uppy="uppy" />
</template>

<script>
import Vue from "vue";
import Uppy from "@growthcloud/core";
import { Dashboard } from "@growthcloud/vue";

export default {
  name: "App",
  components: {
    Dashboard,
  },
  computed: {
    uppy: () => new Uppy(),
  },
};
</script>

<style src="@growthcloud/core/dist/style.css"></style>
<style src="@growthcloud/dashboard/dist/style.css"></style>
