module.exports = {
  isValidLicense: new RegExp(
    '\\b(mit|apache\\b.*2|bsd|0bsd|isc|mpl|unlicense|cc0?\\b.*[1-4].0)\\b',
    'i',
  ),
  ignorePackages: [
    // ODC-By-1.0 https://github.com/mattcg/language-subtag-registry/blob/master/LICENSE.md
    "language-subtag-registry"
  ],
};
