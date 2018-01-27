<template>
  <div id="app">
    <!-- set progressbar -->
    <vue-progress-bar></vue-progress-bar>
    <app-nav :show="true"></app-nav>
    <app-sidebar :show="sidebar"></app-sidebar>
    <app-main></app-main>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppMain from './layout/AppMain'
import AppNav from './layout/AppNavbar'
import AppSidebar from './layout/AppSidebar'
import AppFooter from './layout/AppFooter'

export default {
  name: 'App',
  components: {
    AppNav,
    AppMain,
    AppSidebar,
    AppFooter
  },
  computed: {
    sidebar () {
      return this.$store.state.sidebarShow
    }
  },
  beforeMount () {
    const { body } = document
    const WIDTH = 768
    const RATIO = 3

    const handler = () => {
      if (!document.hidden) {
        let rect = body.getBoundingClientRect()
        let isMobile = rect.width - RATIO < WIDTH
        this.$store.commit('showSidebar', !isMobile)
      }
    }
    document.addEventListener('visibilitychange', handler)
    window.addEventListener('DOMContentLoaded', handler)
    window.addEventListener('resize', handler)
  },
  mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar
    this.$Progress.start()
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        let meta = to.meta.progress
        // parse meta tags
        this.$Progress.parseMeta(meta)
      }
      //  start the progress bar
      this.$Progress.start()
      //  continue to next page
      next()
    })
    //  hook the progress bar to finish after we've finished moving router-view
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish()
    })
  }
}
</script>

<style lang="scss">
@import '~animate.css';
@import '~bulma';
@import '~wysiwyg.css/wysiwyg.sass';

$fa-font-path: '~font-awesome/fonts/';
@import '~font-awesome/scss/font-awesome';

html {
  background-color: whitesmoke;
}

.animated {
  animation-duration: .377s;
}

//#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
//}

// .nprogress-container {
//   // margin-top: none !important;
//   position: fixed !important;
//   width: 100%;
//   height: 50px;
//   z-index: 2048;
//   pointer-events: none;

//   #nprogress {
//     $color: #e74863;

//     .bar {
//       background: $color;
//     }
//     .peg {
//       box-shadow: 0 0 10px $color, 0 0 5px $color;
//     }

//     .spinner-icon {
//       border-top-color: $color;
//       border-left-color: $color;
//     }
//   }
// }
</style>
