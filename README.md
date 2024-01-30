# 👷🏻‍♂️ [In progress] 👷🏻‍♂️  Responsive Menu - responsive-menu 

A Vue.js responsive menu component

## Item Propertis

```js
menu: [
  {
    label: "Menu 1",
  },
  {
    label: "Menu 2",
  }, 
  {
    label: "Menu 3",
  },
  {
    label: "Menu 4",
    wrap: false, // opctional
    wrapSubmenu: false, // opctional
    submenu: [
      {
        label: "Menu 4_1",
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

## Development

```shell
git clone git@github.com:barszczuPro/vue3-responsive-menu.git
cd vue3-responsive-menu
npm install
npm run dev # Development serve project
npm run build:demo # Build example project
npm run build:liblary # Build library project
```
