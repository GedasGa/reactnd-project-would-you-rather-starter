export function formatQuestion(author, question) {
  const { name, avatarURL } = author;
  const { id, timestamp, optionOne, optionTwo } = question;

  return {
    name,
    avatarURL,
    id,
    timestamp,
    optionOne,
    optionTwo,
  }
}
