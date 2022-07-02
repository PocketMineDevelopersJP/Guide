import clsx from 'clsx'
import React from 'react'

import styles from './index.module.css'

export interface MessageProps {
  color?: 'primary' | 'secondary'
  avatar: '1' | '2' | '3' | '4' | '5'
}

export const Message: React.FC<React.PropsWithChildren<MessageProps>> = ({
  children,
  color = 'secondary',
  avatar,
}) => {
  return (
    <div className={styles.root}>
      <img
        className={styles.avatar}
        src={`https://cdn.discordapp.com/embed/avatars/${avatar}.png`}
      />
      <div className={clsx(styles.message, styles[color])}>{children}</div>
    </div>
  )
}
