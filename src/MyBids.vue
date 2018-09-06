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

    <div>
      <br/>
      <h1> My Bids</h1><br/>

      <select v-model="bidChoice" class="custom-select" style="width: 30%;">
        <option v-for="choice in bidChoices" v-bind:value="choice.value">{{choice.value}}</option>
      </select>
      <button class="btn btn-primary" type="button" v-on:click="filter()">View</button>
      <small id="editHelp" class="form-text text-muted">Choose your in-progress/won bids, then hit 'filter'.</small>
    </div>

    <br/>

    <div v-if="noBids">
      <div class="container">
        <p>Come onnn, you haven't got any bids on active auctions!</p>
        <img class="img-thumbnail" src="./assets/smirk.png" style="width:50%; height:50%;">
      </div>
    </div>
    <div v-if="noWins">
      <div class="container">
        <p>You haven't won any auctions!</p>
        <img class="img-thumbnail" src="./assets/crying.jpg" style="width:50%; height:50%;">
      </div>
      <!--<h5 style="color:blue;">You haven't won any auctions</h5>-->
    </div>

    <div class="row" v-else>
      <div class="col" v-for="auction in auctions">
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" :src="getPhotoSrc(auction.id)" alt="Photo failed to load">
          <div class="card-body">
            <h5 class="card-title">{{auction.title}}</h5>
            <p class="card-text">Current Bid: $ {{convertPrice(auction.currentBid)}}</p>

            <router-link class="btn btn-primary" :to="{name: 'Auction', params: {auctionId: auction.id}}">
              View
            </router-link>

          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        error: "",
        errorFlag: false,
        auctions: [],
        status: "",
        viewedAuction: {},
        seller: {},
        bidChoices: [{value: 'active'}, {value: 'won'}],
        bidChoice: 'active',
        noBids: false,
        noWins: false,
        apiUrl: 'https://jacksteel.co.nz/projects/seng365'
      }
    },
    mounted: function () {
      this.getActiveAuctions();
    },
    methods: {


      filter: function () {
        this.bidChoice === 'active' ? this.getActiveAuctions() : this.getWonAuctions();
      },

      getActiveAuctions: function () {
        this.$http.get(this.apiUrl + '/api/v1/auctions?status=active&bidder=' + localStorage.getItem("id"))
          .then(response => {
            this.auctions = response.data;
            if (this.auctions.length < 1) {
              this.noBids = true;
            }
            this.noWins = false;
          })
          .catch(error => {
            console.dir(error)
          });
      },

      getWonAuctions() {
        this.$http.get(this.apiUrl + '/api/v1/my_won_auctions',
          {
            headers: {
              'X-Authorization': localStorage.getItem('token')
            }
          })
          .then(response => {
            this.auctions = response.data;
            if (this.auctions.length < 1) {
              this.noWins = true;

            }
            this.noBids = false;
          })
          .catch(error => {
            console.dir(error);
          })
      },


      getPhotoSrc: function (id) {
        return "http://localhost:4941/api/v1/auctions/" + id + "/photos";
      },

      convertDate: function (input) {
        let date = new Date(parseInt(input));
        return date.toLocaleDateString();
      },

      convertPrice: function (price) {
        if (price === 0) {
          return 0
        } else {
          return price / 100;
        }
      },

      logout: function () {
        this.$http.post(this.apiUrl + '/api/v1/users/logout', {}, {
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
