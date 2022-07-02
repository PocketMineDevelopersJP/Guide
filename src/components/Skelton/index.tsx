import React from 'react'
import styles from './index.module.css'

export interface SkeltonProps {
  width: string | number
  height: string | number
}

export const Skelton: React.FC<SkeltonProps> = ({ height, width }) => {
  return <div className={styles.root} style={{ width, height }} />
}
