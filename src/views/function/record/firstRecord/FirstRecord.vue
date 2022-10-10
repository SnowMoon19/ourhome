<template>
  <div class="done-container">
    <first-record-list color="blue" class="done-list"/>
  </div>
  <div class="todo-container">
    <first-record-list color="pink" class="todo-list"/>
  </div>
</template>

<script>
import FirstRecordList from "@/views/function/record/firstRecord/FirstRecordList";
export default {
  name: "FirstRecord",
  components: {FirstRecordList}
}
</script>

<style scoped>
.done-container {
  float: left;
  width: 50%;
  height: 90%;
}
.done-list {
  margin-top: 4rem;
  margin-left: auto;
  width: 50%;
  height: 90%;
}

.todo-list {
  margin-top: 4rem;
  margin-right: auto;
  width: 50%;
  height: 90%;
}

.todo-container {
  float: left;
  width: 50%;
  height: 90%;
}

</style>