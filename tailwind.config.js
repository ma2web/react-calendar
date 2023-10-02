/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      primary: '#F2994A',
      gray: '#888',
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        light: {
          1: '#4D74FF',
          2: '#6688FF',
        },
        base: '#3361FF',
        dark: {
          1: '#194DFF',
          2: '#0039FF',
        },
      },
      green: {
        light: {
          1: '#45E655',
          2: '#66FF75',
        },
        base: '#29CC39',
        dark: {
          1: '#13BF24',
          2: '#00B211',
        },
      },
      pink: {
        light: {
          1: '#F24990',
          2: '#FF66A6',
        },
        base: '#E62E7B',
        dark: {
          1: '#D91668',
          2: '#CC0056',
        },
      },
      purple: {
        light: {
          1: '#974DFF',
          2: '#A666FF',
        },
        base: '#8833FF',
        dark: {
          1: '#7919FF',
          2: '#6A00FF',
        },
      },
      orange: {
        light: {
          1: '#FF794D',
          2: '#FF8D66',
        },
        base: '#FF6633',
        dark: {
          1: '#E64B17',
          2: '#CC4314',
        },
      },
      teal: {
        light: {
          1: '#4DC7FF',
          2: '#66CFFF',
        },
        base: '#33BFFF',
        dark: {
          1: '#17A5E6',
          2: '#008CCC',
        },
      },
      red: {
        light: {
          1: '#F24949',
          2: '#FF6666',
        },
        base: '#E62E2E',
        dark: {
          1: '#CC1414',
          2: '#B20000',
        },
      },
      yellow: {
        light: {
          1: '#FFD559',
          2: '#FFDD78',
        },
        base: '#FFCB33',
        dark: {
          1: '#E6B117',
          2: '#D9A200',
        },
      },
      bronze: {
        light: {
          1: '#D98741',
          2: '#E69B5C',
        },
        base: '#CC7429',
        dark: {
          1: '#B35C12',
          2: '#994700',
        },
      },
      tiffany: {
        light: {
          1: '#49F2D8',
          2: '#66FFE8',
        },
        base: '#2EE6CA',
        dark: {
          1: '#14CCB0',
          2: '#00B397',
        },
      },
      gray_blue: {
        10: '#0D111A',
        15: '#131926',
        20: '#1A2233',
        25: '#202B40',
        30: '#26334D',
        35: '#2D3C59',
        40: '#334466',
        45: '#3F5073',
        50: '#4D5E80',
        55: '#62708C',
        60: '#6B7A99',
        65: '#7C8AA6',
        70: '#7D8FB3',
        75: '#99A6BF',
        80: '#ADB8CC',
        85: '#C3CAD9',
        90: '#DADEE6',
        91: '#DCE0E8',
        92: '#DFE3EB',
        93: '#E1E5ED',
        94: '#E4E7F0',
        95: '#EDEFF2',
        96: '#F2F3F5',
        97: '#F5F6F7',
        98: '#F7F8FA',
        99: '#FAFBFC',
      },
    },
    backgroundImage: {
      common_gradient:
        'linear-gradient(17.37deg, #171449 0.96%, rgba(0, 0, 0, 0) 34.59%), linear-gradient(39.28deg, rgba(53, 28, 93, 0.8) 15.49%, rgba(0, 0, 0, 0) 56.1%), linear-gradient(197.31deg, #361C5D 0%, rgba(58, 30, 96, 0.17) 27.51%), #0F1144;',
      entrance_background:
        "url('/assets/images/png/login_background_image.png')",
      smart_way_background: "url('/assets/images/home/smart_way.png')",
      ecosystem_background:
        "url('/assets/images/home/ecosystem_background.png')",
      services_background: "url('/assets/images/home/services.png')",
      contactus_background:
        "url('/assets/images/home/contactus_background.png')",
      map_background: "url('/assets/images/about/map_background.png')",
      newest_background: "url('/assets/images/home/newest_background.png')",
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      manrope: ['Manrope', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      openSans: ['OpenSans', 'sans-serif'],
    },
    screens: {
      mobile: '360px',
      tablet: '768px',
      laptop: '1024px',
      desktop: '1200px',
      ultra: '1600px',
    },
    fontSize: {
      'black-8': [
        '8px',
        {
          lineHeight: '20px',
          fontWeight: '900',
        },
      ],
      'bold-8': [
        '8px',
        {
          lineHeight: '20px',
          fontWeight: '700',
        },
      ],
      'medium-8': [
        '8px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      'regular-8': [
        '8px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'light-8': [
        '8px',
        {
          lineHeight: '20px',
          fontWeight: '300',
        },
      ],
      'black-10': [
        '10px',
        {
          lineHeight: '20px',
          fontWeight: '900',
        },
      ],
      'bold-10': [
        '10px',
        {
          lineHeight: '20px',
          fontWeight: '700',
        },
      ],
      'medium-10': [
        '10px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      'regular-10': [
        '10px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'light-10': [
        '10px',
        {
          lineHeight: '20px',
          fontWeight: '300',
        },
      ],
      'black-12': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '900',
        },
      ],
      'bold-12': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '700',
        },
      ],
      'medium-12': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '500',
        },
      ],
      'regular-12': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '400',
        },
      ],
      'light-12': [
        '12px',
        {
          lineHeight: '20px',
          fontWeight: '300',
        },
      ],
      'black-13': [
        '13px',
        {
          lineHeight: '25px',
          fontWeight: '900',
        },
      ],
      'bold-13': [
        '13px',
        {
          lineHeight: '25px',
          fontWeight: '700',
        },
      ],
      'medium-13': [
        '13px',
        {
          lineHeight: '25px',
          fontWeight: '500',
        },
      ],
      'regular-13': [
        '13px',
        {
          lineHeight: '25px',
          fontWeight: '400',
        },
      ],
      'light-13': [
        '13px',
        {
          lineHeight: '25px',
          fontWeight: '300',
        },
      ],
      'black-14': [
        '14px',
        {
          lineHeight: '30px',
          fontWeight: '900',
        },
      ],
      'bold-14': [
        '14px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      'medium-14': [
        '14px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      'regular-14': [
        '14px',
        {
          lineHeight: '30px',
          fontWeight: '400',
        },
      ],
      'light-14': [
        '14px',
        {
          lineHeight: '30px',
          fontWeight: '300',
        },
      ],
      'black-15': [
        '15px',
        {
          lineHeight: '30px',
          fontWeight: '900',
        },
      ],
      'bold-15': [
        '15px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      'medium-15': [
        '15px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      'regular-15': [
        '15px',
        {
          lineHeight: '30px',
          fontWeight: '400',
        },
      ],
      'light-15': [
        '15px',
        {
          lineHeight: '30px',
          fontWeight: '300',
        },
      ],
      'black-16': [
        '16px',
        {
          lineHeight: '30px',
          fontWeight: '900',
        },
      ],
      'bold-16': [
        '16px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      'medium-16': [
        '16px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      'regular-16': [
        '16px',
        {
          lineHeight: '30px',
          fontWeight: '400',
        },
      ],
      'light-16': [
        '16px',
        {
          lineHeight: '30px',
          fontWeight: '300',
        },
      ],
      'black-18': [
        '18px',
        {
          lineHeight: '30px',
          fontWeight: '900',
        },
      ],
      'bold-18': [
        '18px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      'medium-18': [
        '18px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      'regular-18': [
        '18px',
        {
          lineHeight: '30px',
          fontWeight: '400',
        },
      ],
      'light-18': [
        '18px',
        {
          lineHeight: '30px',
          fontWeight: '300',
        },
      ],
      'black-20': [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: '900',
        },
      ],
      'bold-20': [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      'medium-20': [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      'regular-20': [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: '400',
        },
      ],
      'light-20': [
        '20px',
        {
          lineHeight: '30px',
          fontWeight: '300',
        },
      ],
      'black-22': [
        '22px',
        {
          lineHeight: '30px',
          fontWeight: '900',
        },
      ],
      'bold-22': [
        '22px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      'medium-22': [
        '22px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      'regular-22': [
        '22px',
        {
          lineHeight: '30px',
          fontWeight: '400',
        },
      ],
      'light-22': [
        '22px',
        {
          lineHeight: '30px',
          fontWeight: '300',
        },
      ],
      'black-24': [
        '24px',
        {
          lineHeight: '30px',
          fontWeight: '900',
        },
      ],
      'bold-24': [
        '24px',
        {
          lineHeight: '30px',
          fontWeight: '700',
        },
      ],
      'medium-24': [
        '24px',
        {
          lineHeight: '30px',
          fontWeight: '500',
        },
      ],
      'regular-24': [
        '24px',
        {
          lineHeight: '30px',
          fontWeight: '400',
        },
      ],
      'light-24': [
        '24px',
        {
          lineHeight: '30px',
          fontWeight: '300',
        },
      ],
      'black-30': [
        '30px',
        {
          lineHeight: '50px',
          fontWeight: '900',
        },
      ],
      'bold-30': [
        '30px',
        {
          lineHeight: '50px',
          fontWeight: '700',
        },
      ],
      'medium-30': [
        '30px',
        {
          lineHeight: '50px',
          fontWeight: '500',
        },
      ],
      'regular-30': [
        '30px',
        {
          lineHeight: '50px',
          fontWeight: '400',
        },
      ],
      'light-30': [
        '30px',
        {
          lineHeight: '50px',
          fontWeight: '300',
        },
      ],
      'black-36': [
        '36px',
        {
          lineHeight: '60px',
          fontWeight: '900',
        },
      ],
      'bold-36': [
        '36px',
        {
          lineHeight: '60px',
          fontWeight: '700',
        },
      ],
      'medium-36': [
        '36px',
        {
          lineHeight: '60px',
          fontWeight: '500',
        },
      ],
      'regular-36': [
        '36px',
        {
          lineHeight: '60px',
          fontWeight: '400',
        },
      ],
      'light-36': [
        '36px',
        {
          lineHeight: '60px',
          fontWeight: '300',
        },
      ],
      'black-48': [
        '48px',
        {
          lineHeight: '70px',
          fontWeight: '900',
        },
      ],
      'bold-48': [
        '48px',
        {
          lineHeight: '70px',
          fontWeight: '700',
        },
      ],
      'medium-48': [
        '48px',
        {
          lineHeight: '70px',
          fontWeight: '500',
        },
      ],
      'regular-48': [
        '48px',
        {
          lineHeight: '70px',
          fontWeight: '400',
        },
      ],
      'light-48': [
        '48px',
        {
          lineHeight: '70px',
          fontWeight: '300',
        },
      ],
      'black-64': [
        '64px',
        {
          lineHeight: '90px',
          fontWeight: '900',
        },
      ],
      'bold-64': [
        '64px',
        {
          lineHeight: '90px',
          fontWeight: '700',
        },
      ],
      'medium-64': [
        '64px',
        {
          lineHeight: '90px',
          fontWeight: '500',
        },
      ],
      'regular-64': [
        '64px',
        {
          lineHeight: '90px',
          fontWeight: '400',
        },
      ],
      'light-64': [
        '64px',
        {
          lineHeight: '90px',
          fontWeight: '300',
        },
      ],
    },
    extend: {
      boxShadow: {
        light_shadow: '0px 2px 5px rgba(38, 51, 77, 0.03)',
        medium_shadow: '0px 2px 5px rgba(136, 51, 255, 0.1)',
        entrance_box_shadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        shadow_gray_blue: ' 0px 10px 30px rgba(38, 51, 77, 0.05)',
        box_details_shadow: '0px 2px 5px rgba(38, 51, 77, 0.03)',
      },
      dropShadow: {
        light_shadow_red: '0px 10px 30px rgba(255, 102, 51, 0.3)',
      },
      colors: {
        primary: '#F2994A',
        secondary: '#2CB58C',
      },
    },
  },
  plugins: [],
};
