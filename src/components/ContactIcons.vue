<template>
  <div class="contact-wrapper">
    <a href="https://github.com/BParungo" data-text="Github Profil">
      <img src="/img/github.svg" alt="github-icon" />
    </a>
    <a href="https://www.xing.com/profile/CanBlaine_Parungo/cv" data-text="Xing Profil">
      <img src="/img/xing.svg" alt="xing-icon" />
    </a>
    <a href="https://www.linkedin.com/in/can-blaine-parungo-bb9272280" data-text="Linkedin Profil">
      <img src="/img/linkedin.svg" alt="linkedin-icon" />
    </a>
    <a href="mailto:bparungo@web.de" data-text="Email">
      <img src="/img/mail.svg" alt="mail-icon" />
    </a>
  </div>
</template>

<style scoped>
.contact-wrapper {
  gap: 2rem;
  display: flex;
  justify-content: space-evenly;
  margin: unset;
}
a {
  position: relative;
  border-radius: 0.4em;
}
a::before {
  opacity: 0;
  content: '';
  position: absolute;
  bottom: calc(100% + 0.5rem);
  left: 50%;
  width: 0;
  height: 0;
  border: 1.5rem solid transparent;
  border-top-color: rgba(255, 255, 255, 0.15);
  border-bottom: 0;
  border-left: 0;
}
a::after {
  opacity: 0;
  width: 15ch;
  height: 2.5rem;
  text-align: center;
  position: absolute;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.15);
  padding: 0.5rem;
  bottom: calc(100% + 2rem);
  left: 0;
  color: var(--color-text);
  content: attr(data-text);
}
a:hover::before,
a:hover::after {
  opacity: 1;
  transition: all 1s ease;
  animation: float 1.5s ease infinite;
}
img {
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  transition: all 0.3s ease-in;
  border-radius: 0.5rem;
}
img:hover {
  background: var(--color-text);
  padding: 0.15rem;
  transform: scale(1.25);
  border-radius: 2rem;
}
@media only screen and (min-width: 768px) {
  .contact-wrapper {
    justify-content: flex-start;
    margin: auto auto 3rem 0;
  }
}
@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
<script setup lang="ts"></script>
