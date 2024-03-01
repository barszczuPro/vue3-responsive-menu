# 👷🏻‍♂️ [In progress] 👷🏻‍♂️  Responsive Menu - responsive-menu 

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

A Vue.js responsive menu component

## Demo

[vue3-responsive-menu](https://barszczupro.github.io/vue3-responsive-menu/)

## Item Propertis

```js
menu: [
  {
    label: "Menu 1",
    onClick: () => alert("Menu 1"),
    iconLeft: {
      name: 'x',
      options: {} // Look https://feathericons.com/
    },
    iconRight: {
      name: 'x',
      options: {} // Look https://feathericons.com/
    }
  },
  {
    label: "Menu 2",
    onClick: () => alert("Menu 1"),
  }, 
  {
    label: "Menu 3",
  },
  {
    label: "Menu 4",
    wrap: false, // Wrap main submenu item, default main submenu item and submenu items is not wrap
    wrapSubmenu: false, // Wrap submenu items, default main submenu and submenu items is not wrap
    submenu: [
      {
        label: "Menu 4_1",
        onClick: () => alert("Menu 4_1"),
      },
      {
        label: "Menu 4_2",
      },
      {
        label: "Menu 4_3",
      },
      {
        label: "Menu 4_4",
      }
    ]
  },
  
]
```

## Use Icon - [feathericons](https://feathericons.com/)

```js
iconLeft: {
  name: 'x',
  options: {
//      class: 'feather feather-x',
//      xmlns: 'http://www.w3.org/2000/svg',
//      width: 24,
//      height: 24,
//      viewBox: '0 0 24 24',
//      fill: 'none',
//      stroke: 'currentColor',
//      'stroke-width': 2,
//      'stroke-linecap': 'round',
//      'stroke-linejoin': 'round',
  }
}
```


## Config

#### Use config

```vue
<responsive-menu :items="[]" config="{
 labelMore: 'See more',
 mode: ''
}" />
```

```js
{
    iconMore: {
      name: 'x',
      options: {}
    }
    labelMore: '',
    mode: ''
}
```
#### Mode

| Name        | Value   | Type                | Description   |
|-------------|---------|---------------------|---------------|
| Default mode | Default | Default             | Default theme |
| Dark mode   | `dark`  | `string`            | Dark theme    |

## API

<table>
    <thead>
        <tr>
            <th>Component</th>
            <th>Prop</th>
            <th>Type</th>
            <th>Description</th>
            <th>Default</th>
        </tr>
    </thead>
    <tbody>
    </tbody>
</table>

## Styles

```json
  v-responsive-menu
  
  vrm__menu
    vrm__menu-items
      vrm__menu-item

  vrm__submenu
    vrm__submenu-items
      vrm__submenu-item

  vrm__more
  vrm__more-disabled
```

## Development

```shell
git clone git@github.com:barszczuPro/vue3-responsive-menu.git
cd vue3-responsive-menu
npm install
npm run dev # Development serve project
npm run build:demo # Build example project
npm run build:liblary # Build library project
```
