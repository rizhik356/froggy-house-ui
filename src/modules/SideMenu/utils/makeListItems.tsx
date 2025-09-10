import type {
  ListItemClick,
  MenuItem,
  MenuItems,
} from '../model/types/SideMenuTypes.ts'
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'

const makeListItems = (
  items: MenuItems,
  selectedId: MenuItem['id'],
  onClick: ListItemClick,
) => {
  return items.map((item) => {
    return (
      <ListItem
        key={item.id}
        className={item.listItemClass}
        disablePadding={item.listItemDisablePadding}
      >
        <ListItemButton
          selected={selectedId === item.id}
          onClick={() => onClick(item.id)}
        >
          {!!item.itemIcon && <ListItemIcon>{item.itemIcon}</ListItemIcon>}
          <ListItemText primary={item.itemText} />
        </ListItemButton>
      </ListItem>
    )
  })
}

export { makeListItems }
