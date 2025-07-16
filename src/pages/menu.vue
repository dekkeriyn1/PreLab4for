<script setup>
import { useFoodStore } from '@/store/food'
import { computed, ref } from 'vue'

const foodStore = useFoodStore()
const filterMenu = ref('all')

const filteredMenu = computed(() => {
  if (filterMenu.value === 'all' || !filterMenu.value) {
    return foodStore.foods
  }
  
  return foodStore.foods.filter(menu => menu.type === filterMenu.value)
})

function setFilter(type) {
  filterMenu.value = type
}
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>
        รายการเมนูอาหารในร้านทั้งหมด        
      </VCardTitle>
    </VCardItem>
    <VCardItem>
      <VRow>
        <VCol cols="3">
          <VBtn
            color="primary"
            prepend-icon="mdi-list-box"
            block
            height="50"
            :variant="filterMenu === 'all' ? 'flat' : 'tonal'"
            @click="setFilter('all')"
          >
            ทั้งหมด
          </VBtn>  
        </VCol>
        <VCol cols="3">
          <VBtn
            color="purple"
            prepend-icon="mdi-food"
            block
            height="50"
            :variant="filterMenu === 'food' ? 'flat' : 'tonal'"
            @click="setFilter('food')"
          >
            เมนูบุฟเฟต์ / อาหาร
          </VBtn>  
        </VCol>
        <VCol cols="3">
          <VBtn
            color="green"
            prepend-icon="mdi-pot"
            block
            height="50"
            :variant="filterMenu === 'sauce' ? 'flat' : 'tonal'"
            @click="setFilter('sauce')"
          >
            น้ำจิ้ม / น้ำซุป
          </VBtn>  
        </VCol>
        <VCol cols="3">
          <VBtn
            color="red"
            prepend-icon="mdi-beer"
            block
            height="50"
            :variant="filterMenu === 'drink' ? 'flat' : 'tonal'"
            @click="setFilter('drink')"
          >
            เครื่องดื่ม / อื่น ๆ
          </VBtn>  
        </VCol>
      </VRow>          
    </VCardItem>
    <VCardItem>
      <VDataTable
        :items="filteredMenu"
        class="mt-2"
      >
        <template #item.image="{ item }">
          <VCard
            class="my-2 menu-img-card"
            elevation="6"
            rounded
          >
            <VImg
              :src="item.image"
              height="64"
              cover
            />
          </VCard>
        </template>
        <template #item.name="{ item }">
          <h4>{{ item.name }}</h4>
        </template>
        <template #item.price="{ item }">
          <h4>{{ item.price }} บาท</h4>
        </template>
      </VDataTable>  
    </VCardItem>
  </VCard>
</template>

<style scoped>
.menu-img-card {
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,18%);
}
</style>
