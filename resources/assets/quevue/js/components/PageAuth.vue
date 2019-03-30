<template>
  <div class="app-auth__container">
    <div class="app-auth__wrapper">
      <div class="uk-card uk-card-default uk-card-small">
        <div class="uk-card-body">
          <div class="uk-grid-small" uk-grid>
            <div class="uk-width-1-2 uk-flex uk-flex-center uk-flex-middle">
              <img :src="__assetImages('quetzal_logo.png')" width="240">
            </div>
            <div class="uk-width-1-2">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
