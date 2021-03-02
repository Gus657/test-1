<template>
  <md-input-container :class="['tdl-typeahead', themeClass, classes]" ref="parent" :md-simple="mdSimple" :md-clear="mdClear">
    <slot name="icon"></slot>
    <template v-if="inputLabel" #label>
      <span>
        {{ inputLabel }}
      </span>
      <md-icon
        v-if="!!inputTooltipText"
        :icon-svg="mdiInformationIcon"
      >
        <md-tooltip
          md-delay="300"
          md-direction="bottom"
          :display-on-mobile="true"
          v-html="inputTooltipText"
          :style="{ 'margin-left': isMobile && !selectedItems.length ? '-30px' : 'unset' }">
        </md-tooltip>
      </md-icon>
    </template>

    <div class="md-chips">
      <template v-if="hasChipsSlot">
        <slot name="chips" :items="selectedItems"></slot>
      </template>
      <template v-else>
        <template v-if="!onlyOneSelectedItem">
          <md-chip
            v-for="selected in selectedItems"
            md-deletable
            @delete="deleteChip(selected)"
            :key="selected.id" ref="chips">
              <slot name="chip" :value="selected">{{ selected.text }}</slot>
          </md-chip>
        </template>
        <div v-else class="only-item">
          <div class="only-item__text">
            <slot name="chip" :value="selectedItems[0]">{{ selectedItems[0].text }}</slot>
          </div>
          <md-button v-if="!disabled" @click="deleteChip(selectedItems[0])" class="md-icon-button md-primary">
            <md-icon :icon-svg="mdiCloseIcon"></md-icon>
          </md-button>
        </div>
      </template>

      <template v-if="isMobile">
        <tdl-typeahead-dialog
          :selected-items="selectedItems"
          :default-item-selector="defaultItemSelector"
          :disabled="disabled || disabledInput"
          :add-new-item="addNewItem"
          :add-new-item-when-query-matches="addNewItemWhenQueryMatches"
          :loading="loading"
          :item-factory="itemFactory"
          :item-list="itemList"
          :add-item-on-keypress="addItemOnKeypress"
          :accept-focus-requests="mobileAcceptFocusRequests"
          :input-label="inputLabel"
          :input-placeholder="inputPlaceholder"
          :item-disabled="itemDisabled"
          :item-selected-validator="itemSelectedValidator"
          :max-query-length="maxQueryLength"
          :add-new-item-slot-position="addNewItemSlotPosition"
          :search-hint-mode="searchHintMode"
          :min-chars="minChars"
          @query-changed="handleQueryChanged"
          @input-keypress="(key) => $emit('input-keypress', key)"
          @item-selected="handleItemSelected"
          @item-removed="handleItemRemoved"
          @focused="handleFocus"
          @dialog-opened="$emit('selector-opened')"
          @dialog-closed="$emit('selector-closed')"
          @changed="$emit('changed')"
          ref="delegatedTypeahead">
          <template slot="mobileAfterInput">
            <slot v-if="hasAfterInputSlot" name="after-input"></slot>
          </template>
          <template slot="mobileBeforeInput">
            <slot v-if="hasBeforeInputSlot" name="before-input"></slot>
          </template>
          <template v-if="hasBeforeListSlot" slot="mobileBeforeList">
            <slot name="before-list"></slot>
          </template>
          <template #mobileItem="{ item, formatted }">
            <div v-if="hasItemSlot" class="tdl-typeahead__item-slot--wrapper">
              <slot name="item" :item="item" :formatted="formatted"></slot>
            </div>
            <div v-else>
              <span v-html="formatted"></span>
            </div>
          </template>
          <template #mobileCreate="{ query }">
            <slot v-if="hasCreateSlot" name="create" :query="query"></slot>
            <template v-else>
              <tdl-typeahead-add-new-item
                :query="query"
                :style="newItemStyles"
                :add-new-item-element="addNewItemElement"
              ></tdl-typeahead-add-new-item>
            </template>
          </template>
          <template #mobileChip="{ value }">
            <slot v-if="hasChipSlot" name="chip" :value="value"></slot>
            <template v-else>{{value.text}}</template>
          </template>
          <template #mobileChips="{ value }">
            <slot v-if="hasChipsSlot" name="chips" :items="value"></slot>
          </template>
          <template v-if="hasNoResultsSlot" slot="mobileNoResults">
            <slot name="no-results"></slot>
          </template>
        </tdl-typeahead-dialog>

      </template>
      <template v-else>
        <tdl-typeahead-list
          :selected-items="selectedItems"
          :default-item-selector="defaultItemSelector"
          :disabled="disabled || disabledInput"
          :add-new-item="addNewItem"
          :add-new-item-when-query-matches="addNewItemWhenQueryMatches"
          :close-list-on-item-selected="desktopCloseListOnItemSelected"
          :loading="loading"
          :item-list="itemList"
          :item-list-fixed="desktopItemListFixed"
          :item-list-offset="desktopItemListOffset"
          :add-item-on-keypress="addItemOnKeypress"
          :input-placeholder="inputPlaceholder"
          :item-factory="itemFactory"
          :item-disabled="itemDisabled"
          :item-selected-validator="itemSelectedValidator"
          :max-query-length="maxQueryLength"
          :add-new-item-slot-position="addNewItemSlotPosition"
          :query-validator="desktopQueryValidator"
          :search-hint-mode="searchHintMode"
          :select-item-on-input-blur="desktopSelectItemOnInputBlur"
          :min-chars="minChars"
          @query-changed="handleQueryChanged"
          @query-invalid="handleQueryInvalid"
          @input-keypress="(key) => $emit('input-keypress', key)"
          @item-selected="handleItemSelected"
          @item-removed="handleItemRemoved"
          @focused="handleFocus"
          @blur-dirty="$emit('blur-dirty', $event)"
          @list-opened="$emit('selector-opened')"
          @list-closed="$emit('selector-closed')"
          @changed="$emit('changed')"
          ref="delegatedTypeahead">
          <template slot="desktopAfterInput">
            <slot v-if="hasAfterInputSlot" name="after-input"></slot>
          </template>
          <template slot="desktopBeforeInput">
            <slot v-if="hasBeforeInputSlot" name="before-input"></slot>
          </template>
          <template v-if="hasBeforeListSlot" slot="desktopBeforeList">
            <slot name="before-list"></slot>
          </template>
          <template #desktopItem="{ item, formatted }">
            <slot v-if="hasItemSlot" name="item" :item="item" :formatted="formatted"></slot>
            <template v-else>
              <span v-html="formatted"></span>
            </template>
          </template>
          <template #desktopCreate="{ query }">
            <slot v-if="hasCreateSlot" name="create" :query="query"></slot>
            <template v-else>
              <tdl-typeahead-add-new-item
                :query="query"
                :style="newItemStyles"
                :add-new-item-element="addNewItemElement"
              ></tdl-typeahead-add-new-item>
            </template>
          </template>
          <template v-if="hasNoResultsSlot" slot="desktopNoResults">
            <slot name="no-results"></slot>
          </template>
        </tdl-typeahead-list>
      </template>
    </div>

    <slot></slot>
    <template v-if="!hasDefaultSlot">
      <span class="md-error" v-if="fetchListError === 'fetch-list.timeout'">{{$t("There is something wrong with your connection. Please try again later.")}}</span>
      <template v-else-if="queryInvalid">
        <span class="md-error" v-if="addNewItem">{{`${$t("Select an item from the list or add a new one by clicking on \"Add new")} ${addNewItemElement.type.toLowerCase()}\"`}}</span>
        <span class="md-error" v-else>{{$t("You must select an item from the list")}}</span>
      </template>
    </template>
  </md-input-container>
</template>

<script src="./tdlTypeahead.js"></script>
<style lang="scss" src="../mdChips/mdChips.scss"></style>
<style src="./tdlTypeahead.scss" lang="scss"></style>
<style lang="scss" scoped>
.md-tooltip {
  max-width: 280px;
  height: auto;
  white-space: normal;
  font-size: 12px;
  padding: 8px;
}
</style>
