const cleanText = (str) => {
  return str
    .replace(/&amp;/g, "&")
    .replace(/%20/g, " ")
    .replace(/\\n/g, " ")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[`~!@#$%^*()_+=\[\]{}|\\;:'",<>/?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

module.exports = { cleanText };
