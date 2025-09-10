import { Box, List } from '@mui/material'

import styles from '../scss/styles.module.scss'
import { makeListItems } from '../utils/makeListItems.tsx'
import { menuItems } from '../constants/menuItems.tsx'
import { useEffect, useMemo, useState } from 'react'
import type { ListItemClick, MenuItem } from '../model/types/SideMenuTypes.ts'
import { useLocation, useNavigate } from 'react-router-dom'

const SideMenu = () => {
  const [selectedListItem, setSelectedListItem] = useState<MenuItem['id']>('')

  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const pathname = location.pathname
    setSelectedListItem(pathname)
  }, [location])

  const handleListItemClick: ListItemClick = (id) => {
    if (id) {
      navigate(id)
    }
  }

  const listItems = useMemo(() => {
    return makeListItems(menuItems, selectedListItem, handleListItemClick)
  }, [selectedListItem])

  return (
    <Box className={styles.side_menu}>
      <nav aria-label={'side_menu'}>
        <List>{listItems}</List>
      </nav>
    </Box>
  )
}

export default SideMenu
