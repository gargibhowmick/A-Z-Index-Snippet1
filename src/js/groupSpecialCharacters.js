const groupWordsWithSpecialCharAsFirstElement = (words) => {
    const pattern = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/);
  
    words.filter(words => !pattern.test(words[0]) )
  }