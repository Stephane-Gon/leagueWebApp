export default () => ({
  bg: '#ebedef',
  purpleDark: '#11141b',
  prple: '#1b2842',
  white: '#ffffff',
  offWhite: '#f3f5f7',
  offWhiteDark: '#f9f9f9',
  black: '#000000',
  danger: '#e55353',
  danger10: '#FFF2F2',
  warning: '#f9b115',
  success: '#2eb85c',
  success10: '#F2FFF6',
  primary: '#321fdb',
  primary10: '#F4F2FF',
  secondaryColor: '#CED2D8',
  darkColor: '#636f83',
  lightColor: '#ebedef',
  gray100Color: '#EBEDEF',
  gray200Color: '#d8dbe0',
  gray300Color: '#c4c9d0',
  gray400Color: '#b1b7c1',
  gray600Color: '#8a93a2',
  gray500Color: '#9da5b1',
  gray700Color: '#768192',
  gray900Color: '#4f5d73',
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