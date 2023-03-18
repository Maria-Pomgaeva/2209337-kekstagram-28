import {similarPosts} from './main.js';

// const bigPicture = document.querySelector('.big-picture')
// bigPicture.classList.remove('hidden');


const commentList = document.querySelector('.social__comments');
const commentItem = document.querySelector('.social__comment');
const commentImg = document.querySelector('.social__picture');
const commentText = document.querySelector('.social__text');
const commentCount = document.querySelector('.social__comment-count');
const commentLoad = document.querySelector('.comments-loader');

/**
 * Отрисовывает большую картинку
 * @param {Element} element — элементы массива
 */

const showBigPicture = ({url, comments, likes, description}) => {
  bigPicture.querySelector('img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;
};

const cleanBigPicture = () => {
  bigPicture.innerHTML = '';
};

export {showBigPicture, cleanBigPicture};