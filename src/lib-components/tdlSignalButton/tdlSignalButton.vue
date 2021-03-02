<template>
  <div>
    <div
      ref="signalButton"
      :class="[
        'tdl-signal-button',
        themeClass,
        {
          'tdl-signal-button--simple': currentState === 0,
          'tdl-signal-button--fixed-width': styleProps.fixedWidth
        }
      ]"
      :style="cssVariables"
    >
      <md-ink-ripple />
      <md-button
        :disabled="isLoading"
        :theme="theme"
        @click="changeToNextState"
        :class="[
          'md-raised tdl-signal-button__signal-button', {
            'md-primary tdl-signal-button__signal-button--simple': currentState === 0,
            'tdl-signal-button--inverted': styleProps.inverted,
            'tdl-signal-button__signal-button--elevated': styleProps.elevated && currentState !== 0
          }
        ]"
      >
        <md-tooltip v-show="tooltipText && !isLoading" class="tdl-signal-button__tooltip">
          {{tooltipText}}
        </md-tooltip>
        <md-icon
          v-if="!hasSignal"
          :icon-svg="mdiHumanGreetingIcon"
        ></md-icon>
        {{ isLoading ? loadingState.buttonText : buttonText }}
      </md-button>
      <md-menu
        ref="menu"
        v-if="hasSignal || openNotificationSettings"
        class="tdl-signal-button__menu"
        md-size=5
        :md-offset-x="menuPosition.x"
        :md-offset-y="menuPosition.y"
        :md-transparent-backdrop="!openNotificationSettings"
        :md-close-on-select="closeOnSelect"
        :md-has-backdrop="hasBackdrop"
        @open="handleMenuOpened"
        @close="handleMenuClosed"
        @menu-configured="openMenu"
      >
        <button
          ref="menuTrigger"
          class="md-button tdl-signal-button__menu-container"
          :class="[theme, {'tdl-signal-button__menu-container--elevated': styleProps.elevated && currentState !== 0}]"
          md-menu-trigger
          @click.stop
        >
          <md-icon
            :icon-svg="notificationStates[currentNotificationState].menuIcon"
            :class="['tdl-signal-button__menu-icon', {'tdl-signal-button__menu-icon--highlighted': notificationStates[currentNotificationState].iconHighlighted }]"
          />
          <md-menu-content ref="menuContent" class="tdl-menu-signal-content__menu" :style="menuStyles">
            <span v-if="menuTitle && openNotificationSettings" class="tdl-signal-button__menu-title">{{menuTitle}}</span>
            <md-menu-item
              v-for="(notificationState, index) in notificationStates"
              :key="index"
              :class="[
                'tdl-signal-button__menu-item',
                {'tdl-signal-button__menu-item--selected': index === currentNotificationState}
              ]"
              @click="updateNotificationState(index)"
            >
              <span class="md-body">
                <md-icon
                  :icon-svg="notificationState.menuIcon"
                  :class="['tdl-signal-button__menu-icon', {'tdl-signal-button__menu-icon--highlighted': notificationState.iconHighlighted }]"
                />
                {{notificationState.menuTitle}}
              </span>
            </md-menu-item>
            <md-menu-item
              class="tdl-signal-button__menu-item--about-signals"
              @click="aboutSignals()"
            >
              <a
                class="tdl-signal-button__link"
              >
                {{$t("Learn more about signals")}}
              </a>
            </md-menu-item>
          </md-menu-content>
        </button>
      </md-menu>
    </div>
  </div>
</template>

<script src="./tdlSignalButton.js"></script>
<style src="./tdlSignalButton.scss" lang="scss"></style>
