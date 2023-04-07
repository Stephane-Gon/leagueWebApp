export default () => ({
  white: '#ffffff',
  black: '#000000',
  danger: '#e55353',
  warning: '#f9b115',
  success: '#2eb85c',
  primary: '#321fdb',
  blue1Color: '#CDFAFA',
  blue2Color: '#0AC8B9',
  blue3Color: '#0397AB',
  blue4Color: '#005A82',
  blue5Color: '#0A323C',
  blue6Color: '#091428',
  blue7Color: '#0A1428',
  gold1Color: '#F0E6D2',
  gold2Color: '#C8AA6E',
  gold3Color: '#C89B3C',
  gold4Color: '#785A28',
  gold5Color: '#463714',
  gold6Color: '#32281E',
  lightColor: '#ebedef',
  gray1Color: '#A09B8C',
  gray2Color: '#5B5A56',
  gray3Color: '#3C3C41',
  gray4Color: '#1E2328',
  gray5Color: '#1E282D',
  hextechBlackColor: '#010A13',
  em: (val : any, baseline: any) => `${val / baseline}em`,
});


export const sizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  startTablet: '620px',
  tablet: '845px',
  laptop: '1100px',
  laptopL: '1440px',
  desktop: '2560px',
}

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  mobileM: `(min-width: ${sizes.mobileM})`,
  mobileL: `(min-width: ${sizes.mobileL})`,
  startTablet: `(min-width: ${sizes.startTablet})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
}

export const devicesMax = {
  mobileS: `(max-width: ${sizes.mobileS})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileL: `(max-width: ${sizes.mobileL})`,
  startTablet: `(max-width: ${sizes.startTablet})`,
  tablet: `(max-width: ${sizes.tablet})`,
  laptop: `(max-width: ${sizes.laptop})`,
  laptopL: `(max-width: ${sizes.laptopL})`,
  desktop: `(max-width: ${sizes.desktop})`,
}