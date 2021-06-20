<template>
  <router-view />
</template>

<style>
html {
  font-size: 12px;
  font-family: sans-serif;
}
body {
  margin: 0;
  overflow: hidden;
  position: relative;
}
::-webkit-scrollbar-track {
  background-color: white;
}
::-webkit-scrollbar {
  width: 0.4rem;
}
::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  border-radius: 1rem;
  height: 1rem;
}
*:focus {
  outline: none;
}
@media (max-width: 1366px) {
  html {
    font-size: 8px;
  }
}
</style>
