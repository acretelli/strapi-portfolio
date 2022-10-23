const GET_HOME = /* GraphQL */ `
  fragment logo on Home {
    logo {
      alternativeText
      url
    }
  }

  fragment homeHeader on Home {
    homeHeader {
      title
      subtitle
      intro
      media {
        url
        alternativeText
      }
      backgroundImage {
        url
        alternativeText
      }
      skills {
        id
        skills
      }
    }
  }
  fragment projectsSection on Home {
    projectsSection {
      title
      subtitle
      projects {
        title
        subtitle
        description
        media {
          url
          alternativeText
        }
        skills {
          skills
        }
        media {
          alternativeText
          url
        }
        mediaText {
          text
          media {
            alternativeText
            url
          }
        }
      }
      button {
        label
        url
      }
    }
  }

  fragment sectionAbout on Home {
    sectionAbout {
      title
      subtitle
      description
      media {
        alternativeText
        url
      }
    }
  }

  fragment infoListSection on Home {
    infoListSection {
      title
      subtitle
      list {
        id
        title
        text
        yearStart
        yearEnd
      }
    }
  }

  fragment contactSection on Home {
    contactSection {
      title
      subtitle
      socialBtns {
        id
        image {
          url
          alternativeText
        }
        label
        url
      }
    }
  }

  fragment downloadModule on Home {
    downloadModule {
      text
      downloadButton {
        id
        label
        url
      }
    }
  }

  query GET_HOME {
    home {
      ...logo
      ...homeHeader
      ...projectsSection
      ...sectionAbout
      ...infoListSection
      ...contactSection
      ...downloadModule
    }
  }
`
export default GET_HOME
