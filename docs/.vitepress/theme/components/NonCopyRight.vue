<template>
  <footer>
    <div>
      本文章无版权声明.
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
footer {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  border-top: 1px solid #eee;
  color: #888;
}
</style>