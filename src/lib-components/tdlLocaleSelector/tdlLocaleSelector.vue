<template>
  <div class="tdl-locale-selector">
    <md-dialog
      :style="styleProps"
      ref="selectLocale">
      <md-dialog-title>{{$t('Language')}}</md-dialog-title>
      <md-dialog-content>
        <div class="dialog-content">
          <p class="md-subheading">
            {{$t('What language do you want to use Torre in?')}}
          </p>
          <div>
            <md-radio
              class="md-primary"
              v-model="localeSelected"
              id="en"
              name="locales"
              md-value="en">
              {{$t('English (en)')}}
            </md-radio>
            <md-radio
              class="md-primary"
              v-model="localeSelected"
              id="es"
              name="locales"
              md-value="es">
              {{$t('Spanish (es)')}}
            </md-radio>
          </div>
        </div>
      </md-dialog-content>
      <md-dialog-actions>
        <md-button class="md-primary" @click="close">{{$t('Cancel')}}</md-button>
        <md-button class="md-primary" @click="handleLocaleSelection">{{$t("Save")}}</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script src="./tdlLocaleSelector.js"></script>
<style src="./tdlLocaleSelector.scss" lang="scss" scoped></style>
<i18n src="./tdlLocaleSelector.json"></i18n>
