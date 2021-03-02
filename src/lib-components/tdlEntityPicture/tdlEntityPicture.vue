<template>
  <div
    v-if="entity"
    :class="['entity-picture', {'entity-picture--is-hexagon': shape === 'hexagon','entity-picture--has-shadow': boxShadow}]"
    :style="cssVariables"
  >
    <div v-if="shape === 'hexagon'" :class="['hexagon-border', {'hexagon-border--no-margins': !defaultMargin}]"/>
    <img
      v-if="pictureUrl"
      v-lazyload 
      :data-url="pictureUrl"
      :title="title"
      :class="['entity-picture__thumbnail', 'entity-picture__thumbnail--image', {'entity-picture__thumbnail--no-margins': !defaultMargin}]"
      :alt="entity.name"
      @click="clickImage"
    />
    <div
      v-else
      :class="['entity-picture__thumbnail', 'entity-picture__thumbnail--text', {'entity-picture__thumbnail--no-margins': !defaultMargin}]"
      @click="clickImage"
    >
      <span>{{entity && entity.name ? entity.name.substring(0, 1) : ''}}</span>
    </div>
  </div>
</template>

<script src="./tdlEntityPicture.js"></script>
<style src="./tdlEntityPicture.scss" lang="scss"></style>
