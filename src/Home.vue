<template>
  <div>
    <h1>Welcome to 365 Auctions</h1><br/>
    <h5>Login or sign up to access full features. Otherwise, you can just
      <router-link to="auctions">browse auctions</router-link>
    </h5><br/>
    <h5> This is an Auction website that I have created which shows a client interacting with a server.
    To get back to my website, click <router-link to="/">here</router-link>. </h5>

    <br/><br/>

    <div class="card" style="width:75%; margin-left:auto; margin-right:auto;">
      <div class="row">
        <div class="col">
          <div class="card">
            <h3>Login</h3><br/>
            <form>
              Username/Email:<br>
              <input class="form-control" v-model="loginName"><br><br>
              Password:<br>
              <input class="form-control" type="password" v-model="loginPassword"><br><br>

              <div v-if="emptyLoginFields" style="color: red;">
                Fill in your username/email and password.
              </div>
              <div v-else-if="loginErrorFlag" style="color: red;">
                username/email and password do not match.
              </div>

              <button class="btn btn-primary" type="button" v-on:click="attemptLogin()">Login</button>
            </form>
          </div>

        </div>
        <div class="col">
          <div class="card">
            <h3>Sign Up</h3><br/>
            <form>
              Username:<br>
              <input class="form-control" v-model="userData.username"><br><br>
              Given Name:<br>
              <input class="form-control" v-model="userData.givenName"><br><br>
              Family Name:<br>
              <input class="form-control" v-model="userData.familyName"><br><br>
              Email:<br>
              <input class="form-control" type="email" v-model="userData.email"><br><br>
              Password:<br>
              <input class="form-control" type="password" v-model="userData.password"><br><br>

              <div v-if="invalidUser" style="color: red;">
                {{message}}
              </div>
              <br/>
              <button class="btn btn-primary" type="button" v-on:click="createUser()">Create</button>

            </form>
          </div>
        </div>
      </div>
    </div>
    <br/><br/><br/><br/>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        error: "",
        loginErrorFlag: false,
        signUpErrorFlag: false,
        emptyLoginFields: false,
        emptySignUpFields: false,
        loginName: "",
        loginPassword: "",
        body: {},
        userData: {username: "", givenName: "", familyName: "", email: "", password: ""},
        username: "",
        givenName: "",
        familyName: "",
        email: "",
        password: "",
        message: "",
        invalidUser: false,
        apiUrl: 'https://fathomless-hollows-20816.herokuapp.com'
      }
    },

    methods: {
      attemptLogin: function () {
        this.resetFlags();
        if (this.loginName === "" || this.loginPassword === "") {
          this.emptyLoginFields = true;
        } else {
          this.emptyLoginFields = false;
          this.loginName.includes("@") ? this.body = {email: this.loginName, password: this.loginPassword} :
            this.body = {username: this.loginName, password: this.loginPassword};
          this.login(this.body);
        }
      },

      createUser: function () {
        this.resetFlags();
        // let userData = {
        //   username: this.username,
        //   givenName: this.givenName,
        //   familyName: this.familyName,
        //   email: this.email,
        //   password: this.password
        // };
        this.validateCreation();
        // console.log(this.emptyFields);
        if (!this.invalidUser) {
          this.$http.post(this.apiUrl + '/api/v1/users', this.userData)
            .then(response => {
              console.dir(response.data);
              console.log("Successfully created user id = " + response.data["id"]);
              this.login({username: this.userData.username, password: this.userData.password})
            })
            .catch(error => {
              console.dir(error);
              this.invalidUser = true;
              this.message = "Sorry, this username/email address is already in use"
            })
        }
      },

      validateCreation: function () {
        for (let key in this.userData) {
          if (this.userData[key] === "") {
            console.log(key);
            console.log(this.userData[key]);
            this.invalidUser = true;
            this.message = "Please fill in all the fields to sign up!"
            return;
          }
        }
        if (!this.userData.email.includes('@')) {
          this.invalidUser = true;
          this.message = "This email address is invalid."
        }
      },

      login: function (body) {
        this.$http.post(this.apiUrl + '/api/v1/users/login', body)
          .then(response => {
            localStorage.setItem("token", response.data["token"]);
            localStorage.setItem("id", response.data["id"]);
            this.$router.push({name: "Auctions"});
          })
          .catch(error => {
            this.invalidUser = true;
            this.loginErrorFlag = true;
            console.dir(error)
          })
      },

      resetFlags: function () {
        this.loginErrorFlag = false;
        this.signUpErrorFlag = false;
        this.emptyLoginFields = false;
        this.emptySignUpFields = false;
        this.invalidUser = false;
      }
    }
  }
</script>

<style scoped>

</style>
