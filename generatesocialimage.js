export default function generateSocialImage({
    title,
    titleFont = 'Alliance-No-1-ExtraBold.otf',
    textColor = '000000',
    titleFontSize = 64,
    textAreaWidth = 800,
    textLeftOffset = 205,
    titleBottomOffset = 310,
    titleExtraConfig = '',
    cloudName,
    cloudinaryUrlBase = 'https://res.cloudinary.com',
    imageWidth = 1280,
    imageHeight = 669,
    version = null,
    imagePublicID,
    // overlay image configurations
    overlayImageOnePublicID,
    overlayImageTwoPublicID,
    overlayImageWidth = 101,
    overlayImageHeight = 101,
    overlayImageGravity = 'center',
    overlayImageOneY = 233,
    overlayImageOneX = -78,
    overlayImageTwoY = 233,
    overlayImageTwoX = 425,
    overlayImageRadius = 'max',
    // date configurations
    dateHeading,
    dateAreaWidth = 790,
    dateLeftOffset = 808,
    dateBottomOffset = 516,
    dateFont = 'Alliance-No-1-SemiBold.otf',
    dateFontSize = 21,
    dateColor = '545759',
    dateExtraConfig = '',
    // host name configuration
    hostNameHeading,
    hostNameColor = '000000',
    hostNameFont = 'Alliance-No-1-SemiBold.otf',
    hostNameExtraConfig = '',
    hostNameLeftOffset = 183,
    hostNameBottomOffset = 110,
    hostNameFontSize = 30,
    hostNameAreaWidth = 760,
    // guest name configurations
    guestNameHeading,
    guestNameColor = '000000',
    guestNameFont = 'Alliance-No-1-SemiBold.otf',
    guestNameExtraConfig = '',
    guestNameLeftOffset = 690,
    guestNameBottomOffset = 110,
    guestNameFontSize = 30,
    guestNameAreaWidth = 760,
    // host title configuration
    hostTitleHeading,
    hostTitleColor = '545759',
    hostTitleFont = 'SFMono-Medium.otf',
    hostTitleExtraConfig = '',
    hostTitleLeftOffset = 200,
    hostTitleBottomOffset = 83,
    hostTitleFontSize = 22,
    hostTitleAreaWidth = 760,
    // guest title configuration
    guestTitleHeading,
    guestTitleColor = '545759',
    guestTitleFont = 'SFMono-Medium.otf',
    guestTitleExtraConfig = '',
    guestTitleLeftOffset = 707,
    guestTitleBottomOffset = 83,
    guestTitleFontSize = 22,
    guestTitleAreaWidth = 760,

    // host company configuration
    hostCompanyHeading,
    hostCompanyColor = '545759',
    hostCompanyFont = 'SFMono-Regular.otf',
    hostCompanyExtraConfig = '',
    hostCompanyLeftOffset = 408,
    hostCompanyBottomOffset = 59,
    hostCompanyFontSize = 22,
    hostCompanyAreaWidth = 760,

    // guest company configuration
    guestCompanyHeading,
    guestCompanyColor = '545759',
    guestCompanyFont = 'SFMono-Regular.otf',
    guestCompanyExtraConfig = '',
    guestCompanyLeftOffset = 915,
    guestCompanyBottomOffset = 59,
    guestCompanyFontSize = 22,
    guestCompanyAreaWidth = 760,

}) {
    // configure social media image dimensions, quality, and format
    const imageConfig = [
        `w_${imageWidth}`,
        `h_${imageHeight}`,
        'c_fill',
        'q_auto',
        'f_auto',
    ].join(',');

    const overlayImageOneConfig = [
        `l_${overlayImageOnePublicID}`,
        `w_${overlayImageWidth}`,
        `h_${overlayImageHeight}`,
        `r_${overlayImageRadius}`,
        `g_${overlayImageGravity}`,
        `y_${overlayImageOneY}`,
        `x_${overlayImageOneX}`,
    ].join(',');

    const overlayImageTwoConfig = [
        `l_${overlayImageTwoPublicID}`,
        `w_${overlayImageWidth}`,
        `h_${overlayImageHeight}`,
        `r_${overlayImageRadius}`,
        `g_${overlayImageGravity}`,
        `y_${overlayImageTwoY}`,
        `x_${overlayImageTwoX}`,
    ].join(',');

    const titleConfig = [
        `w_${textAreaWidth}`,
        'c_fit',
        `co_rgb:${textColor}`,
        'g_south_west',
        `x_${textLeftOffset}`,
        `y_${titleBottomOffset}`,
        `l_text:${titleFont}_${titleFontSize}${titleExtraConfig}:${encodeURIComponent(
            title,
        )}`,
    ].join(',');

    const dateConfig = [
        `w_${dateAreaWidth}`,
        'c_fit',
        `co_rgb:${dateColor}`,
        'g_south_west',
        `x_${dateLeftOffset}`,
        `y_${dateBottomOffset}`,
        `l_text:${dateFont}_${dateFontSize}${dateExtraConfig}:${encodeURIComponent(
            dateHeading,
        )}`,
    ].join(',');


    const hostNameConfig = [
        `w_${hostNameAreaWidth}`,
        'c_fit',
        `co_rgb:${hostNameColor}`,
        'g_south_west',
        `x_${hostNameLeftOffset}`,
        `y_${hostNameBottomOffset}`,
        `l_text:${hostNameFont}_${hostNameFontSize}${hostNameExtraConfig}:${encodeURIComponent(
            hostNameHeading,
        )}`,
    ].join(',');

    const guestNameConfig = [
        `w_${guestNameAreaWidth}`,
        'c_fit',
        `co_rgb:${guestNameColor}`,
        'g_south_west',
        `x_${guestNameLeftOffset}`,
        `y_${guestNameBottomOffset}`,
        `l_text:${guestNameFont}_${guestNameFontSize}${guestNameExtraConfig}:${encodeURIComponent(
            guestNameHeading,
        )}`,
    ].join(',');

    const hostTitleConfig = [
        `w_${hostTitleAreaWidth}`,
        'c_fit',
        `co_rgb:${hostTitleColor}`,
        'g_south_west',
        `x_${hostTitleLeftOffset}`,
        `y_${hostTitleBottomOffset}`,
        `l_text:${hostTitleFont}_${hostTitleFontSize}${hostTitleExtraConfig}:${encodeURIComponent(
            hostTitleHeading,
        )}`,
    ].join(',');

    const guestTitleConfig = [
        `w_${guestTitleAreaWidth}`,
        'c_fit',
        `co_rgb:${guestTitleColor}`,
        'g_south_west',
        `x_${guestTitleLeftOffset}`,
        `y_${guestTitleBottomOffset}`,
        `l_text:${guestTitleFont}_${guestTitleFontSize}${guestTitleExtraConfig}:${encodeURIComponent(
            guestTitleHeading,
        )}`,
    ].join(',');

    const hostCompanyConfig = [
        `w_${hostCompanyAreaWidth}`,
        'c_fit',
        `co_rgb:${hostCompanyColor}`,
        'g_south_west',
        `x_${hostCompanyLeftOffset}`,
        `y_${hostCompanyBottomOffset}`,
        `l_text:${hostCompanyFont}_${hostCompanyFontSize}${hostCompanyExtraConfig}:${encodeURIComponent(
            hostCompanyHeading,
        )}`,
    ].join(',');

    const guestCompanyConfig = [
        `w_${guestCompanyAreaWidth}`,
        'c_fit',
        `co_rgb:${guestCompanyColor}`,
        'g_south_west',
        `x_${guestCompanyLeftOffset}`,
        `y_${guestCompanyBottomOffset}`,
        `l_text:${guestCompanyFont}_${guestCompanyFontSize}${guestCompanyExtraConfig}:${encodeURIComponent(
            guestCompanyHeading,
        )}`,
    ].join(',');

    // combine all the pieces required to generate a Cloudinary URL
    const urlParts = [
        cloudinaryUrlBase,
        cloudName,
        'image',
        'upload',
        imageConfig,
        version,
        overlayImageOneConfig,
        overlayImageTwoConfig,
        titleConfig,
        dateConfig,
        hostNameConfig,
        guestNameConfig,
        hostTitleConfig,
        guestTitleConfig,
        hostCompanyConfig,
        guestCompanyConfig,
        imagePublicID,
    ];

    // remove any falsy sections of the URL (e.g. an undefined version)
    const validParts = urlParts.filter(Boolean);

    // join all the parts into a valid URL to the generated image
    return validParts.join('/');
}

const socialImage = generateSocialImage({
    title: 'A visual editing experience in Next.js',
    dateHeading: 'Jan 00 2020 at 14:00-15:00',
    cloudName: 'githubrizel',
    imagePublicID: 'opensourcefriday/socialcard',
    overlayImageOnePublicID: 'rizel',
    overlayImageTwoPublicID: 'sample',
    hostNameHeading: 'Firstname Lastnamey',
    guestNameHeading: 'Firstname Lastnamey',
    hostTitleHeading: 'Really Expensive Title',
    guestTitleHeading: 'Really Expensive Title',
    hostCompanyHeading: 'GitHub',
    guestCompanyHeading: 'GitHub',
});

console.log(socialImage);