import textStore from './textStore';

/**
 * @description if can not found the text, throw error
 * @param {string} path - the path of the text
 * */
const notFoundError = (path) => {
  throw new Error(`text not found. path: "${path}"`);
};
/**
 * @description get the text form the textStore
 * @param {string} language
 * @param {string} path - the path of the text
 * @param {object} replace - replace target words in text
 * @example
 * i18n({
 *   path: 'user.addressButton',
 *   language,
 *   replace: {
 *     name: 'John',
 *   },
 * })
 * @return {string|object}
 * */
export default function i18n({ path, replace = {} }) {
  const pathArray = path.split('.');
  let textData = textStore;

  // get the data
  pathArray.forEach((pathData) => {
    if (textData[pathData] === undefined) {
      notFoundError(path);
    }
    textData = textData[pathData];
  });

  // check the return type
  if (typeof textData !== 'string') {
    notFoundError(path);
  }

  // replace words
  const replaceList = Object.keys(replace);
  if (replaceList.length !== 0) {
    replaceList.forEach((replaceKey) => {
      textData = textData.replace(`{${replaceKey}}`, replace[replaceKey]);
    });
  }

  return textData;
}
