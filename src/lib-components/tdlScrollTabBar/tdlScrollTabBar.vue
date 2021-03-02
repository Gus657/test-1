<template>
  <div id="tdlScrollTabContainer" class="tdl-scroll-tab-bar-container" :class="[themeClass]">
    <div class="tdl-scroll-tab-bar">
      <slot></slot>
      <span class="tdl-scroll-tab-bar-indicator" :style="indicatorStyles" ref="indicator"></span>
    </div>
  </div>
</template>

<script src="./tdlScrollTabBar.js"></script>
<style src="./tdlScrollTabBar.scss" lang="scss"></style>
