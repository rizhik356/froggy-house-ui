import DevicesOther from '@mui/icons-material/Inbox'
import AlarmOutlinedIcon from '@mui/icons-material/AlarmOutlined'
import AssessmentIcon from '@mui/icons-material/Assessment'
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom'
import styles from '../scss/styles.module.scss'
import type { MenuItems } from '../model/types/SideMenuTypes.ts'
import { paths } from '../../../constants'

const menuItems: MenuItems = [
  {
    listItemDisablePadding: true,
    listItemClass: styles.list_item,
    itemText: 'Устройства',
    itemIcon: <DevicesOther />,
    id: paths.MAIN,
  },
  {
    listItemDisablePadding: true,
    listItemClass: styles.list_item,
    itemText: 'Семья',
    itemIcon: <FamilyRestroomIcon />,
    id: paths.FAMILY,
  },
  {
    listItemDisablePadding: true,
    listItemClass: styles.list_item,
    itemText: 'Сценарии',
    itemIcon: <AlarmOutlinedIcon />,
    id: paths.SCHEDULE,
  },
  {
    listItemDisablePadding: true,
    listItemClass: styles.list_item,
    itemText: 'Отчеты',
    itemIcon: <AssessmentIcon />,
    id: paths.REPORTS,
  },
]

export { menuItems }
