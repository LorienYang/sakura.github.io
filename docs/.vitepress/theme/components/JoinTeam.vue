<template>
  <form @submit.prevent="submitForm" class="join-team-form">
<!--    <h2 class="form-title">问卷</h2>-->
    <p class="form-description">请填写以下信息，我们将尽快与您联系。</p>

    <div v-for="question in questions" :key="question.id" class="form-group">
      <label :for="question.id">
        {{ question.label }}
        <span v-if="question.required" class="required-star">*</span>
      </label>

      <input
          v-if="question.type === 'text' || question.type === 'tel'"
          :type="question.type"
          :id="question.id"
          v-model="formData[question.id]"
          :placeholder="question.placeholder"
          :required="question.required"
          :pattern="question.pattern"
          :title="question.patternMessage"
          class="form-input"
      />

      <textarea
          v-else-if="question.type === 'textarea'"
          :id="question.id"
          v-model="formData[question.id]"
          :placeholder="question.placeholder"
          :required="question.required"
          class="form-textarea"
      ></textarea>

      <div v-else-if="question.type === 'radio'" class="radio-group">
        <div v-for="option in question.options" :key="option.value" class="radio-item">
          <input
              type="radio"
              :id="`${question.id}-${option.value}`"
              :name="question.id"
              :value="option.value"
              v-model="formData[question.id]"
              :required="question.required && !formData[question.id]"
          />
          <label :for="`${question.id}-${option.value}`">{{ option.text }}</label>
        </div>
      </div>

      <p v-if="question.description" class="question-description" v-html="question.description"></p>
    </div>

    <div v-if="submissionMessage" :class="['submission-alert', submissionStatus]">
      {{ submissionMessage }}
    </div>

    <button type="submit" class="submit-button" :disabled="submissionStatus === 'submitting'">
      {{ submissionStatus === 'submitting' ? '提交中...' : '提交申请' }}
    </button>
  </form>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

import { questions } from '../config/questionnaireConfig.js';

const formData = ref({});
const formSubmitted = ref(false);
const submissionStatus = ref('idle');
const submissionMessage = ref('');

// 初始化 formData
onMounted(() => {
  questions.forEach(question => {
    formData.value[question.id] = '';
  });
});

const clearMessage = () => {
  setTimeout(() => {
    submissionMessage.value = '';
    submissionStatus.value = 'idle';
  }, 5000);
};

const submitForm = async () => {
  submissionStatus.value = 'submitting';
  submissionMessage.value = '';

  const isValid = questions.every(question => {
    if (question.required) {
      return formData.value[question.id] !== '' && formData.value[question.id] !== undefined;
    }
    return true;
  });

  if (!isValid) {
    submissionStatus.value = 'error';
    submissionMessage.value = '请填写所有必填项！';
    formSubmitted.value = true;
    clearMessage();
    return;
  }

  const formElement = document.querySelector('.join-team-form');
  if (formElement && !formElement.checkValidity()) {
    submissionStatus.value = 'error';
    submissionMessage.value = '请检查您的输入格式是否正确！';
    clearMessage();
    return;
  }

  try {
    const response = await axios.post('https://ssl.sakura.fun/api/submit-join-request', formData.value);
    console.log('信息提交成功！', response.data);

    submissionStatus.value = 'success';
    submissionMessage.value = '您的申请已成功提交！注意查收QQ邮箱。';

    questions.forEach(question => {
      formData.value[question.id] = '';
    });
    formSubmitted.value = false;
    clearMessage();
  } catch (error) {
    submissionStatus.value = 'error';
    const errorMessage = error.response
        ? `服务器错误: ${error.response.status} - ${error.response.data.message || error.response.data}`
        : `网络错误: ${error.message}`;
    console.error('提交失败:', errorMessage);
    submissionMessage.value = `申请提交失败，请重试。错误: ${errorMessage}`;
    clearMessage();
  }
};
</script>

<style scoped>
.join-team-form {
  max-width: 680px;
  margin: 32px auto;
  padding: 32px;
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  background-color: var(--vp-c-bg-alt);
  color: var(--vp-c-text-1);
  box-shadow: var(--vp-shadow-3);
}

.form-title {
  font-size: 2em;
  color: var(--vp-c-brand-1);
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
}

.form-description {
  font-size: 1.1em;
  color: var(--vp-c-text-2);
  margin-bottom: 30px;
  text-align: center;
}

.form-group {
  margin-bottom: 24px;
}

.form-group label {
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  font-size: 1.05em;
  color: var(--vp-c-text-1);
}

.required-star {
  color: var(--vp-c-danger-1);
  margin-left: 6px;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 12px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  box-sizing: border-box;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1em;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.form-input:focus,
.form-textarea:focus {
  border-color: var(--vp-c-brand-1);
  box-shadow: 0 0 0 2px var(--vp-c-brand-3);
  outline: none;
}

.form-textarea {
  min-height: 120px;
  resize: vertical;
}

.radio-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.radio-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.radio-item input[type="radio"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid var(--vp-c-divider);
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  outline: none;
  transition: border-color 0.2s ease;
  flex-shrink: 0;
}

.radio-item input[type="radio"]:checked {
  border-color: var(--vp-c-brand-1);
}

.radio-item input[type="radio"]:checked::before {
  content: '';
  width: 10px;
  height: 10px;
  background-color: var(--vp-c-brand-1);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.radio-item label {
  margin-bottom: 0;
  font-weight: normal;
  cursor: pointer;
  color: var(--vp-c-text-1);
}

.question-description {
  font-size: 0.9em;
  color: var(--vp-c-text-3);
  margin-top: 8px;
  margin-bottom: 0;
  line-height: 1.5;
}

.submit-button {
  display: block;
  width: 100%;
  padding: 14px 20px;
  background-color: var(--vp-c-brand-1);
  color: var(--vp-c-white);
  border: none;
  border-radius: 6px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
  margin-top: 32px;
}

.submit-button:hover:not(:disabled) {
  background-color: var(--vp-c-brand-2);
  transform: translateY(-2px);
}

.submit-button:active:not(:disabled) {
  transform: translateY(0);
}

.submit-button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.submission-alert {
  padding: 12px 20px;
  margin-bottom: 20px;
  border-radius: 6px;
  font-size: 0.95em;
  font-weight: 500;
  text-align: center;
  word-break: break-all;
}

.submission-alert.success {
  background-color: var(--vp-c-success-soft);
  color: var(--vp-c-success-1);
  border: 1px solid var(--vp-c-success-2);
}

.submission-alert.error {
  background-color: var(--vp-c-danger-soft);
  color: var(--vp-c-danger-1);
  border: 1px solid var(--vp-c-danger-2);
}

.submission-alert.submitting {
  background-color: var(--vp-c-tip-soft);
  color: var(--vp-c-tip-1);
  border: 1px solid var(--vp-c-tip-2);
}
</style>
