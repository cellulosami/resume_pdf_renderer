<template>
  <div>
    <p>
      <button v-on:click="pdfTest">test</button>
    </p>
    <div id="test">
      <p>Egg Salad Sandwich</p>
      <p>Egg Salad Sandwich</p>
      <p>Egg Salad Sandwich</p>
      <p>Egg Salad Sandwich</p>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
      <h1>Egg Salad Sandwich</h1>
    </div>
  </div>
</template>

<script>
import html2pdf from "html2pdf.js"
import axios from "axios";

export default {
  data: function () {
    return {
      currentStudent: {},
    }
  },
  mounted: function () {
    console.log("mounted");
    axios
      .get("/api/students/" + this.$route.params.id)
      .then(response => {
        console.log(response.data);
        this.currentStudent = response.data;
      })
      .catch(error => {
        console.log("boo");
      });
  },
  methods: {
    pdfTest: function () {
      console.log("pdftest");
      var element = document.getElementById('test');
      var opt = {
        margin: 8,
        // pagebreak: { mode: 'avoid-all' }
      }
      html2pdf().set(opt).from(element).save();
    }
  }
}
</script>
