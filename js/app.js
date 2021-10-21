const unsplash = async (x) => {
  let url = `https://api.unsplash.com/search/photos?query=galaxy&client_id=fmDavDE6GbN_7vTEnP369FopzoC39i72LbwQ8aawZQs`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const unsplashGet = async () => {
  let data = await unsplash();
  var url = data.results;
  url.forEach((x) => {
    var likes = x.likes;
    var urls = x.urls.regular;
    var name = x.user.name;
    var twitter = x.user.twitter_username;
    var bio = x.user.bio;
    var instagram = x.user.instagram_username;
    var portfolio_url = x.user.social.portfolio_url;
    var profile_pic = x.user.profile_image.large;
    var usernamel = x.user.links.html;
    var username = x.user.username;
    var thatpic = x.links.html;

    console.log(instagram);

    var cont = document.querySelector(".is-content");
    var el = document.createElement("div");
    el.innerHTML = `<div class="is-box" data-aos="fade-in">
      <div class="is-box-profile">
        <div class="is-box-profile-pic">
          <img src="${profile_pic}"/>
        </div>
        <div class="is-box-profile-name">
          ${name}
          <div class="is-box-profile-name-username"><a href=${usernamel}>@${username}</a></div>
        </div>
      </div>
      <div class="is-box-img">
        <img src="${urls}"/>
      </div>
      <div class="is-box-img-info">
        <div class="like-counter">
          <a href="#" style="pointer-events:none;"class="only-pad">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              aria-hidden="true"
              role="img"
              width="1em"
              height="1em"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 48 48"
            >
              <path
                fill="#F44336"
                d="M34 9c-4.2 0-7.9 2.1-10 5.4C21.9 11.1 18.2 9 14 9C7.4 9 2 14.4 2 21c0 11.9 22 24 22 24s22-12 22-24c0-6.6-5.4-12-12-12z"
              />
            </svg>
          </a>  
          ${likes}
        </div>
        <div class="download-counter">
        <a href="${thatpic}" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        width="48" height="48"
        viewBox="0 0 172 172"
        style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1"></path><g fill="#1565c0" stroke="none" stroke-width="1"><path d="M86,132.94167l-39.41667,-46.94167h78.83333zM71.66667,14.33333h28.66667v14.33333h-28.66667zM71.66667,35.83333h28.66667v14.33333h-28.66667z"></path><path d="M71.66667,57.33333h28.66667v39.41667h-28.66667zM21.5,143.33333h129v14.33333h-129z"></path></g><g fill="#cccccc" stroke="none" stroke-width="1"><path d="M99.195,68.94v3.7h-10.97v30.42h-4.48v-30.42h-10.94v-3.7z"></path></g><path d="M62.805,113.06v-54.12h46.39v54.12z" fill="#ff0000" stroke="#50e3c2" stroke-width="3" opacity="0"></path></g></svg></a>
        </div>
      </div>
      <div class="is-social">
      ${
        instagram != null
          ? `<div class='is-instagram'>`
          : `<div class='is-instagram active'>`
      }
        <a href="http://instagram.com/${instagram}" ${
      instagram == null
        ? `style ="display: inline-block; pointer-events:none;"`
        : ""
    }>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
              fill=currentColor()>
                  <linearGradient
                    id="a"
                    x1="1.464"
                    x2="14.536"
                    y1="14.536"
                    y2="1.464"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107" />
                    <stop offset=".507" stop-color="#F44336" />
                    <stop offset=".99" stop-color="#9C27B0" />
                  </linearGradient>
                  <path
                    fill="url(#a)"
                    d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                  />
                  <linearGradient
                    id="b"
                    x1="5.172"
                    x2="10.828"
                    y1="10.828"
                    y2="5.172"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107" />
                    <stop offset=".507" stop-color="#F44336" />
                    <stop offset=".99" stop-color="#9C27B0" />
                  </linearGradient>
                  <path
                    fill="url(#b)"
                    d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                  />
                  <linearGradient
                    id="c"
                    x1="11.923"
                    x2="12.677"
                    y1="4.077"
                    y2="3.323"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#FFC107" />
                    <stop offset=".507" stop-color="#F44336" />
                    <stop offset=".99" stop-color="#9C27B0" />
                  </linearGradient>
                  <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)" /></svg
              ></a>
            </div>
            ${
              twitter != null
                ? `<div class='is-twitter'>`
                : `<div class='is-twitter active'>`
            }
              <a href="http://twitter.com/${twitter}" ${
      twitter == null
        ? `style ="display: inline-block;
              pointer-events: none;"`
        : ""
    }
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  width="1.23em"
                  height="1em"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 256 209"
                  fill=currentColor()
                >
                  <path
                    d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52c0 4.117.465 8.125 1.36 11.97c-43.65-2.191-82.35-23.1-108.255-54.876c-4.52 7.757-7.11 16.78-7.11 26.404c0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661c0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475c-17.975 14.086-40.622 22.483-65.228 22.483c-4.24 0-8.42-.249-12.529-.734c23.243 14.902 50.85 23.597 80.51 23.597c96.607 0 149.434-80.031 149.434-149.435c0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
                    fill="#55acee"
                  /></svg
              ></a>
            </div>
            ${
              portfolio_url != null
                ? `<div class='is-portfolio'>`
                : `<div class='is-portfolio active'>`
            }
              <a href="${portfolio_url}" ${
      portfolio_url == null
        ? `style ="display: inline-block;
              pointer-events: none;"`
        : ""
    }
                ><svg 
                fill=currentColor() xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="64" height="64"
                viewBox="0 0 172 172"
                style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="none" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none" stroke="none" stroke-width="1"></path><g stroke="none" stroke-width="1"><path d="M109.98077,44.98462h-44.65385c-0.91325,0 -1.65385,-0.74059 -1.65385,-1.65385v-3.80385c0,-6.10997 4.9708,-11.08077 11.08077,-11.08077h25.8c6.1103,0 11.08077,4.9708 11.08077,11.08077v3.80385c0,0.91325 -0.74026,1.65385 -1.65385,1.65385zM66.98077,41.67692h41.34615v-2.15c0,-4.28611 -3.48697,-7.77308 -7.77308,-7.77308h-25.8c-4.28611,0 -7.77308,3.48697 -7.77308,7.77308z" fill="#414a56"></path><path d="M54.08077,150.5v6.61538h-8.26923l-11.57692,-6.61538l11.57692,-6.61538h8.26923z" fill="#ffe2b6"></path><path d="M131.15,143.88462c3.655,0 6.61538,2.96038 6.61538,6.61538c0,3.655 -2.96038,6.61538 -6.61538,6.61538h-6.61538v-6.61538v-6.61538z" fill="#32438c"></path><rect x="162.5" y="455" transform="scale(0.33077,0.33077)" width="215" height="20" fill="#21bf77"></rect><rect x="162.5" y="435" transform="scale(0.33077,0.33077)" width="215" height="20" fill="#59d9a4"></rect><path d="M144.71154,21.5c2.73844,0 4.96154,2.22277 4.96154,4.96154c0,2.73877 -2.2231,4.96154 -4.96154,4.96154c-2.73844,0 -4.96154,-2.22277 -4.96154,-4.96154c0,-2.73877 2.2231,-4.96154 4.96154,-4.96154z" fill="#ff5987"></path><path d="M29.76923,16.53846c4.11146,0 7.44231,3.33085 7.44231,7.44231c0,4.11146 -3.33085,7.44231 -7.44231,7.44231c-4.11146,0 -7.44231,-3.33085 -7.44231,-7.44231c0,-4.11146 3.33085,-7.44231 7.44231,-7.44231z" fill="#ff5987"></path><path d="M145.53846,41.34615c-6.87835,0 -108.90842,0 -115.76923,0c-5.02438,0 -9.09615,4.07177 -9.09615,9.09615v2.48077v7.77308v64.16923c0,5.02438 4.07177,9.09615 9.09615,9.09615h17.36538h13.23077h54.57692h13.23077h17.36538c5.02405,0 9.09615,-4.07177 9.09615,-9.09615v-64.16923v-7.77308v-2.48077c0,-5.02438 -4.0721,-9.09615 -9.09615,-9.09615z" fill="#f06000"></path><path d="M154.63462,52.92308v7.77308c0,12.14915 -9.847,21.99615 -21.99615,21.99615c-9.51987,0 -74.12307,0 -85.50385,0h-4.46538c-12.14915,0 -21.99615,-9.847 -21.99615,-21.99615v-7.77308z" fill="#f88f19"></path><circle cx="455" cy="457.5" transform="scale(0.33077,0.33077)" r="7.5" fill="#94d4ff"></circle><circle cx="390" cy="92.5" transform="scale(0.33077,0.33077)" r="7.5" fill="#94d4ff"></circle><path d="M128.17308,82.69231v51.26923h-13.23077c0,-4.81038 0,-44.48515 0,-51.26923z" fill="#ff9900"></path><rect x="182.5" y="365" transform="scale(0.33077,0.33077)" width="165" height="40" fill="#ffcc66"></rect><circle cx="320" cy="62.5" transform="scale(0.33077,0.33077)" r="7.5" fill="#94d4ff"></circle><path d="M100.05769,82.69231v9.92308h-4.96154h-14.88462h-4.96154v-9.92308z" fill="#ffcc66"></path><path d="M95.09615,92.61538v5.78846c0,4.11146 -3.33085,7.44231 -7.44231,7.44231c-4.11146,0 -7.44231,-3.33085 -7.44231,-7.44231v-5.78846z" fill="#ff9900"></path><circle cx="190" cy="52.5" transform="scale(0.33077,0.33077)" r="7.5" fill="#94d4ff"></circle><path d="M60.36538,133.96154h-13.23077v-51.26923h13.23077c0,6.78342 0,46.46448 0,51.26923z" fill="#ff9900"></path><circle cx="140" cy="87.5" transform="scale(0.33077,0.33077)" r="7.5" fill="#94d4ff"></circle><circle cx="60" cy="432.5" transform="scale(0.33077,0.33077)" r="7.5" fill="#94d4ff"></circle></g><g fill="#cccccc" stroke="none" stroke-width="1"><path d="M99.195,68.94v3.7h-10.97v30.42h-4.48v-30.42h-10.94v-3.7z"></path></g><path d="M62.805,113.06v-54.12h46.39v54.12z" fill="#ff0000" stroke="#50e3c2" stroke-width="3" opacity="0"></path></g></svg>
              </a>
            </div>
          </div>
    </div>`;

    cont.appendChild(el);
  });
};

window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.pageYOffset ===
    document.documentElement.offsetHeight
  ) {
    setTimeout(() => {
      unsplashGet();
    }, 500);
  }
});

document.querySelector(".grid-icon").addEventListener("click", (e) => {
  let setter = document.querySelector(".is-content");
  setter.classList.remove("gridder");
});

document.querySelector(".list-icon").addEventListener("click", (e) => {
  let setter = document.querySelector(".is-content");
  setter.classList.add("gridder");
});

unsplashGet();
