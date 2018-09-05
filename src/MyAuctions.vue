<template>
  <div>
    <nav class="navbar fixed-top navbar-dark bg-primary">
      <a class="navbar-brand" href="#">365 Auctions</a>
      <form class="form-inline">
        <li class="nav-item">
          <router-link class="nav-link" style="color:white;" to="/auctions">Auctions</router-link>
        </li>
        <li class="nav-item dropdown">
          <a style="color:white;" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profile
          </a>
          <div class="dropdown-menu"  aria-labelledby="navbarDropdown">
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

    <!-- EDIT AUCTION MODAL -->
    <div class="modal fade" id="editAuctionModal" tabindex="-1" role="dialog" aria-labelledby="editAuctionModalLabel"
         aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="editAuctionModalLabel">My Auction</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" v-on:click="resetData()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="form-group">
              <div class="row">
                <div class="col">
                  <h5>Title</h5>
                  <input class="form-control" id="title" v-model="currentAuction.title">
                  <h5>Description</h5>
                  <textarea class="form-control" id="description" v-model="currentAuction.description" rows="3"></textarea>
                  <label>Reserve Price</label>
                  <input type="number" value="1000" min="0" step="0.01" data-number-to-fixed="2"
                         data-number-stepfactor="100"
                         class="form-control currency" id="c1" v-model="inputReservePrice"/>
                  <label>Starting Bid</label>
                  <input type="number" value="1000" min="0" step="0.01" data-number-to-fixed="2"
                         data-number-stepfactor="100"
                         class="form-control currency" id="c2" v-model="inputStartingBid"/>
                </div>
                <div class="col">
                  <!--<input id="date" type="date" v-model="startDateTime">-->
                  <label>Start Time</label><br />
                  <input class="form-control" id="startDate" type="datetime-local" v-model="outputStartDateTime"> <br/>
                  <label>End Time</label>
                  <input class="form-control" id="endDate" type="datetime-local" v-model="outputEndDateTime"> <br/>
                  <label>Category</label>
                  <select v-model="catId" class="custom-select" >
                    <option v-for="cat in categories" v-bind:value="cat.categoryId">{{cat.categoryTitle}}</option>
                  </select>

                  <label>Photo</label>
                  <!--<img src=""-->
                  <div class="custom-file">
                    <input type="file" class="custom-file-input" id="customFile" accept=".jpeg, .jpg, .png" v-on:change="onFileChanged">
                    <label class="custom-file-label" for="customFile">Choose file</label>
                    <small id="editHelps" class="form-text text-muted">PNG or JPEG images are supported.</small>
                    <button v-if="editing" type="button" class="btn btn-primary" v-on:click="deletePhoto()">Delete Photo</button><br>
                    <p v-if="photoMessage !== ''">{{photoMessage}}</p>
                    <br />
                  </div>
                </div>
              </div>
              <div v-if="paramStatus === 1" style="color: green;">
                <p>{{message}}</p>
              </div>
              <div v-if="paramStatus === 2" style="color: red;">
                <p>{{message}}</p>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" v-on:click="resetData()" data-dismiss="modal" id="cancelButton">Cancel</button>
            <button type="button" class="btn btn-primary" v-on:click="patchAuction()" v-if="editing" >Save</button>
            <button type="button" class="btn btn-primary" v-on:click="createNewAuction()" v-else>Create</button>
          </div>
        </div>
      </div>
    </div>

    <br />
    <h1> My Auctions</h1><br/>

    <select v-model="auctionChoice" class="custom-select" style="width: 30%;">
      <option v-for="choice in auctionChoices" v-bind:value="choice.value">{{choice.value}}</option>
    </select>
    <button class="btn btn-primary" type="button" v-on:click="filter()">Filter</button>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editAuctionModal">
      Create New Auction
    </button>
    <small id="editHelp" class="form-text text-muted">Choose the type of your auctions you wish to view and hit 'filter'.</small><br/><br/>

    <p class="text-nowrap bd-highlight">{{message}}</p><hr>

    <div v-if="noAuctions">
      <div class="container">
        <p>Goodness me, there are no auction results!</p>
        <img class="img-thumbnail" src="./assets/confounded.png" style="width:50%; height:50%;" >
      </div>

    </div>

    <div class="card-deck">
      <div  v-for="auction in auctions">
      <div class="card" style="width: 18rem;">

        <div class="card-body">
          <div class="container">
            <img class="card-img-top" :src="getPhotoSrc(auction.id)" alt="Photo failed to load">
          </div>
          <h5 class="card-title">{{auction.title}}</h5>
          <p class="card-text">Highest Bid: $ {{convertPrice(auction.currentBid)}}</p>

          <router-link class="btn btn-primary" :to="{name: 'Auction', params: {auctionId: auction.id}}">
            View
          </router-link><br/><br/>
          <div v-if="editableAuction">
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editAuctionModal"
                    v-on:click="getAuctionDetails(auction.id)">
              Edit
            </button>
          </div>
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
          message: "",
          errorFlag: false,
          auctions: [],
          noAuctions: false,
          viewedAuction: {},
          categories: [],
          catId: 1,
          seller: {},
          auctionChoices: [{value: 'active'}, {value: 'sold'}, {value: 'unsold'}, {value: 'upcoming (editable)'}],
          auctionChoice: 'active',
          currentAuction: {categoryId: 1, title: "", description: "", startDateTime: 0, endDateTime: 0, reservePrice: 10,
          startingBid: 5},
          inputReservePrice: 0,
          inputStartingBid: 0,
          outputStartDateTime: "",
          outputEndDateTime: "",
          paramStatus: 0, //0 = init, 1 = valid, 2 = invalid
          editableAuction: false,
          editing: false,
          currentAuctionId: null,
          photo: null,
          photoMessage: "",
          helpMessage: "",
          // filtered: false;
        }
      },
      mounted: function() {
        this.getActiveAuctions();
        this.getAllCategories();
        this.setupCurrentDates();
      },

      methods: {
        createNewAuction: function() {
          let validAuction = this.validateAuction();
          if(validAuction) {

            this.$http.post('http://localhost:4941/api/v1/auctions', this.currentAuction,
              {
                headers : {
                  'X-Authorization': localStorage.getItem('token')
                }})
              .then(response => {
                this.currentAuctionId = response.data.id;
                if (this.photo != null) {
                  this.onUpload();
                }
                this.paramStatus = 1;
                this.message = "Success, The auction has been posted.";
                document.getElementById('cancelButton').disabled = true;
              })

              .catch(error => {
                this.paramStatus = 2;
                console.dir(error);
              })
          }
        },

        patchAuction: function() {
          let validAuction = this.validateAuction();
          if(validAuction) {

            this.$http.patch('http://localhost:4941/api/v1/auctions/' + this.currentAuctionId, this.currentAuction,
              {
                headers : {
                  'X-Authorization': localStorage.getItem('token')
                }})
              .then(response => {
                if (this.photo != null) {
                  this.onUpload();
                }
                this.paramStatus = 1;
                this.message = "Success, The auction has been posted.";
                document.getElementById('cancelButton').disabled = true;
              })

              .catch(error => {
                this.paramStatus = 2;
                console.dir(error);
              })
          }
        },

        parsePricesToInput: function() {
          this.inputReservePrice = this.currentAuction.reservePrice / 100;
          this.inputStartingBid = this.currentAuction.startingBid / 100;
        },

        convertPrice: function(price) {
          if (price === 0) {
            return 0
          } else {
            return price / 100;
          }
        },

        getAuctionDetails: function(id) {
          this.editing = true;
          this.$http.get('http://localhost:4941/api/v1/auctions/' + id)
            .then(response => {
              this.currentAuction = response.data;
              this.parseDatesToISO();
              this.parsePricesToInput();
              this.currentAuctionId = id;


            })
            .catch(error => {
              console.dir(error);
            })
        },

        filter: function() {
          this.editableAuction = false;
          if (this.auctionChoice === 'active') {
            this.getActiveAuctions();
          } else if (this.auctionChoice === 'sold') {
            this.getSoldAuctions();
          } else if (this.auctionChoice === 'unsold') {
              this.getUnsoldAuctions();
          } else {
              this.getUpcomingAuctions();
              this.editableAuction = true;
            }
        },

        getActiveAuctions: function() {
          this.noAuctions = false;
          this.$http.get('http://localhost:4941/api/v1/auctions?status=active&seller=' + localStorage.getItem('id'))
            .then(response => {
              this.auctions = response.data;
              this.message = "Auctions you have created that are yet to complete.";
              if (this.auctions.length < 1) {
                this.noAuctions = true;
              }
            })
            .catch(error => {
              console.dir(error);
            })
        },

        getSoldAuctions: function() {
          this.noAuctions = false;
          this.$http.get('http://localhost:4941/api/v1/auctions?status=won&seller=' + localStorage.getItem('id'))
            .then(response => {
              this.auctions = response.data;
              this.message = "Auctions you have created that completed with a winning bid.";
              if (this.auctions.length < 1) {
                this.noAuctions = true;
              }
            })
            .catch(error => {
              console.dir(error);
            })
        },

        getUnsoldAuctions: function() {
          this.noAuctions = false;
          this.$http.get('http://localhost:4941/api/v1/auctions?status=expired&seller=' + localStorage.getItem('id'))
            .then(response => {
              this.auctions = response.data;
              this.message = "Auctions you have created that completed without a winning bid.";
              if (this.auctions.length < 1) {
                this.noAuctions = true;
              }
            })
            .catch(error => {
              console.dir(error);
            })
        },

        getUpcomingAuctions: function() {
          this.noAuctions = false;
          this.$http.get('http://localhost:4941/api/v1/auctions?status=upcoming&seller=' + localStorage.getItem('id'))
            .then(response => {
              this.auctions = response.data;
              this.message = "Auctions you have created that haven't started - you can edit these.";
              if (this.auctions.length < 1) {
                this.noAuctions = true;
              }
            })
            .catch(error => {
              console.dir(error);
            })
        },

        onFileChanged: function(event) {
          this.photo = event.target.files[0];
          console.log(this.photo);
          this.photoMessage = "";
        },

        onUpload: function() {
          this.$http.post('http://localhost:4941/api/v1/auctions/' + this.currentAuctionId + '/photos', this.photo,
            {
              headers: {
                "X-Authorization": localStorage.getItem('token'),
                "Content-Type": "image/jpeg" || "image/jpg" || "image/png"
              }
            })
            .then(response => {
              console.log("photo upload successful")

            })
            .catch(error => {
              console.dir(error);
            })
        },


        deletePhoto: function() {
          this.photo = null;
          this.$http.delete('http://localhost:4941/api/v1/auctions/' + this.currentAuctionId + '/photos',
            {
              headers: {
                "X-Authorization": localStorage.getItem('token'),
              }
            })
            .then(() => {
              this.photoMessage = "Photo deleted"

            })
            .catch(error => {
              console.dir(error);
              this.photoMessage = "There is no photo to delete!"
            })
        },

        getPhotoSrc: function(id) {
          // console.log(this.viewedAuction);
          return "http://localhost:4941/api/v1/auctions/" + id + "/photos";
        },

        convertDate: function (input) {
          let date = new Date(parseInt(input));
          return date.toLocaleDateString();
        },

        parseDatesFromISO: function() {
          console.log(this.outputStartDateTime);
          console.log(new Date(this.outputStartDateTime).getTime());
          this.currentAuction.startDateTime = new Date(this.outputStartDateTime).getTime();
          this.currentAuction.endDateTime = new Date(this.outputEndDateTime).getTime();
        },

        parseDatesToISO: function() {
          let tzoffset = (new Date()).getTimezoneOffset() * 60000;
          this.outputStartDateTime = (new Date(this.currentAuction.startDateTime - tzoffset)).toISOString().slice(0, -8);
          this.outputEndDateTime = (new Date(this.currentAuction.endDateTime - tzoffset)).toISOString().slice(0, -8);
        },

        getAllCategories: function() {
          this.$http.get('http://localhost:4941/api/v1/categories')
            .then(response => {
              this.categories = response.data;
              this.categories.sort((a, b) => parseInt(a.categoryId) - parseInt(b.categoryId));
            })
            .catch(error => {
              console.dir(error)
            })
        },

        resetData: function() {
          this.currentAuction = {};
          this.currentAuctionId = 0;
          this.editing = false;
          this.message = "";
          this.photoMessage = "";
          this.paramStatus = 0;
          this.setupCurrentDates();
          this.filter();
        },

        setupCurrentDates: function() {
          let currentDate = new Date(Date.now() + 86400000).toISOString().split("T")[0];

          this.outputStartDateTime = currentDate + "T00:00";
          this.outputEndDateTime = currentDate + "T23:59";
        },

        validateAuction: function() {
          let valid = false;
          this.paramStatus = 2;
          this.parseDatesFromISO();
          if (this.currentAuction.title === "") {
            this.message = "Title field is blank.";

          } else if (this.currentAuction.description === "") {
            this.message = "Description field is blank.";

          } else if (this.inputReservePrice < 0.01) {
            this.message = "Reserve price must be above $0";

          } else if (this.inputStartingBid < 0.01) {
            this.message = "Starting bid must be above $0.";

          } else if (this.currentAuction.startDateTime >= this.currentAuction.endDateTime) {
            this.message = "Start time must be before the end time."

          } else if (this.currentAuction.startDateTime < Date.now()) {
            this.message = "Your auction must have a start time in the future.";

          } else {
            valid = true;
            this.currentAuction.reservePrice = this.inputReservePrice * 100;
            this.currentAuction.startingBid = this.inputStartingBid * 100;
            this.paramStatus = 1;
          }
          return valid;
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
