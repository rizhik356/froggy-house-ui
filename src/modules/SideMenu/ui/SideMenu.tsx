import { Box, Collapse, List, useMediaQuery, useTheme } from '@mui/material'

import styles from '../scss/styles.module.scss'
import { makeListItems } from '../utils/makeListItems.tsx'
import { menuItems } from '../constants/menuItems.tsx'
import { useEffect, useMemo, useState } from 'react'
import type { ListItemClick, MenuItem } from '../model/types/SideMenuTypes.ts'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../../app/hooks/storeHooks.ts'
import { useDispatch } from 'react-redux'
import { headerActions } from '../../Header/model/slices/headerSlice.ts'

const SideMenu = () => {
  const [selectedListItem, setSelectedListItem] = useState<MenuItem['id']>('')
  const { isCollapsed } = useAppSelector((state) => state.header)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const pathname = location.pathname
    setSelectedListItem(pathname)
  }, [location])

  const handleListItemClick: ListItemClick = (id) => {
    if (id) {
      navigate(id)
    }
    if (isMobile) {
      dispatch(headerActions.setCollapsed())
    }
  }

  const listItems = useMemo(() => {
    return makeListItems(menuItems, selectedListItem, handleListItemClick)
  }, [selectedListItem])

  return (
    <Collapse
      className={isMobile ? styles.collapse_mobile : ''}
      in={!isCollapsed}
      orientation="horizontal"
      timeout={300}
    >
      <Box className={styles.side_menu}>
        <nav aria-label={'side_menu'}>
          <List>{listItems}</List>
        </nav>
      </Box>
    </Collapse>
  )
}

export default SideMenu
