<script setup>
import InfoCard from "@/components/cards/InfoCard.vue"
import TableInfoCard from "@/components/cards/TableInfoCard.vue"
import { useTableStore } from "@/store/table"
import { onMounted } from 'vue'

const tableStore = useTableStore()

onMounted(() => {
  tableStore.tables.forEach(table => {
    table.showInfo = false
  })
})
function handlePay(table) {
  table.showInfo = false
}

const reserveTable = table => {
  table.status = 'ready'
  table.checkin = new Date().toLocaleString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  })
  table.showInfo = true
}
</script>

<template>
  <VCard>
    <VCardItem>
      <VCardTitle>โต๊ะในร้าน</VCardTitle>
    </VCardItem>
    <VCardText>
      <VRow>
        <VCol cols="3">
          <InfoCard
            title="โต๊ะทั้งหมด"
            :stats="10"
            unit="ตัว"
            icon="mdi-table"
            color="primary"
          />
        </VCol>
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
            title="ใช้งานอยู่"
            :stats="5"
            unit="ตัว"
            icon="mdi-table-account"
            color="warning"
          />
        </VCol>
        <VCol cols="3">
          <VCard class="align-center justify-center d-flex fill-height">
            <VBtn
              class="fill-height"
              variant="text"
              block
              text
            >
              <VIcon>mdi-plus</VIcon>
              เพิ่มโต๊ะใหม่
            </VBtn>
          </VCard>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>


  <VCard class="mt-8">
    <VCardText>
      <VRow>
        <VCol
          v-for="table in tableStore.tables"
          :key="table.id"
          cols="3"
          class="d-flex align-center justify-center"
        >
          <template v-if="table.showInfo">
            <TableInfoCard
              :table="table"
              @pay="handlePay"
            />
          </template>
          <template v-else>
            <VBtn
              size="x-large"
              block
              prepend-icon="mdi-table"
              height="200"
              @click="reserveTable(table)"
            >
              {{ table.name }} - {{ table.status }}
            </VBtn>
          </template>
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
