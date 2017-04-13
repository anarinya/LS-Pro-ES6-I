// var me = 'LambdaSchool';
const me = 'LambdaSchool';

// var you = 'Student';
const you = 'Student';

// var numberOfCatsIOwn = 0;
let numberOfCatsIOwn = 0;

function buyCat() {
  numberOfCatsIOwn++;
  // console.log('I now own ' + numberOfCatsIOwn + ' cats!');
  console.log(`I now own ${numberOfCatsIOwn} cats!`);
};

// var favoriteBooks = [
const favoriteBooks = [
  'Captain Underpants',
  'Magic Treehouse',
  'Brown Bear, Brown Bear, What Do You See?',
  'Slaughterhouse 5',
];

// var likesCaptainUnderpants = function(bookList) {
const likesCaptainUnderpants = (bookList) => {
  // var yes = false;
  let yes = false;
  // bookList.forEach(function(book) {
  bookList.forEach(book => {
    if (book === 'Captain Underpants') yes = true;
  });
  return yes;
};

// var result = likesCaptainUnderpants();
const result = likesCaptainUnderpants(favoriteBooks);

// var sumInput = function() {
const sumInput = (...args) => {
  // var total = 0;
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

// var sum = sumInput(1, 2, 3, 4, 5);
const sum = sumInput(1, 2, 3, 4, 5);

// var add = function(x, x) {
//  return x + x;
// }
const add = (x, y) => x + y;

const sum2 = add(5, 5);
