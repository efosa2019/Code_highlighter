const STRINGS_REGEX = /([''])/g;
const COMPARATORS_REGEX = /([^'='][&=|-]{1,})/g;
const BLOCK_COMMENTS_REGEX = /(\/\*.*?\/)/gs;
const BLOCK_COMMENT_WITH_KEYWORDS_REGEX = /(?:\/\*(?:.*?)(@\w*).*?\/)/gs;
const CONSTANT_REGEX = /\s([A-Z_-]{2,})/g;
const KEYWORDS_REGEX = /var|let|const|import|from|export|return|if|else|for|function/g;

function Parse(text) {
  const commentText = text
    .replace(COMPARATORS_REGEX, (a) => `<span class="comparators">${a}</span>`)
    .replace(STRINGS_REGEX, (a) => `<span class="strings">${a}</span>`)
    .replace(
      BLOCK_COMMENTS_REGEX,
      (a) => `<span class="blockComments">${a}</span>`
    )
    .replace(KEYWORDS_REGEX, (a) => `<span class="keywords">${a}</span>`)
    .replace(CONSTANT_REGEX, (a) => `<span class="constant">${a}</span>`)

    .replace(BLOCK_COMMENT_WITH_KEYWORDS_REGEX, (a, b) => {
      return a.replace(/.+/g, (eachCommentLine) => {
        const commentWithKeyWord = eachCommentLine.replace(
          b,
          `<span class='commentKeyWord'>${b}</span>`
        );

        return commentWithKeyWord;
      });
    });

  return commentText;
}

export default Parse;
