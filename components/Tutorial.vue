<!-- Please remove this file from your project -->
<template>
  <div
    class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0"
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">Welcome to your Nuxt Application</h2>
        <nuxt-img format="webp" src="/image24.png" alt="" />
        <!-- <img format="webp" src="/image24.png" alt="" /> -->
        <nuxt-img format="webp" src="/MATE NEWS.png" alt="" />
        <Button @click="success(false)">Success</Button>
        <p class="mt-3 text-gray-600">
          We recommend you take a look at the
          <a
            href="https://nuxtjs.org"
            target="_blank"
            class="button--doc text-green-500 hover:underline"
            >Nuxt Documentation</a
          >, whether you are new or have previous experience with the framework.<br />
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          To get started, remove
          <code class="bg-gray-100 text-sm p-1 rounded border"
            >components/Tutorial.vue</code
          >
          and start coding in
          <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>.
          Have fun!
        </p>
      </div>
      <div class="flex justify-center pt-4 space-x-2"></div>
    </div>
    <div class="row">
      <div class="col-6">
        <el-button>Default</el-button>
      </div>
      <div class="col-6">
        <el-button type="primary">Primary</el-button>
      </div>
    </div>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <a-button type="primary"> Primary tutorial </a-button>
    <el-button plain @click="open1"> Success </el-button>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
  data() {
    return {
      data: {},
      categories: {},
    };
  },
  methods: {
    async fetchData() {
      let [res, res1] = await Promise.all([
        this.$axios.$get("https://test.loftcity.uz/api/admin/attributes"),
        this.$axios.$get("https://test.loftcity.uz/api/admin/attributes"),
        // https://test.loftcity.uz/api/admin/categories
      ]);
      // check your response and whatever you want with those response
      console.log(res.attributes);
      console.log(res1);
      this.data = await res.attributes;
      this.categories = await res;
    },
    success(nodesc) {
      this.$Notice.success({
        title: "Notification title",
        desc: nodesc
          ? ""
          : "Here is the notification description. Here is the notification description. ",
      });
    },
    open1() {
      this.$notify({
        title: "Success",
        message: "This is a success message",
        type: "success",
      });
    },
  },
  async fetch() {
    console.log(1);
    await this.fetchData();
    console.log(2);
  },

  // fetch() {
  //   this.__GET_DATA();
  // },
};
</script>
