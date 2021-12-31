import getShareImage from '@jlengstorf/get-share-image';

const socialImage = getShareImage({
  title: 'Making contributions to ngrx/platform',
  cloudName: 'githubrizel',
  imagePublicID: 'portfolio/github-card',
  titleFont: 'Alliance-No-1-ExtraBold.otf',
  textColor: '232129',
  titleBottomOffset: '310',
  titleLeftOffset:'180'
});

console.log(socialImage)