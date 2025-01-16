<template>
  <section class="city-image relative !h-[724px] w-full">
    <div class="wrapper">
      <div class="mb-[28px]">
        <h2 class="text-[#2B2B2B] text-[32px] font-[1000]">
          {{ $t("product_section.title") }}
        </h2>
        <span class="text-sm text-[#697583]">
          {{ $t("product_section.sub") }}
        </span>
      </div>
      <div class="product flex gap-[32px]">
        <div class="product_image">
          <img
            src="https://static.wixstatic.com/media/618ec0_fdb7b9e7852d44fabba6de1d94cf791c~mv2.png/v1/crop/x_0,y_316,w_3798,h_1852/fill/w_850,h_414,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/upDog-architecture.png"
            alt="image"
          />
        </div>
        <div class="content">
          <h2>up<u>D</u>og</h2>
          <span>{{ $t("updog.title") }}</span>
          <p>{{ $t("updog.text") }}</p>
          <router-link to="/products">
            <CButton :text="$t('moreinfo')" />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import CButton from "@/components/Base/CButton.vue";
</script>

<style scoped>
@media screen and (max-width: 650px) {
  .product {
    flex-direction: column !important;
    gap: 32px;
  }
  .city-image{
    height: initial !important;
    padding-bottom: 100px !important;
  }
}
.content {
  flex: 1;
}
.wrapper {
  padding-top: 100px;
}
.product img {
  width: 470px;
}
.product {
  display: flex;
  gap: 32px;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.product_image {
  flex: 1;
  padding: 59px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
  background: #f9f9f9;
}
.content h2 i {
  text-decoration: none !important;
  color: #d61621 !important;
}
.content h2 {
  color: #2b2b2b;
  font-size: 32px;
  font-weight: 1000 !important;
  margin-bottom: 15px;
}
.content span {
  color: #2b2b2b;
  font-size: 24px;
  font-weight: 1000 !important;
}
.content p {
  color: #697583;
  font-size: 16px;
  padding-block: 23px;
}
</style>