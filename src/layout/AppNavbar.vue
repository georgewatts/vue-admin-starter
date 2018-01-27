<template>
  <section class="hero is-bold app-navbar animated" :class="{ slideInDown: show, slideOutDown: !show }">
    <div class="hero-head">
      <nav class="nav">
        <div class="nav-left">
          <a class="nav-item is-hidden-tablet" @click="toggleSidebar()">
            <i class="fa fa-bars fa-fw" aria-hidden="true"></i>
          </a>
        </div>
        <div class="nav-center">
            <strong class="nav-item">{{ customerName }}'s Dashboard</strong>
        </div>
        <div class="nav-right">
          &nbsp;
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    show: Boolean
  },
  data () {
    return {
      customerName: this.$store.state.cust.name
    }
  },
  methods: {
    toggleSidebar () {
      this.$store.commit('toggleSidebar')
    }
  },
  computed: {
    showMenuBars: function () {
      return !this.$store.state.sidebarShow
    }
  }
}
</script>

<style scoped lang="scss">
@import '~bulma/sass/utilities/initial-variables';

.app-navbar {
  background-color: #fff;
  position: fixed;
  min-width: 100%;
  z-index: 1024;
  box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1), 0 0 0 1px rgba(17, 17, 17, 0.1);

  .container {
    margin: auto 10px;
  }

  .nav {
    -ms-flex-align: stretch;
    align-items: stretch;
    display: -ms-flexbox;
    display: flex;
    // min-height: 3.5rem;
  }

  .nav-right {
    align-items: stretch;
    flex: 1;
    justify-content: flex-end;
    overflow: hidden;
    overflow-x: auto;
    white-space: nowrap;
  }
}

.nav-left {
  -ms-flex-pack: start;
  justify-content: flex-start;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap
}

.nav-left, .nav-right {
  -ms-flex-align: stretch;
  align-items: stretch;
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  -ms-flex-negative: 0;
  flex-shrink: 0;
}

.nav-item {
  -ms-flex-align: center;
  align-items: center;
}

a.nav-item {
  -ms-flex-negative: 0;
  flex-shrink: 0;
  height: 100%;
}

.nav-item {
  -ms-flex-pack: start;
  justify-content: flex-start;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-positive: 0;
  flex-grow: 0;
  font-size: 1rem;
  // -ms-flex-pack: center;
  // justify-content: center;
  padding: .75rem .75rem;
}

.nav {
  min-height: 49px;
}

.hero-brand {
  .vue {
    margin-left: 10px;
    color: #36AC70;
  }
  .admin {
    color: #28374B;
  }
}
</style>
