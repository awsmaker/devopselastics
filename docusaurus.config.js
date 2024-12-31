module.exports = {
  // ... autres configurations ...
  
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      style: {
        background: 'rgba(5, 8, 22, 0.8)',
        backdropFilter: 'blur(10px)',
      },
      // ... autres configurations de la navbar
    },
    stylesheets: [
        // ...existing stylesheets...
        {
          href: '/css/custom.css',
          type: 'text/css',
        },
      ],
    // ... autres configurations du thème
  },
}; 