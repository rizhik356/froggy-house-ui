import { Box, Collapse, List } from '@mui/material'

import styles from '../scss/styles.module.scss'
import { makeListItems } from '../utils/makeListItems.tsx'
import { menuItems } from '../constants/menuItems.tsx'
import { useEffect, useMemo, useState } from 'react'
import type { ListItemClick, MenuItem } from '../model/types/SideMenuTypes.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'

const SideMenu = () => {
  const [selectedListItem, setSelectedListItem] = useState<MenuItem['id']>('')
  const { isCollapsed } = useAppSelector((state) => state.header)

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
    <Collapse in={!isCollapsed} orientation="horizontal" timeout={300}>
      <Box className={styles.side_menu}>
        <nav aria-label={'side_menu'}>
          <List>{listItems}</List>
        </nav>
      </Box>
    </Collapse>
  )
}

export default SideMenu
