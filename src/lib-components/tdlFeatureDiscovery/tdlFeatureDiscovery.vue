<template>
  <div class="tdl-feature-discovery" :class="[themeClass]" :style="cssProps">
    <div class="tap-target-wrapper" @click="closeDiscovery()" ref="targetWrapper">
      <div class="tap-target" :class="[themeClass]">
        <div class="tap-target-content" :class="helperPosition">
          <slot></slot>
        </div>
      </div>
      <div class="tap-target-wave"></div>
    </div>
    <div class="tdl-feature-backdrop" @click="closeDiscovery()" ref="featureBackdrop"></div>
  </div>
</template>

<style src="./tdlFeatureDiscovery.scss" lang="scss"></style>
<script src="./tdlFeatureDiscovery.js"></script>
