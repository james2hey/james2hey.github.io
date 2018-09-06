<template>
  <div>
    <nav class="navbar fixed-top navbar-dark bg-primary">
      <a class="navbar-brand" href="#">365 Auctions</a>

      <form class="form-inline">
        <li class="nav-item">
          <router-link class="nav-link" style="color:white;" to="/auctions">Auctions</router-link>
        </li>

        <div v-if="loggedIn">
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
        </div>

        <div v-else>
          <li class="nav-item">
            <router-link class="nav-link" style="color:white;" to="/home">Create Account</router-link>
          </li>
        </div>
      </form>
    </nav>

    <!-- PLACE BID MODAL -->
    <div class="modal fade" id="placeBidModal" tabindex="-1" role="dialog" aria-labelledby="placeBidLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="placeBidLabel">Placing Bid On {{auction.title}}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="refresh()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h4>Current Bid</h4>
            <h3>${{convertPrice(auction.currentBid)}}</h3><br/>
            <h4>Your Bid</h4>
            <input type="number" value="1000" min="0" step="0.01" data-number-to-fixed="2"
                   data-number-stepfactor="100"
                   class="form-control currency" id="c2" v-model="nextBid"/>
            <br/>
            <div v-if="bidStatus === 1" style="color: green;">
              Bid successfully placed!
            </div>
            <div v-else-if="bidStatus === 2" style="color: red;">
              You must bid higher than the current bid!
            </div>
            <div v-else-if="bidStatus === 3" style="color: red;">
              You must be logged in to make a bid. Click
              <router-link to="/home" data-dismiss="modal">here</router-link>
              to login/sign up
            </div>
            <div v-else-if="bidStatus === 4" style="color: red;">
              Your bid must be higher than the auctions starting price!
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" id="cancelBid" class="btn btn-secondary" data-dismiss="modal" v-on:click="refresh()">
              Cancel
            </button>
            <button type="button" class="btn btn-primary" v-on:click="placeBid()">Place Bid!</button>
          </div>
        </div>
      </div>
    </div>

    <!-- VIEW BID HISTORY MODAL -->
    <div class="modal fade" id="bidHistoryModal" tabindex="-1" role="dialog" aria-labelledby="bidHistoryLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="bidHistoryLabel">Bid History</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div v-if="sortedBids.length === 0">
              No bids placed.
            </div>
            <div v-else>
              <table class="table">
                <thead>
                <tr>
                  <th scope="col">Amount</th>
                  <th scope="col">Bidder</th>
                  <th scope="col">Time</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="bid in sortedBids">
                  <th scope="row">${{convertPrice(bid.amount)}}</th>
                  <td>{{bid.buyerUsername}}</td>
                  <td>{{convertDate(bid.datetime)}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <br/><br/>
    <div v-if="$route.params.auctionId">

      <!-- SELLER MODAL -->
      <div class="modal fade" id="sellerModal" tabindex="-1" role="dialog" aria-labelledby="sellerLabel"
           aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="sellerLabel">Seller Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div v-if="loggedIn">
                <h4>Username</h4>
                <p>{{sellerDetails.username}}</p>
                <h4>Given Name</h4>
                <p>{{sellerDetails.givenName}}</p>
                <h4>Family Name</h4>
                <p>{{sellerDetails.familyName}}</p>
              </div>
              <div v-else>
                You must be logged in to view the seller details. Click
                <router-link to="/home" data-dismiss="modal">here</router-link>
                to login/sign up
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <div class="card" style="width: 50%; margin-left:auto; margin-right:auto">
        <h2>{{auction.title}}</h2>
        <div class="form-group">
          <div class="row">
            <div class="col">
              <img :src="getPhotoSrc()" alt="hi how are ya?" style="width:300px;height:200px;"><br/>
              <h5>Description</h5>
              <p>{{auction.description}}</p>
              <h5>Current Bid</h5>
              <p>${{convertPrice(auction.currentBid)}}</p>
              <div v-if="activeAuction()">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#placeBidModal">
                  Place Bid
                </button>
              </div>
              <div v-else>
                <h6 style="color:red;">Bidding time is closed for this auction.</h6>
              </div>

            </div>
            <div class="col">

              <h5>Seller</h5>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#sellerModal"
                      v-on:click="getSellerDetails()">
                {{sellerUsername}}
              </button>
              <br/><br/><br/>
              <h5>Starting Price</h5>
              <p>${{convertPrice(auction.startingBid)}}</p>
              <h5>Start Date</h5>
              <p>{{convertDate(auction.startDateTime)}}</p>
              <h5>End Date</h5>
              <p>{{convertDate(auction.endDateTime)}}</p>
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#bidHistoryModal"
                      v-on:click="getSingleAuction()">
                View Bid History
              </button>
            </div>
          </div>
        </div>


        <router-link :to="{name: 'Auctions'}">Back to Auctions</router-link>
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
        emptyFields: false,
        auction: {},
        name: "",
        password: "",
        body: {},
        success: false,
        id: this.$route.params.auctionId,
        nextBid: 0,
        bidStatus: 0,
        sellerUsername: "",
        sellerDetails: {},
        sortedBids: {},
        editableAuction: false,
        categories: [],
        catId: 0,
        loggedIn: false,
        apiUrl: 'https://jacksteel.co.nz/projects/seng365'

      }
    },
    mounted: function () {
      this.loggedIn = localStorage.getItem('id') != null;
      this.getSingleAuction();
      this.getAllCategories();
    },

    methods: {

      getSingleAuction: function () {
        this.$http.get(this.apiUrl + '/api/v1/auctions/' + this.id)
          .then(response => {
            this.auction = response.data;
            this.nextBid = Math.round(this.convertPrice(this.auction.currentBid) + 1);
            this.sortedBids = this.auction.bids.sort((a, b) => parseInt(b.datetime) - parseInt(a.datetime));
            this.sellerUsername = this.auction.seller.username;
            this.editableAuction = this.auction.seller.id == localStorage.getItem('id') &&
              this.auction.startDateTime > Date.now();
          })
          .catch(error => {
            console.dir(error);
          })
      },


      placeBid: function () {
        if (this.convertPrice(this.auction.currentBid) >= this.nextBid) {
          this.bidStatus = 2
        } else if (!this.loggedIn) {
          this.bidStatus = 3;

        } else {
          console.log("valid bid");
          console.log(this.nextBid);
          this.$http.post(this.apiUrl + '/api/v1/auctions/' + this.id + "/bids?amount=" + this.nextBid * 100, {},
            {
              headers: {
                'X-Authorization': localStorage.getItem('token')
              }
            })
            .then(response => {
              console.log("bid placed");
              this.auction.currentBid = this.nextBid * 100;
              this.nextBid++;
              this.bidStatus = 1;
              document.getElementById('cancelBid').disabled = true;
            })
            .catch(error => {
              console.dir(error); // Bad request from bid < startingPrice
              this.bidStatus = 4;
            })
        }
      },

      getSellerDetails: function () {
        if (this.loggedIn) {
          this.$http.get(this.apiUrl + '/api/v1/users/' + this.auction.seller.id,
            {
              headers: {
                'X-Authorization': localStorage.getItem('token')
              }
            })
            .then(response => {
              this.sellerDetails = response.data;
            })
            .catch(error => {
              console.dir(error);
            })
        }
      },

      patchAuction: function () {

      },


      activeAuction: function () {
        return this.auction.endDateTime > Date.now();
      },

      getPhotoSrc: function () {
        // console.log(this.viewedAuction);
        return this.apiUrl + "/api/v1/auctions/" + this.id + "/photos";
      },

      convertDate: function (input) {
        let date = new Date(parseInt(input));
        return date.toLocaleString();
      },

      getAllCategories: function () {
        this.$http.get(this.apiUrl + '/api/v1/categories')
          .then(response => {
            this.categories = response.data;
            this.categories.push({categoryId: 0, categoryTitle: "all", categoryDescription: "All categories"});
            this.categories.sort((a, b) => parseInt(a.categoryId) - parseInt(b.categoryId));
          })
          .catch(error => {
            this.error = error;
            this.errorFlag = true;
            console.dir(error);
          })
      },

      convertPrice: function (price) {
        if (price === 0) {
          return 0
        } else {
          return price / 100;
        }
      },

      refresh: function () {
        this.bidStatus = 0;
        document.getElementById('cancelBid').disabled = false;
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
