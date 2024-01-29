# Responsive Menu - responsive-menu

Paczka dostarczająca responsywne menu

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
git clone git@github.com:imengyu/vue3-context-menu.git
cd vue3-context-menu
npm install
npm run dev # Development serve project
npm run build-demo # Build example project
npm run build-lib # Build library project
```
