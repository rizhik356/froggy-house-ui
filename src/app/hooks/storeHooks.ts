import type { RootState } from '../store/store.ts'
import { type TypedUseSelectorHook, useSelector } from 'react-redux'

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export { useAppSelector }
