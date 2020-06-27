<template>
  <div>
    <b-navbar spaced fixed-top>
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <a class="button button-outline">
            bakatku.id
          </a>
        </b-navbar-item>
      </template>

      <template slot="end">
        <b-navbar-item tag="router-link" :to="{ path: '/login' }">
          <div class="buttons">
            <a class="button button-round">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>