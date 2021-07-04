<template>
  <div class="wrapper">
    <input class="x-input" type="text" :value="value" :disabled="disabled">
    <!--用 template 减少div的使用-->
    <template v-if="error">
      
      <span class="errorMsg">{{error}}</span>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String,
    }
  },
  setup () {
    
  }
}
</script>

<style lang='scss'>
$border-color: #e6e3e0;
$border-radius: 10px;
$border-color-hover: #666;
$box-shadow-color: rgba(0, 0, 0, 0.5);

.x-input {
  font-size: 14px;
  height: 32px;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  padding: 0 8px;
  background: #f1e9d1;

  &:hover {
    border-color: $border-color-hover;
  }
  &:focus {
    box-shadow: inset 0 1px 3px $box-shadow-color;
    outline: none;
  }
  &::placeholder {
    color: #d5c8b1;
  }
  
  &[disabled] {
    border-color: #bbb;
    color: #bbb;
    cursor: not-allowed;
  }
}
</style>
