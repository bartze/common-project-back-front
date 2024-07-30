import React, { Component } from "react";
import { withRouter } from '../../common/with-router';


class Dashboard extends Component {

  render() {
    return (
      <>
    <div class="sidebar">
      <div class="logo">
        <img src="media/dashboard_24dp_FILL0_wght400_GRAD0_opsz24.svg" />
        <h1>Dashboard</h1>
      </div>
      <ul>
        <li class="item">
          <img src="media/home_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
          <h3>Home</h3>
        </li>
        <li class="item">
          <img src="media/person_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
          <h3>Profile</h3>
        </li>
        <li class="item">
          <img
            src="media/chat_bubble_24dp_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <h3>Messages</h3>
        </li>
        <li class="item">
          <img src="media/history_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
          <h3>History</h3>
        </li>
        <li class="item">
          <img src="media/task_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
          <h3>Tasks</h3>
        </li>
        <li class="item">
          <img src="media/groups_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
          <h3>Communities</h3>
        </li>
      </ul>
      <ul>
        <li class="item">
          <img
            src="media/settings_24dp_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <h3>Settings</h3>
        </li>
        <li class="item">
          <img
            src="media/contact_support_24dp_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <h3>Support</h3>
        </li>
        <li class="item">
          <img
            src="media/verified_user_24dp_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
          />
          <h3>Privacy</h3>
        </li>
      </ul>
    </div>
    <div class="header">
      <div class="search">
        <div>
          <img src="media/search_24dp_FILL0_wght400_GRAD0_opsz24.svg" alt="" />
          <input type="text" class="searchBar" />
        </div>
      </div>
      <div class="noti">
        <div>
          <img
            src="media/notifications_active_24dp_FILL0_wght400_GRAD0_opsz24.svg"
            alt=""
            class="nsymbol"
          />
          <img src="https://i.pravatar.cc/300" alt="" class="pfp" />
          <a href="https://github.com/Username">Username</a>
        </div>
      </div>
      <div class="about">
        <div>
          <img src="https://i.pravatar.cc/300" alt="" class="bpfp" />
          <div>
            <h4>Hi there,</h4>
            <h1>Username (@Username)</h1>
          </div>
        </div>
      </div>
      <div class="buttons">
        <div>
          <button class="btn">New</button>
          <button class="btn">Upload</button><button class="btn">Share</button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="projects">
        <h3>Your Projects</h3>
        <div class="cards">
          <div class="card">
            <div class="cardData">
              <a href="https://username.github.io/Calculator/">Calculator</a>
              <img src="media/calc.png" alt="" />
              <p>
                Final project in Odin project foundations. In this project my
                skills to use the basics of HTML, CSS and javascript were tested
                to it's potential.
              </p>
              <div class="links">
                <a href="">
                  <img
                    src="media/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="media/share_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="https://github.com/Username/Calculator">
                  <img
                    src="media/link_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cardData">
              <a href="https://Username.github.io/Etch-a-Sketch/"
                >Etch-a-Sketch</a
              >
              <img src="media/etch.png" alt="" />
              <p>
                In Odin project Foundations course, this project was given to
                practice our DOM skills. This game is a mix of scribble and
                etch-a-skitch.
              </p>
              <div class="links">
                <a href="">
                  <img
                    src="media/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="media/share_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="https://github.com/Username/Etch-a-Sketch">
                  <img
                    src="media/link_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cardData">
              <a href="https://Username.github.io/Sign-up-Form/"
                >Sign-up Form</a
              >
              <img src="media/project_pic_1.png" alt="" />
              <p>
                This project is given in Odin Project intermediate HTML and CSS
                course. It requires good control over forms and styling forms.
              </p>
              <div class="links">
                <a href="">
                  <img
                    src="media/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="media/share_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="https://github.com/Username/Sign-up-Form">
                  <img
                    src="media/link_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cardData">
              <a href="https://Username.github.io/Landing-Page/"
                >Landing Page</a
              >
              <img src="media/lp.png" alt="" />
              <p>
                Landing page website created in the foundations course of the
                oding project. Created using HTML and CSS.
              </p>
              <div class="links">
                <a href="">
                  <img
                    src="media/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="media/share_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="https://github.com/Username/Landing-Page">
                  <img
                    src="media/link_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cardData">
              <a href="https://Username.github.io/odin-recipes/"
                >Odin recipes</a
              >
              <img src="media/OdinRecipes.png" alt="" />
              <p>
                First project in the Odin project Foundations course built with
                only HTML. This is my first project after learning HTML.
              </p>
              <div class="links">
                <a href="">
                  <img
                    src="media/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="media/share_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="https://github.com/Username/odin-recipes">
                  <img
                    src="media/link_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
          <div class="card">
            <div class="cardData">
              <a href="https://Username.github.io/rock-paper-scissors/"
                >Project Name</a
              >
              <img src="media/rockPaperScissors.png" alt="" />
              <p>
                This project is given in odin project foundations section after
                learning Javascript. This is the first project i made after
                learning javascript. Try to win if you can.
              </p>
              <div class="links">
                <a href="">
                  <img
                    src="media/favorite_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="">
                  <img
                    src="media/share_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
                <a href="https://github.com/Username/rock-paper-scissors">
                  <img
                    src="media/link_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="social">
        <div class="ants">
          <h3>Announcements</h3>
          <div class="scard">
            <div>
              <h4>Intermediate HTML and CSS</h4>
              <p>
                Completion of intermediate HTML and CSS course in the odin
                project after this
                <span
                  ><a href="https://github.com/Username/Admin-Dashboard"
                    >Admin Dashboard</a
                  ></span
                >
                project.
              </p>
            </div>
            <div>
              <h4>GSSOC contribution</h4>
              <p>
                Pull request got merged for
                <span
                  ><a
                    href="https://github.com/Username/GameZone/tree/main/Games/Etch_a_Sketch_"
                    >Etch-a-Sketch-2</a
                  ></span
                >
                after raising an issue to add a new game in the kunjgit <span
                  ><a href="https://github.com/kunjgit/GameZone"
                    >GameZone</a
                  ></span
                >.
              </p>
            </div>
            <div>
              <h4>TheOdinProject Foundation</h4>
              <p>
                Foundations course completed for the odin project. Learned HTML,
                CSS, JAVASCRIPT, GIT, GITHUB.
              </p>
            </div>
          </div>
        </div>
        <div class="trending">
          <h3>Social</h3>
          <div class="scard">
            <div>
              <img src="media/friend.png" alt="" />
              <div>
                <a href="https://github.com/Username">@Username</a>
                <h6>Github</h6>
              </div>
            </div>
            <div>
              <img
                src="https://media.licdn.com/dms/image/D5603AQFkzXF0m8j6AA/profile-displayphoto-shrink_400_400/0/1718237328047?e=1723680000&v=beta&t=SyzrZpl1v9mGKqN5QPhQA5PVfwMvfQrDpSnAHoO633M"
                alt=""
              />
              <div>
                <a href="https://www.linkedin.com/in/username/"
                  >Username</a
                >
                <h6>Linkedin</h6>
              </div>
            </div>
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div>
                <a href="https://discord.com/channels/@username"
                  >@Username</a
                >
                <h6>Discord</h6>
              </div>
            </div>
            <div>
              <img
                src="data:image/png;base64,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"
                alt=""
              />
              <div>
                <a href="https://www.reddit.com/user/Material-Tackle-1647/"
                  >@M-T-1647</a
                >
                <h6>Reddit</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    );
  }
}

export default withRouter(Dashboard);