<template>
  <div>
    <p>
      <button v-on:click="downloadPDF">Download</button>
    </p>
    <div id="resume">
      <div id="two-column-resume">
        <div id="header">
          <div id="header1">
            <h1>
              {{ `${currentStudent.first_name} ${currentStudent.last_name}`}}
            </h1>
            <p>
              {{  `${currentStudent.email}  |  ${currentStudent.phone_number}  |  Resume URL: ${currentStudent.online_resume_url}  |  Github: ${currentStudent.github_url}` }}
            </p>
            <p>
              {{  `Photo URL: ${currentStudent.photo}  |  LinkedIn: ${currentStudent.linkedin_url}  |  Twitter: ${currentStudent.twitter_handle}` }}
            </p>
          </div>
          <hr />
        </div>
        <div id="content">
          <br />
          <div id="column1">
            <div id="bio">
              {{ currentStudent.short_bio }}
            </div>
            <div id="skills">
              <h3>
                Skills
              </h3>
              <ul v-for="skill in currentStudent.skills">
                <li> {{ skill.skill_name_1 }} </li>
                <li> {{ skill.skill_name_2 }} </li>
                <li> {{ skill.skill_name_3 }} </li>
                <li> {{ skill.skill_name_4 }} </li>
              </ul>
            </div>
            <div id="educations">
              <h3>
                Education
              </h3>
              <div id="education" v-for="education in currentStudent.educations">
                {{ education }}
              </div>
            </div>
          </div>
          <div id="column 2">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#two-column-resume {
  width: 8.5in;
  height: 11in;
  padding: 0.75in;
  text-align: left;
}

#header {
  width: 100%;
  height: 14%;
  text-align: center;
}

#content {
  height: 86%;
}

#column1 {
  width: 33%;
}

#column2 {
  width: 67%;
}

#bio {
  height: 20%;
}

#skills {
  height: 20%;
}

#educations {
  height: 60%;
}
</style>

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
      }
      html2pdf().set(opt).from(element).save();
    }
  }
}
</script>
