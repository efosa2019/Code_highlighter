const STRINGS_REGEX = /([''])/g;
const OPERATORS_REGEX = /[^'='][+&=|!-]{1,}/g;
const BLOCK_COMMENTS_REGEX = /(\/\*.*?\/)/gs;
const BLOCK_COMMENT_WITH_KEYWORDS_REGEX = /(?:\/\*(?:.*?)(@\w*).*?\/)/gs;
const CONSTANT_REGEX = /\s([A-Z_-]{2,})/g;
const KEYWORDS_REGEX = /var|let|const|import|from|export|return|if|else|for|function/g;

export default function parse(text) {
  const commentText = text

    .replace(OPERATORS_REGEX, (a) => `<span class="operator">${a}</span>`)
    .replace(STRINGS_REGEX, (a) => `<span class="strings">${a}</span>`)

    .replace(
      BLOCK_COMMENTS_REGEX,
      (a) => `<span class="blockComments">${a}</span>`
    )
    .replace(BLOCK_COMMENT_WITH_KEYWORDS_REGEX, (a, b) => {
      return a.replace(/.+/g, (eachCommentLine) => {
        const commentWithKeyWord = eachCommentLine.replace(
          b,
          `<span class='commentKeyWord'>${b}</span>`
        );

        return commentWithKeyWord;
      });
    })

    .replace(KEYWORDS_REGEX, (a) => `<span class="keywords">${a}</span>`)
    .replace(CONSTANT_REGEX, (a) => `<span class="constant">${a}</span>`);

  return commentText;
}
