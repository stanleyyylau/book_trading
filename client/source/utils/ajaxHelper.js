var axios = require('axios');

var helpers = {
  getAllBooks () {
    return axios.get('/api/allbooks')
  },
  Login (email, password) {
    return axios.post('/api/login', {
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
    return axios.post('/api/addbook', {
        title: title,
        author: author,
        pages: "unknowed",
        image: image
    })
  },
  getOneBook (id) {
    return axios.get(`/api/book/${id}`)    
  },
  getAllMyBooks (){
    return axios.get('/api/mybooks')   
  },
  getProfile(){
    return axios.get('/api/profile') 
  },
  updateProfile(updateObj){
    return axios.post('/api/profile', updateObj) 
  },
  myPropose() {
    return axios.get('/api/mypropose') 
  },
  myReceive() {
    return axios.get('/api/myreceive') 
  },
  confirmTrade(myBookId, theirBookId) {
    return axios.post('/api/tradeconfirm', {
      myBookId: myBookId,
      theirBookId: theirBookId
    }) 
  },
  rejectTrade(myBookId, theirBookId) {
    // Todo: need to fix this
    return axios.post('/api/tradereject', {
      myBookId: myBookId,
      theirBookId: theirBookId
    }) 
  },
  cancalTrade(myBookId, theirBookId) {
    // Todo: need to fix this
    return axios.post('/api/tradecancel', {
      myBookId: myBookId,
      theirBookId: theirBookId
    }) 
  },
  checkBeforeTrade(ownerIdToCheck){
    return axios.post('/api/tradecheck', {
      ownerIdToCheck: ownerIdToCheck
    })
  },
  tradeBook(myBookId, theirBookId){
    return axios.post('/api/trade', {
      mineBookId: myBookId,
      theirBookId: theirBookId
    })
  },
  deletePost: function(postId){
    return axios.post('/admin/dashboard/delete',{postId, postId})
  },
  updatePost: function(title, content, postId){
    if (postId){
      return axios.post('/admin/dashboard/update',{postId, title, content})
    }else{
      return axios.post('/admin/dashboard/update',{title, content})
    }
  },
  getPostInfo: function(postId){
    return axios.get('/admin/dashboard/edit?postId=' + postId)
  }
};

export default helpers