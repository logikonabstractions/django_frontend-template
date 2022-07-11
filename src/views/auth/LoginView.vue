<template>
  <div class="log-form">
    <h2>Login to your account</h2>
    <form>
      <input type="text" title="username" placeholder="username" />
      <input type="password" title="username" placeholder="password" />
      <button type="submit" class="btn">Login</button>
      <a class="forgot" href="#">Forgot Username?</a>
    </form>
  </div>
  <!--end log form -->
</template>

<script setup></script>

<style scoped>
/*@import url(https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Open+Sans:400,300,600);*/

/** {*/
/*  box-sizing: border-box;*/
/*}*/

/*body {*/
/*  !*font-family: 'open sans', helvetica, arial, sans;*!*/
/*  !*background:url(http://farm8.staticflickr.com/7064/6858179818_5d652f531c_h.jpg) no-repeat center center fixed;*!*/
/*  -webkit-background-size: cover;*/
/*  -moz-background-size: cover;*/
/*  -o-background-size: cover;*/
/*  background-size: cover;*/
/*}*/

/*@grey:#2a2a2a;*/
/*var(--login-blue):#1fb5bf;*/
.log-form {
  width: 40%;
  min-width: 320px;
  max-width: 475px;
  background: #fff;
  align-self: center;
  justify-self: center;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
}

form {
  display: block;
  width: 100%;
  padding: 2em;
}

h2 {
  width: 100%;
  color: var(--vt-c-white-soft);
  /*font-family: 'open sans condensed';*/
  font-size: 1.35em;
  display: block;
  background: var(--vt-c-black-mute);
  width: 100%;
  text-transform: uppercase;
  padding: 0.75em 1em 0.75em 1.5em;
  box-shadow: inset 0px 1px 1px white;
  border: 1px solid var(--login-grey);
  margin: 0;
  font-weight: 200;
}

input {
  display: block;
  margin: auto auto;
  width: 100%;
  margin-bottom: 2em;
  padding: 0.5em 0;
  border: none;
  border-bottom: 1px solid #eaeaea;
  padding-bottom: 1.25em;
  color: #757575;
  /*&:focus {*/
  /*  outline: none;*/
  /*}*/
}

.btn {
  display: inline-block;
  background: var(--login-blue);
  border: 1px solid var(--login-blue);
  padding: 0.5em 2em;
  color: white;
  margin-right: 0.5em;
  box-shadow: inset 0px 1px 0px white;
  /*&:hover {*/
  /*  background: lighten(var(--login-blue), 5%);*/
  /*}*/
  /*&:active {*/
  /*  background: var(--login-blue);*/
  /*  box-shadow: inset 0px 1px 1px fadeout(black, 90%);*/
  /*}*/
  /*&:focus {*/
  /*  outline: none;*/
  /*}*/
}

.forgot {
  color: var(--login-blue);
  line-height: 0.5em;
  position: relative;
  top: 2.5em;
  text-decoration: none;
  font-size: 0.75em;
  margin: 0;
  padding: 0;
  float: right;

  /*&:hover {*/
  /*  color: darken(var(--login-blue), 5%);*/
  /*}*/
  /*&:active {*/
  /*}*/
}
</style>
