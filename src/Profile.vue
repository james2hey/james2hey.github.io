<template>
  <div>
    <nav class="navbar fixed-top navbar-dark bg-primary">
      <a class="navbar-brand" href="#">365 Auctions</a>
      <form class="form-inline">
        <li class="nav-item">
          <router-link class="nav-link" style="color:white;" to="/auctions">Auctions</router-link>
        </li>
        <li class="nav-item dropdown">
          <a style="color:white;" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
             data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profile
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <router-link class="nav-link" style="color:black;" to="/myauctions">My Auctions</router-link>
            <router-link class="nav-link" style="color:black;" to="/mybids">My Bids</router-link>
            <div class="dropdown-divider"></div>
            <router-link class="nav-link" style="color:black;" to="/profile">Edit Profile</router-link>
          </div>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" style="color:white;" to="/home" v-on:click.native="logout()">Logout</router-link>
        </li>
      </form>
    </nav>

    <div class="card" style="width: 50%; margin-left:auto; margin-right:auto">
      <form>
        <br/>
        <h2>{{username}}</h2>
        <div class="form-group">
          <div class="row">
            <div class="col">
              <label>Given Name</label>
              <input class="form-control" id="givenName" v-model="givenName"><br/>
              <label>Family Name</label>
              <input class="form-control" id="familyName" v-model="familyName"><br/>
            </div>
            <div class="col">
              <label>Email</label>
              <input class="form-control" type="text" v-model="email" readonly><br/>
              <label>Account Balance</label>
              <input class="form-control" type="text" v-model="balance" readonly><br/>
            </div>
          </div>

          <small id="editHelp" class="form-text text-muted">You may edit your Given Name or Family Name.</small>
        </div>
        <div class="form-group">
        </div>

        <button type="button" class="btn btn-primary" v-on:click="patchUserDetails()">
          Update Changes
        </button>
        <br/><br/>
        <div v-if="updateStatus === 1" style="color:green;">
          <h5>Success!</h5>
          <p>Your profile has been updated.</p>.
        </div>
        <div v-else-if="updateStatus === 2" style="color:red;">
          <p>Fill out all your fields first!</p>
        </div>
        <br/>
      </form>
    </div>

  </div>

</template>

<script>
  export default {
    data() {
      return {
        error: "",
        errorFlag: false,
        errorType: "",
        success: false,
        username: "",
        givenName: "",
        familyName: "",
        email: "",
        balance: 0,
        emptyFields: false,
        id: 0,
        updateStatus: 0,
        message: ""
      }
    },
    mounted: function () {
      this.getUserDetails();

    },
    methods: {
      getUserDetails: function () {
        this.$http.get('http://localhost:4941/api/v1/users/' + localStorage.getItem('id'),
          {
            headers: {
              'X-Authorization': localStorage.getItem('token')
            }
          })

          .then(response => {
            this.username = response.data["username"];
            this.givenName = response.data["givenName"];
            this.familyName = response.data["familyName"];
            this.email = response.data["email"];
            this.balance = response.data["accountBalance"];
          })
          .catch(error => {
            console.dir(error);
          })
      },

      patchUserDetails: function () {
        if (this.givenName == "" || this.familyName == "") {
          this.updateStatus = 2;

        } else {

          let body = {'givenName': this.givenName, 'familyName': this.familyName};

          this.$http.patch('http://localhost:4941/api/v1/users/' + localStorage.getItem('id'), body,
            {
              headers: {
                'X-Authorization': localStorage.getItem('token')
              }
            })

            .then(response => {
              this.updateStatus = 1;

            })
            .catch(error => {
              console.dir(error);
            })
        }
      },
      logout: function () {
        this.$http.post('http://localhost:4941/api/v1/users/logout', {}, {
          headers: {
            'X-Authorization': localStorage.getItem('token')
          }
        })
          .then(() => {
            localStorage.clear();
            console.log("token null'ed.");
          })
          .catch(error => {
            console.log(error);
          })
      }
    }
  }

</script>

<style scoped>

</style>
