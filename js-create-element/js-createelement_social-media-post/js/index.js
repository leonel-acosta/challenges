console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("section")
newPost.classList.add("post");
document.body.append(newPost);

const postContent = document.createElement("p")
postContent.textContent = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. ";
postContent.classList.add("post__content");
newPost.append(postContent)

const footer = document.querySelector('post__footer');
const postFooter = document.createElement("footer");
postFooter.classList.add("post__footer");
newPost.append(postFooter);

const postUserName = document.createElement("span");
postFooter.append(postUserName)
postUserName.classList.add("post__username");
postUserName.textContent = "@username";

const postLikeButton = document.createElement('button');
postLikeButton.classList.add("post__button");
postLikeButton.textContent = "♥ Like"
postFooter.append(postLikeButton)




