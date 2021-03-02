<template>
  <div class="tdl-item-picker" :class="[themeClass]">
    <template v-if="isDesktop">
      <md-menu
        ref="menu"
        class="tdl-item-picker__menu"
        md-align-trigger
        md-fixed
        md-manual-toggle
        md-no-focus
        md-size="auto"
        :md-offset-x="offset.left"
        :md-offset-y="offset.top"
        @close="handleClose"
        @open="handleOpen"
      >
        <slot></slot>

        <div v-if="isDesktop" ref="anchor" class="tdl-item-picker__anchor" md-menu-trigger></div>

        <md-menu-content
          ref="menu-content"
          class="tdl-item-picker__menu-content"
          :style="{
            maxWidth: menuContentMaxWidth,
            width: menuContentWidth
          }"
        >
          <md-menu-item
            v-if="hasSlot('add-new-item')"
            class="md-option tdl-item-picker_menu-item"
            @click.native="handleAddNewSlotClick"
          >
            <slot name="add-new-item"></slot>
          </md-menu-item>
          <md-menu-item
            v-if="hasSlot('no-results') && thereAreNoItems"
            class="md-option tdl-item-picker_menu-item"
            disabled
          >
            <slot name="no-results"></slot>
          </md-menu-item>
          <template v-for="(items, title) in itemsFiltered">
            <h4
              v-if="title !== '$default'"
              class="md-caption tdl-item-picker__menu-subtitle"
              :key="title"
            >
              {{title}}
            </h4>
            <md-menu-item
              v-for="(item, index) in itemsFiltered[title]"
              class="md-option tdl-item-picker__menu-item"
              :class="itemClass(item)"
              :disabled="itemDisabled(item)"
              :key="item.id"
              :tabindex="itemTabIndex(item, index)"
              @click.native="() => selectItem(item)"
            >
              <slot v-if="hasSlot('item')" name="item" :item="item"></slot>
              <span v-else v-html="itemFormatter(item)"></span>
            </md-menu-item>
          </template>
        </md-menu-content>
      </md-menu>
    </template>
    <template v-else>
      <slot></slot>

      <md-dialog
        ref="dialog"
        class="tdl-item-picker__dialog"
        :class="[themeClass]"
        md-fullscreen
        @cancel="close"
        @close="handleClose"
        @open="handleOpen"
      >
        <md-dialog-content>
          <template v-if="hasSlot('mobile-pre-list')">
            <slot name="mobile-pre-list"></slot>
          </template>

          <md-list ref="menu-content">
            <md-list-item
              v-if="hasSlot('add-new-item')"
              class="tdl-item-picker__menu-item"
              @click="handleAddNewSlotClick"
            >
              <slot name="add-new-item"></slot>
            </md-list-item>
            <md-list-item
              v-if="hasSlot('no-results') && thereAreNoItems"
              class="tdl-item-picker_menu-item"
              md-disabled
            >
              <slot name="no-results"></slot>
            </md-list-item>
            <template v-for="(items, title) in itemsFiltered">
              <h4
                v-if="title !== '$default'"
                class="md-caption tdl-item-picker__menu-subtitle"
                :key="title"
              >
                {{title}}
              </h4>
              <md-list-item
                v-for="item in itemsFiltered[title]"
                class="tdl-item-picker__menu-item"
                :disabled="itemDisabled(item)"
                :class="itemClass(item)"
                :key="item.id"
                @click="() => selectItem(item)"
              >
                <slot v-if="hasSlot('item')" name="item" :item="item"></slot>
                <span v-else v-html="itemFormatter(item)"></span>
              </md-list-item>
            </template>
          </md-list>
        </md-dialog-content>
      </md-dialog>
    </template>
  </div>
</template>

<script src="./tdlItemPicker.js"></script>
<style src="./tdlItemPicker.scss" lang="scss"></style>
