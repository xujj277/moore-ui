<template>
  <template v-if="visible">
    <teleport to="body">
      <div className="moore-citySelect-dialog">
        <header>
          <span className="icon" @click="backClick">&lt;</span>
          <span>选择城市</span>
        </header>
        <h2>全部城市</h2>
        <ol className="moore-citySelect-index">
          <li v-for="item in indexList">{{item}}</li>
        </ol>
        <div className="cityList">所有城市</div>
        <div v-for="item in cityList" 
             className="moore-citySelect-citySection"
        >
          <h4 :data-letter=item[0]>{{ item[0] }}</h4>
          <div v-for="city in item[1]" 
               className="moore-citySelect-cityName"
               @click="onChange(city)"
          >
            {{ city }}
          </div>
        </div>
      </div>
    </teleport>
  </template>
</template>

<script lang="ts">
import { computed } from 'vue'
import pinyin from 'tiny-pinyin';

export default {
  name: 'citySelect',
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    dataSource: {
      type: Array
    }
  },
  emits: ['onChange'],
  setup (props, context) {
    const map = computed(() => {
      let object = {}
      props.dataSource.map(city => {
        const py = pinyin.convertToPinyin(city)
        const index = py[0]
        if (!object[index]) {
          object[index] = []
        }
        object[index].push(city)
      })
      return object
    })
    const indexList = Object.keys(map.value).sort();
    const cityList = Object.entries(map.value).sort((a, b) => a[0].charCodeAt(0) - b[0].charCodeAt(0))
    const backClick = () => {
      context.emit('update:visible', false)
    }
    const onChange = (city) => {
      context.emit('onChange', city)
    }
    return {
      backClick,
      indexList,
      cityList,
      onChange
    }
  }
}
</script>

<style lang='scss' scoped>
.moore-citySelect {
  &-body {
    overflow: hidden;
  }
  &-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: white;
    z-index: 12;
    
    h2 {
      color: #1b1f23;
    }
    > header {
      background: rgb(255, 202, 0);
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      font-size: 16px;
      line-height: 50px;
      > .icon {
        position: absolute;
        left: 0;
      }
    }
  }
  &-index {
    display: flex;
    flex-wrap: wrap;
    border: 1px solid rgb(221, 216, 206);
    > li {
      width: 20%;
      text-align: center;
      padding: 4px 0;
    }
  }
  &-citySection {
    border-left: 1px solid rgb(237, 235, 229);
    overflow: hidden;
    > h4 {
      border: 1px solid rgb(237, 235, 229);
      border-left: none;
      border-bottom: none;
      float: left;
      width: 25%;
      line-height: 80px;
      text-align: center;
      font-size: 40px;
    }
    > .moore-citySelect-cityName {
      float: left;
      width: 25%;
      font-size: 14px;
      line-height: 40px;
      text-align: center;
      border: 1px solid rgb(237, 235, 229);
      border-left: none;
      margin-bottom: -1px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>
