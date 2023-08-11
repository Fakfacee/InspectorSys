<template>
  <el-tag
    v-for="visitedRoute in routeStore.visitedRoutes"
    :key="visitedRoute.name"
    :closable="visitedRoute.name != 'homeIndex'"
    @click="routePush(visitedRoute.name)"
    size="large"
    :disable-transitions="false"
    @close="handleClose(visitedRoute.name)"
    :effect="visitedRoute.name == route.name ? 'dark' : 'plain'"
  >
    {{ visitedRoute.meta.title }}
  </el-tag>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute,useRouter } from 'vue-router';
import { useRouteStore } from '@/stores/app';
const routeStore = useRouteStore()
const route = useRoute()
const router = useRouter()

function routePush(name) {
  router.push({name})
}

const handleClose = (name) => {
  if (name === 'homeIndex') return
  routeStore.visitedRoutes = routeStore.visitedRoutes.filter(val => val.name != name)
  if(route.name == name){
    router.push('/')
  }
}

</script>
