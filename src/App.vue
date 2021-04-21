<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/resumes/1">Show</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/resumes_formatted/1">Formatted</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
h1 {
  font-size: 50px;
  text-transform: capitalize;
  margin-bottom: 0px;
  color: #6495ed;
}
h2 {
  text-align: left;
  margin-bottom: 0px;
  color: #6495ed;
}
p {
  text-align: left;
  margin-top: 0px;
}
h5 {
  margin-top: 0px;
  margin-bottom: 0px;
}

li {
  text-align: left;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
