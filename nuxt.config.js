export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-test",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['view-design/dist/styles/iview.css'],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~plugins/element-ui.js" },
    { src: "~plugins/antdv.js" },
    "@/plugins/view-ui",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "nuxt-precompress",
    "@nuxtjs/axios",
    "@nuxt/image",
  ],

  axios: {
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true;
    },
    baseURL: "https://bombadmin.pythonanywhere.com",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    bootstrapVue: {
      icons: false,
    },
  },
  nuxtPrecompress: {
    enabled: true, // Enable in production
    report: false, // set true to turn one console messages during module init
    test: /\.(js|css|html|txt|xml|svg|png)$/, // files to compress on build
    // Serving options
    middleware: {
      // You can disable middleware if you serve static files using nginx...
      enabled: true,
      // Enable if you have .gz or .br files in /static/ folder
      enabledStatic: true,
      // Priority of content-encodings, first matched with request Accept-Encoding will me served
      encodingsPriority: ["br", "gzip"],
    },

    // build time compression settings
    gzip: {
      // should compress to gzip?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: "[path].gz[query]", // middleware will look for this filename
      threshold: 10240,
      minRatio: 0.8,
      compressionOptions: { level: 9 },
    },
    brotli: {
      // should compress to brotli?
      enabled: true,
      // compression config
      // https://www.npmjs.com/package/compression-webpack-plugin
      filename: "[path].br[query]", // middleware will look for this filename
      compressionOptions: { level: 11 },
      threshold: 10240,
      minRatio: 0.8,
    },
  },
};
