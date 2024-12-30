<script>
import 'anahita/main.css';
import {Anahita} from 'anahita'

import DemoMap from '@/domain/map/DemoMap.js'

export default {
  mounted() {
    const world = Anahita.init();
    const map = new DemoMap();
    world.setMap(map);
    world.loop();
  }
}
</script>

<template>
  <div class="anahita">
    <canvas></canvas>
  </div>
</template>

<style>
.anahita {
  outline: 1px solid #FFF;
  margin-top: 20px;
}
</style>
