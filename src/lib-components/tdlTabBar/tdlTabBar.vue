<template>
  <div class="tdl-tab-bar-container" :class="[themeClass]">
    <div class="tdl-tab-bar">
      <slot></slot>
      <span class="tdl-tab-bar-indicator" :style="indicatorStyles" ref="indicator"></span>
    </div>
  </div>   
</template>

<script src="./tdlTabBar.js"></script>
<style src="./tdlTabBar.scss" lang="scss"></style>
