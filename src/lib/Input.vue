<template>
  <div class="x-wrapper" :class="{error}">
    <input class="x-input" type="text" :value="value" :disabled="disabled" :placeholder="placeholder">
    <!--用 template 减少div的使用-->
    <template v-if="error">
      <span class="x-errorMsg">{{error}}</span>
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
    },
    placeholder: {
      type: String
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
$red: #F1453D;

input {
  -webkit-appearance:none;
}

.x-wrapper {
  .x-input {
    font-size: 14px;
    height: 32px;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    background: #f2efd4;
    color: #af886c;

    &:focus {
      outline: none;
      background: #e9e6cc;
    }

    &::placeholder {
      color: #d2ab9a;
    }

    &[disabled] {
      color: #bbb;
      cursor: not-allowed;

      &::placeholder {
        color: #bbb;
      }
    }
  }
  &.error {
    > input {
      border-color: $red;
    }
  }
  .x-errorMsg {
    color: $red;
  }
}
</style>
