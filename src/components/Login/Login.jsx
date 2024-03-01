// eslint-disable-next-line no-unused-vars
import React from "react";
import "tachyons";
const Login = () => {
  return (
    <article
      className="br3 ba  b-10 mv4 w-100 w-40-s w-25-l mw7 center"
      style={{
        position: "relative",

        borderColor: "#1095e8",
        boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.7 )",
      }}
    >
      <main className="pa4 gray-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent  w-150"
                type="email"
                name="email-address"
                id="email-address"
                style={{
                  color: "white",
                  boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                  borderColor: "#1095e8",
                }}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent  w-150"
                type="password"
                name="password"
                id="password"
                style={{
                  color: "white",
                  boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )",
                  borderColor: "#1095e8",
                }}
              />
            </div>
            <label className="pa0 ma0 lh-copy f6 pointer">
              <input type="checkbox" />
              &nbsp;Remember me
            </label>
          </fieldset>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--gray bg-transparent grow pointer f6 dib"
              style={{
                color: "#1095e8",
                borderColor: "#1095e8",
                boxShadow: "0px 0px 8px 2px rgba( 7, 76, 250, 0.7 )",
              }}
              type="submit"
              value="Sign in"
            />
          </div>
          <div className="lh-copy mt3"></div>
        </div>
      </main>
    </article>
  );
};

export default Login;
