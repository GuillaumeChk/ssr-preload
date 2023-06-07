<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2">
        Oops. Nothing here...
        <q-img
          src="~assets/images/Le_Jura_en_hiver_(4).jpg"
          style="width: 200px; height: 200px"
        >
        </q-img>
        <q-img
          loading="lazy"
          src="~assets/images/Le_Jura_en_hiver_(6).jpg"
          style="width: 200px; height: 200px"
        >
        </q-img>
      </div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ErrorNotFound",
});
</script>
