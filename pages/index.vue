<template>
  <section class="container">
    <div>
      <!-- <app-logo/> -->
      <h1 class="title">
        Dartlang Users JP
      </h1>
      <h2 class="subtitle">
        日本Dartユーザー会へようこそ！
      </h2>
      <p class="description">
        Dartlang Users JPは、Dartを愛する日本の開発者のためのコミュニティです。
      </p>
      <div class="links">
        <a
          href="http://dartlang-users-jp-invite.herokuapp.com/"
          target="_blank"
          class="button--primary">Slackに参加する</a>
        <a
          href="https://www.dartlang.org/"
          target="_blank"
          class="button--secondary">Dartlang公式サイト</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue';

export default {
  components: {
    AppLogo
  }
};
</script>

<style>
.container {
  font-family: Montserrat, sans-serif;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(45deg, rgb(0, 132, 197) 0px, rgb(4, 137, 195) 36%, rgb(48, 202, 191) 66%, rgb(47, 188, 178) 100%);
}

.title {
  display: block;
  font-weight: 300;
  font-size: 64px;
  color: #ffffff;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #ffffff;
  padding-bottom: 15px;
}

.description {
  font-weight: 300;
  font-size: 16px;
  color: #ffffff;
}

@media (min-width: 600px) {
  .links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }

  .links > :not(:last-child) {
    margin-right: 16px;
  }
}

/** Mobile **/
@media (max-width: 600px) {
  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
  }

  .links > :not(:last-child) {
    margin-bottom: 16px;
  }
}
</style>
