import type { ReactNode } from 'react'

export type MenuItem = {
  listItemDisablePadding?: boolean
  listItemClass?: string
  itemText: string
  itemIcon?: ReactNode
  id?: string
}

export type ListItemClick = (id: MenuItem['id']) => void

export type MenuItems = Array<MenuItem>
