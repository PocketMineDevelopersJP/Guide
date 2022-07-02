import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'

import styles from './index.module.css'
import { Message } from '../components/Message'
import { Skelton } from '../components/Skelton'

const Header: React.FC = () => {
  return (
    <header className={clsx('container', styles.hero)}>
      <div>
        <h1 className={styles.title}>The Minecraft Community</h1>
        <p className={styles.paragraph}>
          <strong>server.mcbe.jp</strong>は日本のMinecraft Bedrock
          Editionを扱うユーザーを対象としたコミュニティです。
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--lg button--primary"
            to="/community/intro"
          >
            詳細
          </Link>
        </div>
      </div>
      <div className={styles.chat}>
        <Message avatar="3">
          <div className={styles.messages}>
            <Skelton height=".5rem" width="15rem" />
            <Skelton height=".5rem" width="80%" />
          </div>
        </Message>
        <Message avatar="2">
          <div className={styles.messages}>
            <Skelton height=".5rem" width="17rem" />
            <Skelton height=".5rem" width="95%" />
          </div>
        </Message>
        <Message avatar="1">
          <div className={styles.messages}>
            <Skelton height=".5rem" width="18rem" />
            <Skelton height=".5rem" width="70%" />
            <Skelton height=".5rem" width="50%" />
          </div>
        </Message>
      </div>
    </header>
  )
}

export default function Home() {
  return (
    <Layout>
      <Header />
    </Layout>
  )
}
