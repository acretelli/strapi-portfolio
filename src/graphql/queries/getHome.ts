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
    }
  }

  query GET_HOME {
    home {
      ...logo
      ...homeHeader
    }
  }
`
export default GET_HOME
