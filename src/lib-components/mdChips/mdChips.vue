<template>
  <span>
    <md-input-container class="md-chips" :class="[themeClass, classes]" @click="applyInputFocus">
      <md-chip
        v-for="chip in selectedChips"
        :key="chip"
        :md-editable="!mdStatic"
        :md-deletable="!mdStatic"
        :disabled="disabled"
        @edit="editChip(chip)"
        @delete="deleteChip(chip)">
        <slot name="chip" :value="chip">{{ chip }}</slot>
      </md-chip>

      <md-input
        v-show="!mdStatic"
        v-model="currentChip"
        :type="mdInputType"
        :placeholder="mdInputPlaceholder"
        :id="inputId"
        :name="mdInputName"
        :disabled="disabled"
        @keydown.native.delete="deleteLastChip"
        @keydown.native.prevent.enter="addChip"
        @keydown.native.prevent.186="addChip"
        @keydown.native.prevent.188="addChip"
        tabindex="0"
        :debounce="0"
        ref="input">
      </md-input>

      <slot></slot>
    </md-input-container>
  </span>
</template>

<script src="./mdChips.js"></script>
<style lang="scss" src="./mdChips.scss"></style>
<i18n src="./mdChips.json"></i18n> 
