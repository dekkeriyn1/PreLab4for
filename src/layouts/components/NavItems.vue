<script setup>
import VerticalNavSectionTitle from '@/@layouts/components/VerticalNavSectionTitle.vue'
import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'
</script>

<template>
  <!-- 👉 Point of Sale -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'POINT OF SALE',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'โต๊ะอาหาร',
      icon: 'mdi-table',
      to: '/tables',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'จองคิว',
      icon: 'mdi-queue',
      to: '/queue',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'เมนูอาหาร',
      icon: 'mdi-food',
      to: '/menu',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'สต็อกสินค้า',
      icon: 'mdi-package-variant',
      to: '/stock',
    }"
  />

  <!-- 👉 การเงิน -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'การเงิน',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'รายรับ',
      icon: 'mdi-cash-multiple',
      to: '/income',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'รายจ่าย',
      icon: 'mdi-cash-minus',
      to: '/expend',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'ธุรกรรมย้อนหลัง',
      icon: 'mdi-chart-line',
      to: '/transaction',
    }"
  />

  <!-- 👉 ผู้ดูแลระบบ -->
  <VerticalNavSectionTitle
    :item="{
      heading: 'ผู้ดูแลระบบ',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'ผู้ใช้งาน',
      icon: 'mdi-account-group',
      to: '/users',
    }"
  />
  
  <VerticalNavLink
    :item="{
      title: 'ตั้งค่าระบบ',
      icon: 'mdi-cog',
      to: '/setting',
    }"
  />
</template>
