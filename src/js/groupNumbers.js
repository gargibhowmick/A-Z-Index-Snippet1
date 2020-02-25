const groupWordsWithNumberAsFirstElement = (words) => {
    words.filter(word => typeof word[0] == "number");
  }