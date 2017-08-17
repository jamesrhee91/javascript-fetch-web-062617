const app = "I don't do much.";

// token ad4416b728d3f360122053709387d61fd8c2580a

const token = 'ad4416b728d3f360122053709387d61fd8c2580a'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
