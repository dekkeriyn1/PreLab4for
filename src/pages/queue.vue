<script setup>
import InfoCard from "@/components/cards/InfoCard.vue";

import { useQueueStore } from "@/store/queue";

const queueStore = useQueueStore();

const addQueueDialog = ref(false);
const quueuInitData = ref({
  name : "",
  people : 1,
  phone : "",
  status : "waiting",
  timestamp : "" 
});
const formats = [
  {md: 12, datatype: 'text', target: 'name', validation: ['required'], props: { label: 'ชื่อผู้จองคิว *', clearable: true } },
  {md: 6, datatype: 'text', target: 'people', props: { type:"number", label: 'จำนวนคน', clearable: true } },
  {md: 6, datatype: 'text', target: 'phone', props: { label: 'เบอร์โทรศัพท์', clearable: true } },
]
const enqueue = (queue) => {
  queueStore.queues.push(queue);
};
const dequeue = () => {
  if(queueStore.queues.length === 0){
    return;
  }
  queueStore.queues.shift();  
};
</script>
<template>
  <VCard>
    <VCardItem>
      <VCardTitle>ระบบจองคิว</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะว่าง"
            :stats="5"
            unit="ตัว"
            icon="mdi-table-plus"
            color="success"
          />
        </VCol>
        <VCol cols="3">
          <InfoCard
            title="ผู้รอคิว"
            :stats="5"
            unit="คน"
            icon="mdi-table-account"
            color="warning"
          />
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn                
              class="fill-height"
              block
              color="primary"
              @click="addQueueDialog = true"
            >
              <VIcon>mdi-plus</VIcon>
              เพิมคิวใหม่
            </VBtn>
          </VCard>
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn                
              class="fill-height"
              color="primary"
              block
              @click="dequeue"
            >
              <VIcon class="me-2">mdi-account-voice</VIcon>
              เรียกคิวต่อไป
            </VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
  <VCard class="mt-5">
    <VList lines="two">
      <VListItem>
        <VListItemTitle>คุณตุ๊ก 0801947273</VListItemTitle>
        <VListItemSubtitle>เข้ามาเมื่อ 12.35น. ทั้งหมด 5 คน</VListItemSubtitle>
        <template v-slot:prepend>
          <VAvatar color="primary"><span class="text-h5 text-white">1</span></VAvatar>
        </template>
        <template v-slot:append>
          <span class="text-h6 me-2">รอมาแล้ว 5 นาที</span>
          <VBtn color="success" class="me-2"><VIcon>mdi-account-voice</VIcon> เรียกคิว</VBtn>
        </template>
      </VListItem>
    </VList>    
  </VCard>
  <AddDialog 
    v-model:isDialogVisible="addQueueDialog"     
    :data="quueuInitData" 
    title="เพิ่มคิวใหม่" 
    :format="formats" 
    @onSubmit="enqueue"
  />
</template>
