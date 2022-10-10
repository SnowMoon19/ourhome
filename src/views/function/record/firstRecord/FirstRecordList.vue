<template>
  <div v-if="color==='blue'" class="first-record-list-container-1">
  </div>
  <div v-else-if="color==='pink'" class="first-record-list-container-2">
  </div>
</template>

<script>
export default {
  name: "FirstRecordList",
  props: {
    color: String,
  },
  // mounted() {
  //
  // },
  methods: {
    requestFirstRecordByListId() {
      // getFirstRecordList(userId);
    }
  }
}
</script>

<style scoped>
.first-record-list-container-1 {
  width: 100%;
  height: 100%;
  background: url("../../../../assets/firstRecordList.png");
  /*background: #8cd5fe;*/
  background-size:cover;

  border-radius: 2rem;
  border-left-color: black;
  border-right-color: black;
  border-width: 10px;
  border-top-color: black;
  border-bottom-color: black;
  box-shadow: 0 0 8px rgba(0, 0, 0, 100);
}

.first-record-list-container-2 {
  width: 100%;
  height: 100%;
  background: url("../../../../assets/firstRecordList-pink.png");
  /*background: #8cd5fe;*/
  background-size: cover;

  border-radius: 2rem;
  border-left-color: black;
  border-right-color: black;
  border-width: 10px;
  border-top-color: black;
  border-bottom-color: black;
  box-shadow: 0 0 8px rgba(0, 0, 0, 100);
}

</style>