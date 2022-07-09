const names = ['John', 'Scott', 'Melinda', 'Kerr', 'Bill'];
const kerrIndex = names.findIndex((name) => name === 'Kerr');

const newNamesWithoutK = [
  names.slice(0, kerrIndex),
  names.slice(kerrIndex + 1),
].flat();

console.log(newNamesWithoutK);

const comments = [
  {
    text: 'Hi',
    id: 120,
  },
  {
    text: 'Another one',
    id: 121,
  },
  {
    text: 'Thi is good',
    id: 310,
  },
  {
    text: 'Finality!',
    id: 32,
  },
];

function deleteComment(id, commentArray) {
  const commentIndex = commentArray.findIndex((comment) => comment.id === id);
  return [
    commentArray.slice(0, commentIndex),
    commentArray.slice(commentIndex + 1),
  ].flat();
}
