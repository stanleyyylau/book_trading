


describe('User', ()=>{
  it('I can add a new book', function () {
    throw new Error("fail");
  })

  it('Can update their full name, city and state', function(){
    throw new Error("fail");
  })

  it('I can propose a trade and wait for the other user to accept the trade', function () {
    throw new Error("fail");
  })

  it('Should return "validation fail" if email is incorrect or password is less then 6 characters', function(){
    var user = new User ({
      email: "thisisnotanemailaddres",
      password: "thisisSomeComplicatedpassword"
    })
    throw new Error("fail");
  })

  it('Should create a new record in database when correct email and password is passed', function(){
    throw new Error("fail");
  })

  it('Password should be hashed and encrypted', function(){
    throw new Error("fail");
  })

});
