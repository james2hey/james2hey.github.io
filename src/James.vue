<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"></a>
            <form class="form-inline">
                <li class="nav-item">
                    <a class="nav-link" href="#about">About Me</a>
                    <!--<a class="nav-link" href="#about" v-smooth-scroll="{ duration: 1000, offset: -50 }">About Me</a>-->
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">My Skills</a>
                    <!--<a class="nav-link" href="#skills" v-smooth-scroll="{ duration: 1000, offset: -50 }">My Skills</a>-->
                </li>
                <li class="nav-item">
                    <!--<a class="nav-link" href="#work" v-smooth-scroll="{ duration: 1000, offset: -50 }">Work-->
                        <!--Experience</a>-->
                    <a class="nav-link" href="#work">Work Experience</a>
                </li>
                <li class="nav-item">
                    <!--<a class="nav-link" href="#contact" v-smooth-scroll="{ duration: 1000, offset: -50 }">Contact</a>-->
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </form>
        </nav>
        <br>

        <div class="card" style="width: 30rem; margin-left:auto; margin-right:auto; border-color: transparent">
            <h1>James Toohey</h1>
            <img class="card-img-top" src="./assets/portrait.jpg" alt="Card image cap"><br>
            <h3 id="about">About Me</h3>
            <p>Hi, I'm James - a student in my penultimate year of study seeking employment over the 2018/19 summer.
                From studying
                software engineering and computer science papers, I have become very keen to get into the workforce and
                apply my knowledge. I'm aiming to pursue a career related to developing either financial or medical
                software, and am
                interested to see what software requirements are necessary for these sectors.</p>

            <p>Throughout my study, I have particularly enjoyed working on team projects where we have been developing
                software using agile methodologies under the Scrum framework. The challenges we've faced from these
                projects have been very useful in relation to my problem-solving skills and helping me further enjoying
                working as a software developer. I am therefore looking for a job where similar techniques are carried
                out so that I can apply my knowledge effectively and productively.</p>
            <hr/>

            <h3 id="skills">My Skills</h3>
            <h5>Front End Development</h5>
            <div class="card">
                <img src="./assets/front-end.png" alt="html5" class="img-thumbnail">
            </div>


            <p>
                In the last two years, I have been involved with front-end development and have grown to really enjoy it.
                I've been using Vue.js for the front-end development, so evidently, I have experience with MVVC. An example auctions website I have developed using Vue.js can be found <router-link to="/home">here</router-link>. In
                various Java projects, I have also used the MVC architecture with fxml.</p>

            <h5>Back End Development</h5>
            <p><img src="./assets/nodejs.png" alt="html5" class="img-thumbnail" align="right" width="200px"
                    height="200px">
                This year I have learned how to design RESTful API's for servers that are used to
                communicate with multiple clients. This has also included using databases for the server to retrieve information
                from so that it can serve this data to the client. I have created servers using both Node.js and Java's Spring Boot
                framework.</p>

            <h5>Relational Databases</h5>
            <p><img src="./assets/db.png" alt="html5" class="rounded float-left" width="200px" height="200px">I have had
                a lot of exposure to relational databases, using management tools like SQLite and MySQL. Databases are a topic
                that I find really enjoyable - I love learning about query optimization how databases can handle large
                quantities of data.</p>

            <h5>Embedded Systems</h5>
            <p><img src="./assets/funkit.png" alt="html5" class="img-thumbnail" align="right" width="200px"
                    height="200px">
            I have studied computer systems which used C++ to program a small embedded system. This was a microcomputer
            which had input buttons, infrared light receivers/transmitters, and a matrix of lights to display output. I learnt how to handle the
            IO of the microcomputer so that user interactions with the buttons would update the matrix display. This
            involved a project where I created a game of snake between two fun kits.</p>

            <h5>Computer Graphics</h5>
            <div class="card">
                <img src="./assets/opengl.png" alt="html5" class="img-fluid">
            </div>
            <p>Using OpenGL has been a very fun way for me to get into computer graphics, and really brought out my
                creative side. Since I was never very good at drawing when I was younger, I love the fact that I can use
                a computer to do it for me. I've used OpenGL to render and model 3D scenes. I've also studied algorithms
            to implement transformations and lighting models. </p>

            <hr/>

            <h3 id="work">Work Experience</h3>
            <h5>ClubHub Software Services Ltd</h5>
            <p><img src="./assets/clubhub.png" alt="html5" class="rounded float-left" align="left" width="200px"
                    height="200px">Last year I was an intern at <a href="https://clubhubssl.com" target="_blank">ClubHub
                Software Services Ltd</a>
                in St Heliers, where I developed websites for sports clubs in New Zealand, Australia, and Asia. This
                also involved
                meeting with clients to discuss the requirements of their website and how they wanted it to look. Being
                able to help these clubs with websites that I was creating gave me a great sense of achievement. I
                really enjoyed each of the different challenges that clients would have with how they wanted their
                websites laid out and information portrayed.</p>
            <br>

            <h5>Mt Albert YMCA</h5>
            <p><img src="./assets/ymca.jpg" alt="html5" class="rounded float-right" align="right" width="180px"
                    height="220px">Throughout my school years, I was a volunteer at the Mt Albert YMCA as a Raise Up
                member. This is where a team of us met up each week to organise community events. This program built on
                my leadership skills and gave me a passion for working productively in team environments. These skills
                have been essential during my university group projects and I am looking forward to applying them in a
                real-world context. An article about my time at the YMCA can be found <a
                        href="https://www.ymcaauckland.org.nz/news/james-toohey-raising-up" target="_blank">here</a>.
            </p>


            <hr/>

            <h3 id="contact">Contact</h3>

            <table style="width:100%">
                <tr>
                    <td><p><a href="mailto:jamestoohey97@gmail.com"><img src="./assets/email.png" alt="html5"
                                                                         class="rounded float"
                                                                         style="width:20px; height:20px;">
                        jamestoohey97@gmail.com</a></p></td>
                    <td><a href="https://github.com/james2hey" target="_blank"><img src="./assets/github.png"
                                                                                    alt="html5" class="rounded float"
                                                                                    style="width:20px; height:20px;">
                        GitHub</a></td>
                </tr>
                <tr>
                    <td><p><img src="./assets/phone.png" alt="html5" class="rounded float"
                             style="width:20px; height:20px;"> 021 265
                        9668</p>
                    </td>
                    <td><a href="https://www.linkedin.com/in/james-toohey-01997" target="_blank"><img
                            src="./assets/linkedin.png" alt="html5" class="rounded float"
                            style="width:20px; height:20px;"> LinkedIn</a></td>
                </tr>

            </table>
            <hr/>

            <h3>Hobbies</h3>
            <img class="card-img-top" src="./assets/football.jpg" alt="Cardgage cap"><br>
            <p>
            I have competitively been playing football since a young age and am currently playing at Christchurch
            United in the mens first team. I really enjoy being a part of a team and playing under a team environment.
            Some of my games have articles written about them, for example <a href="http://cufc.co.nz/christchurch-united-with-a-solid-win-against-burwood-afc/"
                                                                             target="_blank">this</a> one from the 2017
            season.
            </p>

            <hr/>
            <p style="font-size: 12px">Icons made by <a href="https://www.flaticon.com/authors/zurb" title="Phone receiver">Phone receiver</a>
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
                        href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                        target="_blank">CC 3.0 BY</a></p>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'app',
        data() {
            return {
                msg: ''
            }
        },
        mounted: function () {
            //this.tester();
        },

        methods: {}
    }
</script>

<style lang="css" scoped>
    p {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: left;
        color: #2c3e50;
        /*margin-top: 10px;*/
    }

    nav {
        margin-top: -60px;
        background-color: transparent;
        /*margin: 0;*/
        /*padding: 0;*/
    }

    h1 {
        font-weight: normal;
        font-family: Helvetica;
        text-align: center;
    }
    h2 {
        font-weight: normal;

    }
    h5 {
        color: grey;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    card {
        border-color: transparent
    }
    li {
        display: inline-block;
        margin: 0 10px;
        color: black;
    }
    a {
        color: dodgerblue;
    }

    form {
        margin-left: auto;
        margin-right: auto;
    }


</style>
