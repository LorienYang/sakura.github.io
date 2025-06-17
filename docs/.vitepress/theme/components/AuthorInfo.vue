<template>
  <div class="author-info">
    <p class="author-name">作者：{{ name }}</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
.author-info {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid var(--vp-c-divider);
  text-align: right;
  font-size: 0.9em;
  color: var(--vp-c-text-2);
}
</style>