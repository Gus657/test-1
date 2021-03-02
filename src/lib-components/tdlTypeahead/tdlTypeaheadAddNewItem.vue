<template>
  <div class="tdl-typeahead-add-new-item" :class="themeClass">
    <md-icon 
      v-if="addNewItemElement.icon && !addNewItemElement.iconset"
      :icon-svg="addNewItemElement.icon"
    >
    </md-icon>
    <md-icon
      v-if="addNewItemElement.iconset"
      :icon-svg="addNewItemElement.iconset"
    ></md-icon>
    <div class="tdl-typeahead-add-new-item__text">
      <p class="md-body-1">
        {{ query }}
      </p>
      <p v-if="addNewItemElement.text" class="md-subheading-2">
        <span>
          {{ addNewItemElement.text }}
          <md-icon class="tdl-typeahead-add-new-item__icon">keyboard_return</md-icon>
        </span>
      </p>
      <p v-else class="md-subheading-2">
        {{$t("Add new")}}
        <span class="tdl-typeahead-add-new-item__type">
          {{ addNewItemElement.type }}
          <md-icon 
            class="tdl-typeahead-add-new-item__icon"
            :icon-svg="mdiKeyboardReturnIcon"
          ></md-icon>
        </span>
      </p>
    </div>
  </div>
</template>

<script src="./tdlTypeaheadAddNewItem.js"></script>
<style lang="scss" src="./tdlTypeaheadAddNewItem.scss" scoped></style>
