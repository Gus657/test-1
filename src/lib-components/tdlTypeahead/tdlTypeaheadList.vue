<template>
<div class="typeahead-list" :class="[themeClass]">
  <div class="typeahead-list__input-container">
    <slot v-if="hasBeforeInputSlot" name="desktopBeforeInput"></slot>

    <md-input
      v-model="query"
      :disabled="disabled"
      :debounce="0"
      :maxlength="maxQueryLength"
      :disable-counter="true"
      :placeholder="inputPlaceholder"
      @focus="handleFocusChangeThrottled(true)"
      @blur="handleFocusChangeThrottled(false)"
      @keydown.native.prevent.enter="handleEnter"
      @keydown.native.tab="handleEnter"
      @keydown.native.delete="requestLastItemDeletion"
      @keydown.native.prevent.up="highlightItem('up')"
      @keydown.native.prevent.down="highlightItem('down')"
      @keydown.native.prevent.esc="closeList"
      @keydown.native="handleKeydown"
      tabindex="0"
      autocomplete="off"
      class="typeahead-list__input"
      :class="{'typeahead-list__input--with-hint': showSearchHint}"
      ref="input">
    </md-input>

    <md-icon
      v-if="showSearchHint"
      class="typeahead-list__search-hint"
      :icon-svg="mdiMagnifyIcon"
    ></md-icon>

    <slot v-if="hasAfterInputSlot" name="desktopAfterInput"></slot>
  </div>
    <md-progress v-if="loading" md-indeterminate key="stateLoading"></md-progress>
    <md-list
      :disabled="loading"
      class="typeahead-list__item-list"
      :class="{'typeahead-list__item-list--loading': loading, 'typeahead-list__item-list--active': !loading && itemListVisible}"
      ref="list">
        <div>
          <md-list-item v-if="flattenItemList.length > 0 && hasBeforeListSlot">
            <slot name="desktopBeforeList"></slot>
          </md-list-item>
          <div v-for="(list, title) in itemList" :key="title">
            <h4 v-if="title !== '$default' && list.length > 0" class="md-caption typeahead-list__results-subtitle">{{title}}</h4>
            <md-list-item
              v-for="item in list"
              @click="handleItemClicked(item)"
              @mousedown.native="handleItemMouseDown"
              @mouseup.native="handleItemMouseUp"
              @keydown.native.prevent.enter="selectItemAndCloseList(item)"
              @keydown.native.prevent.up="highlightItem('up')"
              @keydown.native.prevent.down="highlightItem('down')"
              @keydown.native.prevent.esc="closeList"
              class="typeahead-list__results-item"
              :class="itemClass(item)"
              :disabled="itemDisabled(item)"
              :key="item.id">
              <slot name="desktopItem" :item="item" :formatted="loading ? item.text : formatText(item)"></slot>
            </md-list-item>
          </div>
        </div>
        <md-list-item v-if="flattenItemList.length === 0 && hasNoResultsSlot">
          <slot name="desktopNoResults"></slot>
        </md-list-item>
        <md-list-item
          v-if="showAddNewItem && hasCreateSlot"
          @click="createItemAndCloseList"
          @mousedown.native="handleItemMouseDown"
          @mouseup.native="handleItemMouseUp"
          @keydown.native.prevent.enter="createItemAndCloseList"
          @keydown.native.prevent.up="highlightItem('up')"
          @keydown.native.prevent.down="highlightItem('down')"
          @keydown.native.prevent.esc="applyInputFocus"
          :class="[
            themeClass,
            'typeahead-list__results-item',
            'typeahead-list__results-item--creatable',
            {'typeahead-list__results-item--top': addNewItemSlotPosition === 'top'},
            {'typeahead-list__results-item--bottom': addNewItemSlotPosition === 'bottom'}
          ]"
        >
            <slot name="desktopCreate" :query="query"></slot>
        </md-list-item>
    </md-list>
</div>
</template>

<script src="./tdlTypeaheadList.js"></script>
<style src="./tdlTypeaheadList.scss" lang="scss"></style>
