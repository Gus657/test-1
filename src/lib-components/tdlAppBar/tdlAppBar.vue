<template>
  <div
    class="tdl-app-bar"
    :class="[themeClass]"
    :style="cssVariables"
  >
    <md-whiteframe :class="classObject" md-elevation="1" ref="toolbar">
      <md-toolbar>
        <!-- Branded Bar -->
        <div class="md-toolbar-container md-toolbar-container--branded-bar" ref="brandBar">
          <md-button class="md-icon-button" @click.native="handleMenuClick">
            <md-icon :icon-svg="mdiMenuIcon"></md-icon>
          </md-button>
          <div class="tdl-brand-logo-wrapper">
            <a href @click.prevent="handleBrandLogoClick">
              <tdl-brand-logo></tdl-brand-logo>
            </a>
          </div>
          <slot name="custom-tools" :tools="tools">
            <div class="tdl-app-bar__search-icon">
              <md-button :href="searchTool.url" class="md-icon-button">
                <md-icon :icon-svg="mdiSearchIcon" class="tools_icon"></md-icon>
              </md-button>
            </div>
          </slot>
          <div class="tdl-app-bar__tools tools">
            <md-button
              v-for="tool in tools"
              :class="['tools__tool', {'tools__tool--has-badge': !!displayBadge(tool.name)}]"
              :href="tool.url"
              :badge="displayBadge(tool.name)"
              :key="tool.name"
            >
                <md-icon :icon-svg="tool.iconSvg" class="tools__icon"/>
                <img
                  v-if="tool.image"
                  v-lazyload
                  :data-url="tool.image"
                  class="tools__image"
                  alt="Tool"
                >
                <div class="tools__name">{{tool.name}}</div>
            </md-button>
          </div>
          <md-menu v-if="user" class="tdl-app-bar__user-menu user-menu" :md-size="6" :md-offset-y="62">
            <tdl-entity-picture
              md-menu-trigger
              class="user-menu__picture"
              shape="hexagon"
              :entity="user"
              :border-width="2"
              :size="38"
              :default-margin="false"
              box-shadow="0px 2px 4px rgba(0,0,0,0.5)"
            ></tdl-entity-picture>
            <md-menu-content>
              <div>
                <div class="user-menu__user user" :class="[themeClass]">
                  <tdl-entity-picture
                    md-menu-trigger
                    class="user__picture"
                    shape="hexagon"
                    :entity="user"
                    :border-width="5"
                    :size="64"
                    :default-margin="false"
                    box-shadow="0px 2px 4px rgba(0,0,0,0.5)"
                  ></tdl-entity-picture>
                  <div class="user__content">
                    <a
                      class="user__name md-subheading"
                      :class="defaultTheme"
                      :href="bioUrl"
                    >
                      {{user.name}}
                    </a>
                    <p class="user__email md-caption">
                      {{user.email}}
                    </p>
                  </div>
                </div>
                <div class="user-menu__actions" :class="[themeClass]">
                  <md-button
                    class="md-primary md-raised user-menu__action--wide global-themed-button__primary"
                    :theme="defaultTheme"
                    :href="bioUrl"
                  >
                    {{$t("Your genome")}}
                  </md-button>
                  <md-button
                    class="md-raised user-menu__action--wide user-menu__action--secondary global-themed-button__secondary"
                    :theme="defaultTheme"
                    :href="urls.STARRGATE_BASE_URL"
                  >
                    {{$t("Your torre account")}}
                  </md-button>
                  <md-button
                    class="user-menu__action--secondary global-themed-button__flat"
                    :theme="defaultTheme"
                    @click="requestLogout"
                  >
                    {{$t("Sign out")}}
                  </md-button>
                </div>
              </div>
            </md-menu-content>
          </md-menu>
          <md-button
            v-else
            class="md-primary tdl-app-bar__sign-in"
            :theme="theme"
            @click="requestLogin"
          >
            {{$t("Sign in")}}
          </md-button>
        </div>

        <!-- App bar content (optional) -->
        <hr class="tdl-divider" v-if="hasTitleBar">
        <div class="md-toolbar-container md-toolbar-container--title-bar" v-if="hasTitleBar" ref="titleBar">
          <slot></slot>
        </div>

        <!-- Extra content (optional) -->
        <div class="md-toolbar-container" v-if="hasExtraBar" ref="extraBar">
          <slot name="extra"></slot>
        </div>

      </md-toolbar>
    </md-whiteframe>

    <md-toolbar
      v-if="!hideBottomBar"
      class="tdl-app-bar__bottom-bar"
      :md-theme="theme"
    >
      <div class="tdl-app-bar__tools tools">
        <md-button
          v-for="tool in mobileTools"
          :href="tool.url"
          :key="tool.name"
          :badge="displayBadge(tool.name)"
          class="tools__tool"
          :class="{'tools__tool--has-badge': !!displayBadge(tool.name)}">
            <md-icon :icon-svg="tool.iconSvg" class="tools__icon"/>
            <img
              v-if="tool.image"
              v-lazyload
              :data-url="tool.image"
              class="tools__image"
              alt="Tool"
            >
            <div class="tools__name">{{tool.name}}</div>
        </md-button>
        <md-menu class="tools__tool" md-size="4" :md-offset-y=-67 md-direction="top right">
          <md-button md-menu-trigger>
            <md-icon :icon-svg="mdiAppsIcon" class="tools__icon"/>
            <div class="tools__name">{{$t('More')}}</div>
          </md-button>
          <md-menu-content class="tdl-app-bar__all-tools">
            <md-menu-item v-for="tool in moreTools" class="all-tools__tool tool" :href="tool.url" :key="tool.name">
              <md-icon :icon-svg="tool.iconSvg" class="tools__icon"/>
              <img
                v-if="tool.image"
                v-lazyload
                :data-url="tool.image"
                class="tools__image"
                alt="Tool"
              >
              <div class="tools__name md-body-1">{{tool.name}}</div>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </md-toolbar>
  </div>
</template>

<script src="./tdlAppBar.js"></script>
<style src="./tdlAppBar.scss" lang="scss" scoped></style>
