const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.itslebron.smartpantry.dev';
  }

  if (IS_PREVIEW) {
    return 'com.itslebron.smartpantry.preview';
  }

  return 'com.itslebron.smartpantry';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Smart Pantry (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Smart Pantry (Preview)';
  }

  return 'Smart Pantry: Emoji Stickers';
};

export default ({ config }) => ({
  ...config,
  name: getAppName(),
  ios: {
    ...config.ios,
    bundleIdentifier: getUniqueIdentifier(),
  },
  android: {
    ...config.android,
    package: getUniqueIdentifier(),
  },
});
