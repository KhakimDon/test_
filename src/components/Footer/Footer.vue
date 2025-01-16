<template>
  <footer class="h-[429px] pt-[47px] pb-[57px] bg-black">
    <div class="wrapper">
      <img src="/footer-logo.svg" alt="logo" class="h-[45px]" />
      <div class="flex gap-[100px]">
        <div
          class="p-[18px] max-w-[280px] mt-[18px] w-full rounded-[32px] border-[#6A6A6A] border"
        >
          <div class="mb-[18px]">
            <span class="text-[#6A6A6A] text-[14px]">{{
              $t("footer.phone")
            }}</span>
            <p>
              <a href="tel:+496920732814" class="hover:text-primary duration-300 text-white"
                >+49 (0)69 20732814</a 
              >
            </p>
          </div>
          <div class="mb-[18px]">
            <span class="text-[#6A6A6A] text-[14px]">{{
              $t("footer.mail")
            }}</span>
            <p class="text-white">office@automation-zentric.de</p>
          </div>
          <div>
            <span class="text-[#6A6A6A] text-[14px]">{{
              $t("footer.address")
            }}</span>
            <p class="text-white">
              automation-Zentric GmbH Hansaallee 82 60318 Frankfurt am Main
            </p>
          </div>
        </div>
        <ul class="text-[#6A6A6A]">
          <li class="text-white font-bold">{{ $t("pages.navigation") }}</li>
          <li>
            <router-link to="/">{{ $t("pages.home") }}</router-link>
          </li>
          <li>
            <router-link to="/services">{{ $t("pages.Services") }}</router-link>
          </li>
          <li>
            <router-link to="/products">{{ $t("pages.Products") }}</router-link>
          </li>
          <li>
            <router-link to="/about">{{ $t("pages.About_us") }}</router-link>
          </li>
          <li>
            <router-link to="/contacts">{{ $t("pages.Contacts") }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style scoped>
li {
  transition-duration: 300ms;
  margin-bottom: 10px;
}
li:hover {
  color: #ff0000;
  cursor: pointer;
}
</style>