<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style>
  body{
    font-size: 0.7rem;
  }
  @component-namespace page {
    @component indicator {
      @descendent wrapper {
        padding: 0 20px;
        position: absolute;
        width: 100%;
        transform: translateY(-50%);
        button:not(:last-child) {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
