export type LogoProps = {
  alternativeText: string
  url: string
}

export type HomeHeaderProps = {
  title: string
  subtitle: string
  intro: string
  media: {
    url: string
    alternativeText: string
  }
}

export type HomePageProps = {
  logo: LogoProps
  homeHeader: HomeHeaderProps
}
