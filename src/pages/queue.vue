import { defineStore } from "pinia";

export const useQueueStore = defineStore({
  id: "queue",
  state: () => {
    return {
      queues : [
        {
          name : "",
          people : 0,
          phone : "",
          status : "waiting",
          timestamp : ""          
        },        
      ]
    }
  },
  actions: {
    
  }
});
