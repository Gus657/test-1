<template>
  <div class="typeahead-dialog" :class="themeClass">
    <md-input
      class="typeahead-dialog__input-trigger"
      :disabled="disabled"
      :debounce="0"
      :placeholder="!selectedItems.length ? (inputPlaceholder || inputLabel) : ''"
      @focus="openDialog">
    </md-input>

    <slot v-if="hasAfterInputSlot && !openInputContainer" name="mobileAfterInput"></slot>

    <div class="typeahead-dialog__input-container" :class="[inputContainerClasses, themeClass]" ref="inputDialog" :style="cssProps">
      <md-whiteframe class="typeahead-dialog__search-actions">
        <md-button @click="closeInputContainer" class="md-icon-button typeahead-dialog__search-actions-close">
          <md-icon :icon-svg="mdiArrowLeftIcon"></md-icon>
        </md-button>
        <div class="typeahead-dialog__search-actions-input">
          <md-input-container class="typeahead-dialog__search-actions-input-container--embed" md-clear>
            <template v-if="hasChipsSlot">
              <slot name="mobileChips" :value="selectedItems"></slot>
            </template>
            <template v-else>
              <md-chip
                v-for="selected in selectedItems"
                :key="selected.id"
                class="typeahead-dialog__input-container-chip"
                md-deletable
                @delete="deleteSelected(selected)"
              >
                <slot name="mobileChip" :value="selected"></slot>
              </md-chip>
            </template>

            <div class="typeahead-dialog__input-container-box">
              <slot v-if="hasBeforeInputSlot" name="mobileBeforeInput"></slot>

              <md-input
                v-model="query"
                :debounce="0"
                :maxlength="maxQueryLength"
                :disable-counter="true"
                @focus="onSearchInputFocus"
                @blur="onSearchInputBlur"
                @keydown.native.prevent.enter="handleEnter"
                @keydown.native="charHandler"
                @textInput.native="textInputHandler"
                :placeholder="inputPlaceholder || inputLabel" ref="searchInput">
              </md-input>

              <template v-if="query.length > 0 || showSearchHint">
                <md-icon
                  v-if="query.length === 0"
                  class="typeahead-dialog__search-hint"
                  key="hint"
                  :icon-svg="mdiMagnifyIcon"
                ></md-icon>
                <md-button v-else class="md-icon-button md-dense" @click="handleClearSearch" key="clear">
                  <md-icon :icon-svg="mdiCloseIcon"></md-icon>
                </md-button>
              </template>

              <slot v-if="hasAfterInputSlot && openInputContainer" name="mobileAfterInput"></slot>
            </div>
          </md-input-container>
        </div>
      </md-whiteframe>
      <md-progress v-if="loading" md-indeterminate key="stateLoading"></md-progress>
      <div v-else key="stateLoaded" class="typeahead-dialog__results results" ref="results">
        <md-list class="typeahead-dialog__results-list"  ref="list">
          <md-list-item v-if="flattenItemList.length > 0 && hasBeforeListSlot">
            <slot name="mobileBeforeList"></slot>
          </md-list-item>
          <md-list-item v-if="noResultsVisible">
            <slot name="mobileNoResults"></slot>
          </md-list-item>
          <div v-for="(list, title) in itemList" :key="title">
            <h4 v-if="title !== '$default' && list.length > 0" class="md-caption typeahead-dialog__results-subtitle">{{title}}</h4>
            <md-list-item
              v-for="item in list"
              :class="itemClass(item)"
              :disabled="itemDisabled(item)"
              :key="item.id"
              @click="selectItem(item)"
              >
                <slot name="mobileItem" :item="item" :formatted="formatText(item)"></slot>
            </md-list-item>
          </div>
        </md-list>
        <div
            v-if="showAddNewItem && hasCreateSlot"
            :class="['results__result', {'results__result--top': addNewItemSlotPosition === 'top'}, {'results__result--bottom': addNewItemSlotPosition === 'bottom'}]"
            @click="createItem"
            >
              <slot name="mobileCreate" :query="query"></slot>
        </div>
      </div>

    </div>

  </div>
</template>

<script src="./tdlTypeaheadDialog.js"></script>
<style src="./tdlTypeaheadDialog.scss" lang="scss"></style>
