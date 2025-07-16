import { defineStore } from "pinia"

export const useTableStore = defineStore({
  id: "table",
  state: () => {
    return {
      tables: [
        {
          name: 'โต๊ะที่ 1',
          checkin: '13.43',
          checkout: '',
          total: 399,
          user: 3,
          status: 'ready',
          food: [],
        },
        {
          name: 'โต๊ะที่ 2',
          checkin: '21.34',
          checkout: '',
          total: 500,
          user: 6,
          status: 'ready',
          food: 0,
        },
        {
          name: 'โต๊ะที่ 3',
          checkin: '',
          checkout: '',
          total: 0,
          user: 0,
          status: 'ready',
          food: 0,
        },
        {
          name: 'โต๊ะที่ 4',
          checkin: '',
          checkout: '',
          total: 0,
          user: 0,
          status: 'ready',
          food: [],
        },
        

      ],
    }
  },
  actions: {
  },
})
