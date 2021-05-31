module.exports = {
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    // If you want to use styled components you should add the plugin here.
    // 'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DBYS Covid Helpline',
        short_name: 'CoviHelp',
        start_url: '/',
        background: '#f7f0eb',
        theme_color: '#556cd6',
        display: 'standalone',
        icon: 'content/dbys_inp_logo.jpg'
      }
    },
    'gatsby-plugin-offline'
  ],
  siteMetadata: {
    title: 'DBYS Covid Helpline',
    description: 'Covid helpline sheet, by the Salesians of Don Bosco. INFORMATION VERIFIED BY OUR VOLUNTEERS ON A DAILY BASIS',
    keywords: ['Covid', 'Goa'],
    menuLinks: [
      {
        name: 'Home',
        link: '/'
      },
      {
        name: 'Hospitals + Care Centers',
        link: '/hospital'
      },
      {
        name: 'Ambulances',
        link: '/ambulance'
      },
      {
        name: 'Test Centers',
        link: '/testcenter'
      },
      {
        name: 'Oxygen Suppliers',
        link: '/oxygen'
      },
      {
        name: 'Cooked Food',
        link: '/food'
      },
      {
        name: 'Groceries/Kits',
        link: '/grocery'
      },
      {
        name: 'Counsellors',
        link: '/counsellor'
      },
      {
        name: 'Pharmacies',
        link: '/pharmacy'
      },
    ]
  },
};
