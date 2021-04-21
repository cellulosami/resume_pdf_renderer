<template>
  <div class="home">
    <h1>Resume Builder</h1>
    <div>
      <p>
        Student ID: <input v-model="studentID">
      </p>
      <p>
        Resume Format:
        <select v-model="resumeFormat">
          <option value="one">One-column</option>
          <option value="two">Two-column</option>
        </select>
      </p>
      <router-link v-bind:to="`/resumes/${studentID}?columns=${resumeFormat}`">
        <button>Create PDF</button>
      </router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function () {
    return {
      studentID: "",
      resumeFormat: ""
    }
  }
}
</script>
