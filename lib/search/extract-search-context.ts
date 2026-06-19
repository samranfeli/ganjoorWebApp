export default function extractSearchContext({
  text,
  markedText,
}: {
  text: string;
  markedText: string;
}) {
  const versesArray: string[] = text?.split("\r\n") || [];

  const versesHasTerm: string[] = [];

  versesArray?.forEach((verse, index, array) => {
    if (verse.includes(`${markedText}`)) {
      const transformedVerse = verse.replaceAll(
        `${markedText}`,
        `<mark>${markedText}</mark>`,
      );
      versesHasTerm.push(transformedVerse);
    } else if (array[index + 1] && array[index + 1].includes(`${markedText}`)) {
      versesHasTerm.push("... " + verse);
    } else if (array[index - 1] && array[index - 1].includes(`${markedText}`)) {
      versesHasTerm.push(verse + " ...", "<br/>");
    }
  });

  return versesHasTerm;
}
