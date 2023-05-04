import { ReactNode } from 'react'

export interface IModalHandle {
  openModal: () => void
  closeModal: () => void
}

export interface IModalProps {
  children: ReactNode
  title?: string
}
