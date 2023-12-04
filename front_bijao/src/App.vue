<script>
import { RouterLink, RouterView } from "vue-router";
import { defineAsyncComponent } from "vue";

//importamos firebase




</script>




<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/components/images/logo_bijao.png" width="230" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/"><i class="fa fa-home" aria-hidden="true"></i> Home</RouterLink>
        <RouterLink to="/login"><i class="fa fa-lock" aria-hidden="true"></i> Admin</RouterLink>
     <!--    <RouterLink to="/dashboard"><i class="fa fa-bars" aria-hidden="true"></i> Dashboard</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 0.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto;

}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  background: transparent;
}



nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

/* nav a:first-of-type {
  border: 0;
} */

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }

}
</style>
