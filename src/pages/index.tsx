import React from 'react'
import { GetStaticProps } from 'next'

import JsonSchema from 'components/JsonSchema'
import client from 'graphql/client'
import GET_HOME from 'graphql/queries/getHome'
import { HomePageProps } from 'types/api'
import HomeHeader from 'components/HomeHeader'
import SectionProjects from 'components/SectionProjects'
import SectionWorkFields from 'components/SectionWorkFields'
import SectionDownload from 'components/SectionDownload'
import Container from 'components/Container'

const Index = ({ logo, homeHeader }: HomePageProps) => (
  <Container>
    <HomeHeader />
    <SectionProjects />
    <SectionWorkFields />
    <SectionDownload />
    <JsonSchema />
  </Container>
)

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.request(GET_HOME)

  return {
    props: {
      ...home
    }
  }
}

export default Index
