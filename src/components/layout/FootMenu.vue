<template>
  <div class="service-menu">
    <ul>
      <li
        v-for="item in serviceMenu"
        :key="item.menu"
        :class="{ 'is-active': $route.path == item.path }"
      >
        <router-link :to="item.path">
          <i :class="item.icon" />
          <span>{{ item.menu }}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'FootMenu',
  data() {
    return {
      serviceMenu: [
        {
          menu: 'Home',
          path: '/dashboard',
          icon: 'icon-home',
        },
        {
          menu: '준비',
          path: '/delivery',
          icon: 'icon-start',
        },
        {
          menu: '처리',
          path: '/delivery-processing',
          icon: 'icon-complet',
        },
        {
          menu: '실적',
          path: '/',
          icon: 'icon-search',
        },
        {
          menu: '이력',
          path: '/',
          icon: 'icon-history',
        },
      ],
    };
  },
};
</script>
