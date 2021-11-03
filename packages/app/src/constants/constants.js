export const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://stricklersigns.trackwayz.com/api/'
    : 'http://stricklersigns.trackwayz.com/api/';

export const fontFamily = {
  regular: 'Typold Regular',
  bold: 'Typold Bold',
  medium: 'Typold Medium',
  book: 'Typold Book',
  extraBold: 'Typold ExtraBold',
  thin: 'Typold Thin',
};
