import Head from "next/head";
import React from "react";

export default function Login() {
    return (<>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          <div>
      <p>Welcome Back 👋</p>
      <p>
        Every dream begins with a step forward; every achievement, with the
        courage to start. Dare to dream, dare to act, and watch the impossible
        become your reality
          </p>
          <label htmlFor="">Email <input type="text" placeholder="email" /></label>
          <label htmlFor="">Password <input type="text" placeholder="password" /></label>
          <p>Forgot Password?</p>
          <button>Sign in</button>
          <p>or</p>
          <button>Sign in with Google</button>
          <button>Sign in with Facebook</button>
              <p>Don't you have an account? Sign up</p>
          </div>
          <div>
              <img src="" alt="" />
          </div>
      </div>
  </>
  );
}
