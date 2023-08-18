/* 
# Higher Order Function #

A HOF is a function that does at least one of the followig: 
= Takes one or more functions as an argument (parameter)
= Returns a function as the result
*/

import { posts } from "./posts.js";

//forEach()
posts.forEach((post) => {
  console.log(post);
});

console.clear();

const filterPosts = posts.filter((post) => {
  //It will show the post that has user id 10 only.
  return post.userId === 10;
});
console.log(filterPosts);

//map()
const mappedPost = filterPosts.map((post) => {
  return post.id * 10;
});
console.log(mappedPost);

//reduce()
const reducedPost = mappedPost.reduce((sum, post)=>{
    return sum + post;
})
console.log(reducedPost);


