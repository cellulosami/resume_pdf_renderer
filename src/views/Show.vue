<template>
  <div>
    <p>
      <button v-on:click="downloadPDF">Download</button>
    </p>
    <div id="resume">
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
      format: "",
    }
  },
  mounted: function () {
    console.log("mounted");
    this.format = this.$route.query.columns;
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
    downloadPDF: function () {
      console.log("downloadPDF");
      var element = document.getElementById('resume');
      var opt = {
        margin: 8,
        pagebreak: { mode: 'avoid-all' }
      }
      html2pdf().set(opt).from(element).save();
    }
  }
}
</script>
