<template>
  <div class="navigation-bar-container" :class="{'allow-side': allowSideNavigation}">
    <md-layout class="bottom-nav-bar" md-flex md-row>
        <md-bottom-bar>
          <slot>
            <md-bottom-bar-item v-for="(item, index) in navigationItems" @click.native="handleClickItem(item, index)" :md-icon="(item.icon) ? item.icon : undefined " :md-iconset="(item.iconset) ? item.iconset : undefined " :md-active="index === activeIndex" :key="index">{{item.title}}</md-bottom-bar-item>
          </slot>
        </md-bottom-bar>
    </md-layout>
  </div>
</template>

<script src="./tdlNavigation.js"></script>
<style src="./tdlNavigation.scss" lang="scss"></style>
