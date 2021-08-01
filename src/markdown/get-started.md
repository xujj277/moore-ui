# 开始使用
请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Switch, Dialog, Tabs, Tab, Input, Toast, Popover, Collapse, CollapseItem, openToast, openDialog} from 'moore-ui'
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Switch, Dialog, Tabs, Tab, Input, Toast, Popover, Collapse, CollapseItem, openToast, openDialog} from 'moore-ui'
export default {
  components: {Button}
}
</script>
```

文档中示例代码中的路径都是相对路径请改成你自己文件对应的路径
```
import { Button } from '../lib/index' // 我文件的相对路径请更改如下

import {Button, Switch, Dialog, Tabs, Tab, Input, Toast, Popover, Collapse, CollapseItem, openToast, openDialog} from 'moore-ui'

```
