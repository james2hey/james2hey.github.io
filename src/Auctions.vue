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
    <div>

      <!-- FILTERS -->
      <h1>Auctions</h1>
      <div class="card" style="width: 50%; margin-left:auto; margin-right:auto">
        <form v-on:submit.prevent="getAuctions()">
          <div class="row">
            <div class="col">
              <h5>Status</h5>
              <select v-model="statusValue" class="custom-select">
                <option v-for="stat in status" v-bind:value="stat.value">{{stat.value}}</option>
              </select>
            </div>
            <div class="col">
              <h5>Category</h5>
              <select v-model="catId" class="custom-select">
                <option v-for="cat in categories" v-bind:value="cat.categoryId">{{cat.categoryTitle}}</option>
              </select>
            </div>
            <div class="col">
              <h5>Search</h5>
              <input v-model="q" class="form-control" placeholder="Search">
            </div>
          </div>
          <br/><br/>
          <button class="btn btn-primary" type="button" v-on:click="getAuctions()">Filter</button>
        </form>
      </div>
      <br/><br/>

      <!-- AUCTIONS -->
      <div v-if="visibleAuctions.length === 0 && searched">
        <div class="container">
          <p>Aw dear, no results found!</p>
          <img class="img-thumbnail" src="./assets/sad.png" style="width:50%; height:50%;">
        </div>
      </div>
      <div class="card-deck" v-else>
        <div v-for="auction in visibleAuctions">
          <div class="card" style="width: 18rem;">

            <div class="card-body">
              <div class="container">
                <img class="card-img-top" :src="getPhotoSrc(auction.id)" alt="Photo failed to load">
              </div>

              <h5 class="card-title">{{auction.title}}</h5>
              <p class="card-text">Highest Bid: $ {{convertPrice(auction.currentBid)}}</p>

              <router-link class="btn btn-primary" :to="{name: 'Auction', params: {auctionId: auction.id}}">
                View
              </router-link>
            </div>
          </div>
        </div>
      </div>
      <br/><br/>

      <nav aria-label="Page navigation">
        <ul class="pagination justify-content-center">
          <li class="page-item" v-for="page in pageArray"><a class="page-link" v-on:click="setVisibleAuctions(page)"
                                                             href="#">{{page}}</a></li>
        </ul>
      </nav>

    </div>
    <br><br><br>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        auctions: [],
        visibleAuctions: [],
        viewedAuction: {},
        categories: [],
        catId: 0,
        nextBid: 0,
        q: "",
        status: [{value: 'all'}, {value: 'active'}, {value: 'expired'}, {value: 'won'}, {value: 'upcoming'}],
        statusValue: "all",
        pageNumber: 1,
        totalPages: [],
        loggedIn: false,
        pageArray: [],
        searched: false,
        apiUrl: 'https://jacksteel.co.nz/projects/seng365'
      }
    },
    mounted: function () {
      this.loggedIn = localStorage.getItem('id') != null;
      this.getAllCategories();
      this.getAuctions();
      // this.setPages();
    },
    methods: {
      getAuctions: function () {
        this.pageArray = [];
        let query = this.buildQuery();
        this.$http.get(this.apiUrl + '/api/v1/auctions?' + query)
          .then(response => {
            this.auctions = response.data;
            this.setPages();
            this.setVisibleAuctions(1);
            this.searched = true;
          })
          .catch(error => {
            console.dir(error);
          });
      },


      setPages: function () {
        this.visibleAuctions = [];
        let numberOfAuctions = this.auctions.length;
        let numberOfPages = Math.ceil(numberOfAuctions / 8);

        for (let i = 1; i <= numberOfPages; i++) {
          this.pageArray.push(i);
        }
      },

      setVisibleAuctions: function (number) {
        let prim = 8 * number;
        this.visibleAuctions = this.auctions.slice(prim - 8, prim);
      },

      buildQuery: function () {
        let query = "";
        if (this.q !== "") {
          query += "q=" + this.q;
        }
        if (this.statusValue !== "all") {
          query === "" ? query = query : query += "&";
          query += "status=" + this.statusValue;
        }
        if (this.catId !== 0) {
          query === "" ? query = query : query += "&";
          query += "category-id=" + this.catId;
        }
        return query;
      },

      getAllCategories: function () {
        this.$http.get(this.apiUrl + '/api/v1/categories')
          .then(response => {
            this.categories = response.data;
            this.categories.push({categoryId: 0, categoryTitle: "all", categoryDescription: "All categories"});
            this.categories.sort((a, b) => parseInt(a.categoryId) - parseInt(b.categoryId));
          })
          .catch(error => {
            console.dir(error)
          })
      },

      getPhotoSrc: function (id) {
        // console.log(this.viewedAuction);
        return this.apiUrl + "/api/v1/auctions/" + id + "/photos";
      },


      activeAuction: function () {
        return this.viewedAuction.endDateTime > Date.now();
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
            localStorage.removeItem('id');
            localStorage.removeItem('token');
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
