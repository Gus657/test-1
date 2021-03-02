<template>
  <div :style="cssVariables">
    <md-sidenav class="md-left tdl-drawer drawer-light" :class="[themeClass]" :md-fixed="true" @open="handleOpen" @close="handleClose" ref="drawer">
      <header>
        <md-whiteframe md-elevation="2">
          <md-toolbar md-theme="white">
            <a class="md-primary" href="/">
              <tdl-brand-logo />
            </a>
          </md-toolbar>
        </md-whiteframe>
      </header>
      <div class="tdl-drawer-options">
        <md-list>
          <slot/>
          <div v-for="(option, index) in allDrawerOptions" :key="index">
            <md-list-item
              v-if="!option.userState
                || ((option.userState === 'loggedOut' && !tdlUser || (!!tdlUser && !tdlUser.name))
                || (option.userState === 'loggedIn' && !!tdlUser && !!tdlUser.name))"
              class="tdl-drawer-options__option option"
              @click.native="handleClickItem(option)"
            >
              <md-icon :icon-svg="option.iconSvg"></md-icon>
              <span v-if="option.text" class="md-body-1 option__text">{{ option.text }}</span>
              <md-divider v-if="option.divider"/>
            </md-list-item>
          </div>
          <slot name="cross-drawer"></slot>
        </md-list>
      </div>
      <div  class="tdl-spacer"></div>
      <footer>
        <div class="tdl-footer-links">
          <a
            class="md-primary"
            :href="urls.TORRE_ABOUT_BASE_URL"
          >
            <small>{{$t("About us")}}</small>
          </a>&nbsp;&nbsp;&nbsp;
          <a
            class="md-primary"
            :href="`${urls.STARRGATE_BASE_URL}/terms/`"
          >
            <small>{{$t("Terms of use")}}</small>
          </a>&nbsp;&nbsp;&nbsp;
          <a
            class="md-primary"
            :href="`${urls.STARRGATE_BASE_URL}/privacy/`"
          >
            <small>{{$t("Privacy policy")}}</small>
          </a>
        </div>
        <div class="tdl-footer-copy">
          <small>&copy; Torre Labs, Inc.</small>
        </div>
      </footer>
    </md-sidenav>
    <tdl-locale-selector
      @locale-selected="handleLocaleSelected"
      :defaultLocale="defaultLocale"
      :styleProps="styleProps"
      ref="localeSelector"
    ></tdl-locale-selector>
  </div>
</template>

<script src="./tdlNavDrawer.js"></script>
<style src="./tdlNavDrawer.scss" lang="scss"></style>
