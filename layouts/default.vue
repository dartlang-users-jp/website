<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

.button--primary {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #0175C2;
  color: #fff;
  background-color: #0175C2;
  text-decoration: none;
  padding: 10px 30px;
}

.button--primary:hover {
  border: 1px solid #13B9FD;
  background-color: #13B9FD;
}

.button--secondary {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #788694;
  background: #788694;
  color: #ffffff;
  text-decoration: none;
  padding: 10px 30px;
}

.button--secondary:hover {
  border: 1px solid #8c9197;
  background-color: #8c9197;
}
</style>
