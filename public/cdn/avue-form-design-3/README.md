## 简介
主要修复了`@submit`事件未生效的问题。

3.0.10 
增加【保存】按钮，直接获取JSON data.

## 文档及demo项目
[Wiki](../../wikis)

## 依赖

element-plus

```sh
$ npm i element-plus
```

@smallwei/avue 3.0.0+

```sh
$ npm i avue-form-design-3
```

或自行引入cdn

## 安装

### 组件

```sh
$ npm i avue-form-design-3
或
$ yarn add avue-form-design-3
```


## 使用

```
import AvueFormDesign from '@sscfaith/avue-form-design'

Vue.use(AvueFormDesign)
```

```
<avue-form-design style="height: 86vh;"   :options="options" storage @submit="handleSubmit"></avue-form-design>
```

### 属性

| 参数 | 说明 | 类型 | 默认值 |
| ------ | ------ | ------ | ------ |
| options | 字段配置 | Object/String | { column: [] } |
| storage | 开启本地存储功能，防止浏览器刷新丢失json | Boolean | false |
| asideLeftWidth | 左工具栏宽度 | String/Number | '270px' |
| asideRightWidth | 右工具栏宽度 | String/Number | '380px' |
| showAvueDoc（已废弃，请使用toolbar） | 是否显示Avue文档 | Boolean | false |
| showGithubStar | 是否显示GitHub Star | Boolean | true |
| toolbar | 顶部工具栏 | Array | ['avue-doc', 'import', 'generate', 'preview', 'clear'] |
| undoRedo | 是否开启撤销重做功能 | Boolean | true |
| includeFields | 左侧展示字段 | Array | fieldsConfig.js中配置的字段 |
| customFields | 自定义组件 | Array | [使用方法](https://github.com/sscfaith/avue-form-design/blob/master/CHANGELOG.md#2020-09-22) |

### options字段配置

<a href="https://avuejs.com/form/form.html" target="_blank">Avue文档</a>

| 属性 | 说明 | 类型 | 可选值 | 默认值 |
| ------| ------ | ------ | ------ | ------ |
| column | Avue字段 | Array | - | [] |
| labelPosition | 字段位置 |  String | 'left'/'center'/'right' | - |
| labelWidth | 字段宽度 | Number | - | - |
| gutter | 字段间隔 | Number | - | 0 |
| menuBtn | 表单按钮 | Boolean | true/false | true |
| submitBtn | 显示提交按钮 | Boolean | true/false | true |
| submitText | 提交按钮文本 | String | - | '提交' |
| emptyBtn | 显示清空按钮 | Boolean | true/false | true |
| emptyText | 清空按钮文本 | String | - | '清空' |
| tabs | 多分组转标签 | Boolean | true/false | false |
| detail | 详情模式 | Boolean | true/false | false |
| readonly | 全局只读 | Boolean | true/false | false |
| disabled | 全局禁用 | Boolean | true/false | false |

### 事件

| 名称 | 说明 | 回调参数 |
| ------ | ------ | ------ |
| submit | 生成json回调 | 当前配置的json |

### 方法

| 名称 | 说明 | 参数 | 返回 |
| ------ | ------ | ------ | ------ |
| getData | 获取当前编辑器的JSON | type: 'string'/'json' | Promise |

### 插槽
| 名称 | 说明 |
| ------ | ------ | 
| toolbar | 顶部工具栏右侧插槽 | 
| toolbar-left | 顶部工具栏左侧插槽 | 

### Avue插件

#### 富文本

```
import AvueUeditor from 'avue-plugin-ueditor'

Vue.use(AvueUeditor)
```
 