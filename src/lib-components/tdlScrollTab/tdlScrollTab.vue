<template>
  <div class="tdl-scroll-tab" :class="[themeClass]">
      <md-button :id="`tab-${targetId}`" :href="href" class="md-primary tdl-tab-button" @click="tabClicked($event)">
        <slot></slot>
      </md-button>
  </div>
</template>

<script src="./tdlScrollTab.js"></script>
<style src="./tdlScrollTab.scss" lang="scss"></style>
