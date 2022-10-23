import React from 'react'
import { GetStaticProps } from 'next'

import JsonSchema from 'components/JsonSchema'
import client from 'graphql/client'
import GET_HOME from 'graphql/queries/getHome'
import { HomePageProps } from 'types/api'

import Header from 'components/Header'
import Footer from 'components/Footer'
import HomeHeader from 'components/HomeHeader'
import SectionProjects from 'components/SectionProjects'
import SectionDownload from 'components/SectionDownload'
import Container from 'components/Container'
import SectionAbout from 'components/SectionAbout'
import SectionContact from 'components/SectionContact'

const Index = ({
  logo,
  homeHeader,
  projectsSection,
  sectionAbout,
  infoListSection,
  contactSection,
  downloadModule
}: HomePageProps) => {
  return (
    <>
      <Header logo={logo} />
      <Container>
        <HomeHeader homeHeader={homeHeader} />
        <SectionProjects projectsSection={projectsSection} />
        <SectionAbout
          aboutSection={sectionAbout}
          infoListSection={infoListSection}
        />
        <SectionContact contactSection={contactSection} />
        <SectionDownload downloadModule={downloadModule} />
        <JsonSchema />
      </Container>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { home } = await client.request(GET_HOME)

  return {
    props: {
      ...home
    }
  }
}

export default Index
