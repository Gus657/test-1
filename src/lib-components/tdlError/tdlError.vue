<template>
  <div class="tdl-error">
    <div class="tdl-error-container">
      <tdl-magnifying-glass v-if="$props.statusCode===404" class="logo-svg"/>
      <div class="tdl-error-title">
        {{ title }}
      </div>
      <h1 class="tdl-error-code">{{ errorStatus }}</h1>
      <div class="tdl-error-message">
        {{ errorMessage }}
      </div>
      <tdl-crying-t-rex v-if="$props.statusCode!==404" class="logo-svg"/>
      <a v-if="$props.statusCode===404" class="md-button md-raised md-primary md-theme-dark" :href="baseURL">{{ buttonText }}</a>
      <md-button v-else class="md-raised md-primary" @click.prevent="$emit('handleErrorClick')">{{ buttonText }}</md-button>
      <div v-if="$props.statusCode!==404" class="tdl-error-message">
        {{ $t("If the problem persists,") }} 
        <a :href="`${baseURL}/help`"> {{ $t("Contact us") }} </a>
        {{ $t("or") }} 
        <a :href="baseURL"> {{ $t("Visit the homepage") }} </a>
      </div>
    </div>
  </div>
</template>

<script src="./tdlError.js"></script>
<style src="./tdlError.scss" lang="scss"></style>
