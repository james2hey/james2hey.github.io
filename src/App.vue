<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"></a>
            <form class="form-inline">
                <li class="nav-item">
                    <a class="nav-link" href="#about">About Me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#skills">My Skills</a>
                </li>
                <li class="nav-item">
                    <!--<a class="nav-link" href="#work" v-smooth-scroll="{ duration: 1000, offset: -50 }">Work Experience</a>-->
                    <a class="nav-link" href="#work">Work Experience</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#contact">Contact</a>
                </li>
            </form>
        </nav>
        <br>

        <div class="card" style="width: 30rem; margin-left:auto; margin-right:auto; border-color: transparent">
            <h1>Hi, I'm James</h1>
            <img class="card-img-top" src="./assets/portrait.jpg" alt="Card image cap"><br>
            <h3 id="about">About Me</h3>
            <p>The plain text resume (or ASCII resume) is an online document constructed without formatting in plain
                text file format. A plain text resume is most often sent by e-mail, but can also be sent by fax, postal
                mail, or courier.</p>
            <p>Plain text resumes are heading into the sunset, but you may be stuck with the plain look until the
                recruiting world totally embraces handsomely formatted e-resumes.</p>

            <h3 id="skills">My Skills</h3>
            <h5>Front End Development</h5>
            <div class="card">
                <img src="./assets/front-end.png" alt="html5" class="img-thumbnail">
            </div>
            <p>I've done blah Plain text resumes are heading into the sunset, but you may be stuck with the plain look
                until the recruiting world totally embraces handsomely formatted e-resumes.</p>
            <br>

            <h5>Back End Development</h5>
            <div class="card">
                <img src="./assets/nodejs.png" alt="html5" class="img-thumbnail">
            </div>
            <p>I've done blah Plain text resumes are heading into the sunset, but you may be stuck with the plain look
                until the recruiting world totally embraces handsomely formatted e-resumes.</p>
            <br>

            <h5>Relational Databases</h5>
            <div class="card">
                <img src="./assets/db.png" alt="html5" class="img-thumbnail">
            </div>
            <p>I've done blah Plain text resumes are heading into the sunset, but you may be stuck with the plain look
                until the recruiting world totally embraces handsomely formatted e-resumes.</p>
            <br>

            <h5>Computer Graphics</h5>
            <div class="card">
                <img src="./assets/opengl.png" alt="html5" class="img-thumbnail">
            </div>
            <p>I've done blah Plain text resumes are heading into the sunset, but you may be stuck with the plain look
                until the recruiting world totally embraces handsomely formatted e-resumes.</p>

            <br>
            <br>

            <h3 id="work">Work Experience</h3>
            <div class="card">
                <img src="./assets/clubhub.png" alt="html5" class="img-thumbnail">
            </div>
            <p>Last year I was an intern at ClubHub Software Services Ltd in St Heliers, where I developed websites for
                sports clubs in New Zealand and Dubai. This also involved meeting with clients to discuss the
                requirements of their website and how they wanted it to look. Being able to help these clubs with
                websites that I was creating gave me a great sense of achievement. I really enjoyed each of the
                different challenges that clients would have with how they wanted their websites laid out and
                information portrayed. </p>
            <br>

            <h3 id="contact">Contact</h3>
            <p>Feel free to contact me ...</p>

            <p><a href="mailto:jamestoohey97@gmail.com"><img src="./assets/email.png" alt="html5" class="img-thumbnail"
                                                             style="width:30px; height:30px;">
                jamestoohey97@gmail.com</a></p>
            <p><img src="./assets/phone.png" alt="html5" class="img-thumbnail" style="width:30px; height:30px;"> 021 265
                9668</p>

            <br/>
            <h3>Legal Stuff</h3>
            <div>Icons made by <a href="https://www.flaticon.com/authors/zurb" title="Phone receiver">Phone receiver</a>
                from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a
                        href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0"
                        target="_blank">CC 3.0 BY</a></div>
            <br/>
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

        methods: {
            tester: function () {
                setInterval(function () {
                    this.msg += "1";
                    console.log("called");
                }, 3000);
            },
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
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
        color: green;
    }

    nav {
        background-color: transparent;
    }

    form {
        margin-left: auto;
        margin-right: auto;
    }
</style>
