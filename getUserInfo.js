import './index.js';

// Arrow function
const getUserInfo = (firstName, lastName, title, country, skills) => {
  return `${firstName} ${lastName}, a ${title} developer based in ${country}. He knows ${skills.join(' ')}`;
}

const skills = ['HTML', 'CSS', 'JS', 'React'];
console.log(
  getUserInfo('Joshua', 'Alhassan', 'frontend', 'Nigeria', skills)
);