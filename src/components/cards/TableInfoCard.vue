<script setup>
const props = defineProps({
  table: Object,
})

</script>



<template>
  <VCard class="w-100 h-100">
    <VToolbar
      flat
      density="compact"
      :color="offline? 'grey':'primary'"
      dark
    >
      <VIcon class="ml-3">
        mdi-chip
      </VIcon>
      <VToolbarTitle>
        {{ props.table.name }}
      </VToolbarTitle>      
      <VSpacer />
      <span>เวลาเข้า: {{ props.table.checkin }} น.</span>
    </VToolbar>
    <VCardText class="pa-3">
      <div class="d-flex justify-space-between">        
        <span><VIcon>mdi-account</VIcon> จำนวนลูกค้า:</span>
        <span>{{ props.table.user }}</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><VIcon>mdi-food</VIcon> รายการอาหาร:</span>
        <span>{{ props.table.food }} รายการ</span>
      </div>
      <div class="d-flex justify-space-between">
        <span><VIcon>mdi-cash</VIcon> ยอดรวม:</span>
        <span>{{ props.table.total }} บาท</span>
      </div>
    </VCardText>
    <VCardActions class="d-flex align-center justify-center">
      <VBtn color="primary">
        เพิ่มรายการอาหาร
      </VBtn>
      <VBtn
        color="success"
        @click="$emit('pay', props.table)"
      >
        ชำระเงิน
      </VBtn>
    </VCardActions>    
  </VCard>
</template>
