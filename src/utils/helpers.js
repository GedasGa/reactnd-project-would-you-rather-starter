export function formatQuestion(author, question) {
  const { name, avatarURL } = author;
  const { id, timestamp, optionOne, optionTwo } = question;

  return {
    name,
    id,
    timestamp,
    optionOne,
    optionTwo,
    avatar: avatarURL
  }
}
