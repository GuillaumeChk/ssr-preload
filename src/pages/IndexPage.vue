<template>
  <q-page class="flex flex-center">
    <!-- <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    /> -->

    <q-img
      src="~assets/images/Jura_neige_pâture.jpg"
      style="width: 200px; height: 200px"
    >
    </q-img>
    <q-img
      loading="lazy"
      src="~assets/images/Jura_en_hiver.jpg"
      style="width: 200px; height: 200px"
    >
    </q-img>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
