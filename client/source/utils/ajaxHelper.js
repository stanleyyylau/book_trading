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
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}+intitle`)
  },
  addBook (image, title, author){
    return axios.post('http://localhost:4545/api/addbook', {
        title: title,
        author: author,
        pages: "unknowed",
        image: image
    })
  },
  getOneBook (id) {
    return axios.get(`http://localhost:4545/api/book/${id}`)    
  },
  getAllMyBooks (){
    return axios.get('http://localhost:4545/api/mybooks')   
  },
  getProfile(){
    return axios.get('http://localhost:4545/api/profile') 
  },
  updateProfile(updateObj){
    return axios.post('http://localhost:4545/api/profile', updateObj) 
  },
  myPropose() {
    return axios.get('http://localhost:4545/api/mypropose') 
  },
  myReceive() {
    return axios.get('http://localhost:4545/api/myreceive') 
  },
  confirmTrade(myBookId, theirBookId) {
    return axios.post('http://localhost:4545/api/tradeconfirm', {
      myBookId: myBookId,
      theirBookId: theirBookId
    }) 
  },
  rejectTrade(myBookId, theirBookId) {
    // Todo: need to fix this
    return axios.post('http://localhost:4545/api/tradereject', {
      myBookId: myBookId,
      theirBookId: theirBookId
    }) 
  },
  cancalTrade(myBookId, theirBookId) {
    // Todo: need to fix this
    return axios.post('http://localhost:4545/api/tradecancel', {
      myBookId: myBookId,
      theirBookId: theirBookId
    }) 
  },
  checkBeforeTrade(ownerIdToCheck){
    return axios.post('http://localhost:4545/api/tradecheck', {
      ownerIdToCheck: ownerIdToCheck
    })
  },
  tradeBook(myBookId, theirBookId){
    return axios.post('http://localhost:4545/api/trade', {
      mineBookId: myBookId,
      theirBookId: theirBookId
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