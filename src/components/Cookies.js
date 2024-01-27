import React from "react";
import ScrollToTopOnMount from "../helpers/ScrollToTopOnMount";

const Cookies = () => {
  return (
    <div className='service-container'>
      <div className='service-cards'>
        <ScrollToTopOnMount />
        <header>
          <h2>Cookie Policy</h2>
        </header>
        <p>
          <h3>Cookie Policy</h3>
          Some cookies on this site are essential, and the site won't work as
          expected without them. These cookies are set when you submit a form,
          login or interact with the site by doing something that goes beyond
          clicking on simple links. We also use some non-essential cookies to
          anonymously track visitors or enhance your experience of the site. If
          you're not happy with this, we won't set these cookies but some
          features of the site may be unavailable. Some cookies on this site are
          essential, and the site won'twork as expected without them. These
          cookies are set when you submit a form, login or interact with the
          site by doing something that goes beyond clicking on simple links. To
          control third party cookies, please read this{" "}
          <a
            href='http://howto.cnet.com/8301-11310_39-20042703-285/disable-third-party-cookies-in-ie-firefox-and-google-chrome/'
            target='_blank'
            rel='noreferrer'
            className="link"
          >
            Article
          </a>
        </p>
        <p>
          <h3>Last Note</h3>
          Be aware we also set the cookie 'weUseCookie' to store your consent
          when you browse our website
        </p>
      </div>
    </div>
  );
};

export default Cookies;
