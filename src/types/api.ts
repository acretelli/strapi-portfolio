export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type SocialButtonsProps = {
  id: string
  image: {
    url: string
    alternativeText: string
  }
  label: string
  url: string
}

export type SkillsProps = {
  id: string
  skills: string
  url: string
}

export type ListProps = {
  id: string
  title: string
  text: string
  yearStart: number
  yearEnd: number
}

export type MediaProps = {
  url: string
  alternativeText: string
}

export type MediaTextProps = {
  text: string
  media: MediaProps[]
}

export type ProjectsProps = {
  id: string
  title: string
  subtitle: string
  description: string
  skills: SkillsProps[]
  media: {
    url: string
    alternativeText: string
  }
  mediaText: MediaTextProps[]
}

export type HomeHeaderProps = {
  title: string
  subtitle: string
  intro: string
  media: {
    url: string
    alternativeText: string
  }
  backgroundImage: {
    url: string
    alternativeText: string
  }
  skills: SkillsProps[]
}

export type ProjectsSectionProps = {
  title: string
  subtitle: string
  projects: ProjectsProps[]
  button: ButtonProps
}

export type AboutSectionProps = {
  title: string
  subtitle: string
  description: string
  media: {
    alternativeText: string
    url: string
  }
}

export type InfoListSectionProps = {
  title: string
  subtitle: string
  list: ListProps[]
}

export type ContactSectionProps = {
  title: string
  subtitle: string
  socialBtns: SocialButtonsProps[]
}

export type DownloadModuleProps = {
  text: string
  downloadButton: {
    id: string
    label: string
    url: string
  }
}

export type SkillsDetailsProps = {
  id: string
  title: string
  subtitle: string
  description: string
  media: MediaProps
  slug: string
}

export type HomePageProps = {
  logo: LogoProps
  homeHeader: HomeHeaderProps
  projectsSection: ProjectsSectionProps
  sectionAbout: AboutSectionProps
  infoListSection: InfoListSectionProps[]
  contactSection: ContactSectionProps
  downloadModule: DownloadModuleProps[]
  SkillsDetails: SkillsDetailsProps[]
}
