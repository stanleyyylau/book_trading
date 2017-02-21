var axios = require('axios');

var helpers = {
  getAllBooks () {
    return axios.get('http://localhost:4545/api/allbooks')
  },
  Login (email, password) {
    return axios.post('http://localhost:4545/api/login', {
        email: email,
        password: password
    })
  },
  setUpLoginHeader (token) {
    return axios.defaults.headers.common['x-access-token'] = token;
  },
  searchBook (bookTitle){
    return axios.post('http://localhost:4545/api/searchbook', {
      title: bookTitle
    })
  },
  deletePost: function(postId){
    return axios.post('http://localhost:4545/admin/dashboard/delete',{postId, postId})
  },
  updatePost: function(title, content, postId){
    if (postId){
      return axios.post('http://localhost:4545/admin/dashboard/update',{postId, title, content})
    }else{
      return axios.post('http://localhost:4545/admin/dashboard/update',{title, content})
    }
  },
  getPostInfo: function(postId){
    return axios.get('http://localhost:4545/admin/dashboard/edit?postId=' + postId)
  }
};

export default helpers