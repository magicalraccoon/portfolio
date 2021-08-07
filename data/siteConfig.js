module.exports = {
  siteTitle: 'Hi, I\'m Sara Murray!',
  siteDescription: `Sara Murray's Online Portfolio`,
  keyWords: ['gatsbyjs', 'react', 'resume'],
  authorName: 'Sara Murray',
//  twitterUsername: 'null',
  githubUsername: 'magicalraccoon',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `✨ A remote focused, MacOS and Windows based SaaSOPs Administrator and IT Engineer.<br />
✨ Currently located in the California Bay Area.<br />
✨ An emphasis on <strong>friendly, timely, and responsive</strong> support.`,
  skills: [
    {
      name: 'Jamf',
      level: 70
    },
    {
      name: 'Meraki',
      level: 60
    },
    {
      name: 'Okta',
      level: 50
    },
    {
      name: 'Google Workspace',
      level: 60
    },
    {
      name: 'Office365',
      level: 60
    },
    {
      name: 'Freshservice',
      level: 80
    },
    {
      name: 'Python',
      level: 30
    }
    /* more skills here */
  ],
  jobs: [
    /* more jobs here */
    {
      company: "Neo4j, Inc.",
      begin: {
        month: 'jul',
        year: '2018'
      },
      duration: null,
      occupation: "IT Engineer, US",
      description: "Single point of contact for all US and APAC internal technical support. Provide end user account lifecycle management primarily in SaaS environments."
  
    // },  {
    //   company: "Explicabo",
    //   begin: {
    //     month: 'apr',
    //     year: '2018'
    //   },
    //   duration: null,
    //   occupation: "Frontend developer",
    //   description: "Sed impedit galisum id officia voluptas et voluptates dolorem ea quae consequatur At temporibus exercitationem."
  
    // }, {
    //   company: "Magnam",
    //   begin: {
    //     month: 'dec',
    //     year: '2016'
    //   },
    //   duration: '1 yr e 5 mos',
    //   occupation: "Fullstack developer",
    //   description: "Ut exercitationem quae ea libero veritatis sed ducimus omnis."
    // }, {
    //   company: "Reiciendis",
    //   begin: {
    //     month: 'set',
    //     year: '2012'
    //   },
    //   duration: '4 yrs e 3 mos',
    //   occupation: "Support Technician",
    //   description: "Sit natus dolor ex dolore exercitationem ea necessitatibus officia ut culpa omnis et provident nihil vel alias accusantium?"
  
},
  ],
   portifolio: [
  //   {
  //    image: "/images/gatsby-starter-cv.png",
  //    description: "Gatsby starter CV template",
  //    url: "https://www.gatsbyjs.org/starters/santosfrancisco/gatsby-starter-cv/"
  //   },
  //   {
  //    image: "/images/awesome-grid.png",
  //   description: "Responsive grid for ReactJS",
  //    url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
  //   },
  //   /* more portifolio items here */
   ],
  social: {
//    twitter: "https://twitter.com",
    linkedin: "https://www.linkedin.com/in/sara-m",
    github: "https://github.com/magicalraccoon",
    email: "saramurray@candypunk.io"
  },
  siteUrl: 'https://candypunk.io',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  fontColor: "#000000cc",
  enableDarkmode: true, // If true, enables dark mode switch
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Resume',
      url: '/resume',
    }
  ]
}