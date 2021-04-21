<template>
  <div>
    <p>
      <button v-on:click="downloadPDF">Download</button>
    </p>
    <div id="resume">
      <div id="one-column-resume" v-if="format === 'one'">
        <h1> {{ this.currentStudent.first_name }} {{ this.currentStudent.last_name }} </h1>
        <h5>{{ this.currentStudent.email }} | {{ this.currentStudent.phone_number }} | {{ this.currentStudent.linkedin_url }} </h5>
        <h5>{{ this.currentStudent.twitter_handle }} | {{ this.currentStudent.personal_website_url }} | {{ this.currentStudent.github_url }} </h5>

        <p></p>
        <h2>Short Bio</h2>
        <p>{{ this.currentStudent.short_bio }} </p>
        <hr>

        <h2>Experiences</h2>
        <p v-for="experience in this.currentStudent.experiences">
        {{ experience.job_title }} {{ experience.start_date }} - {{ experience.end_date }} <br /> {{ experience.company_name }} <br /> {{ experience.details }}
        </p>
        <hr>

        <h2>Capstone</h2>
        <div><p v-for="capstone in this.currentStudent.capstones">
        {{ capstone.description }} {{ capstone.url }} <br /> {{ capstone.screenshot }}</p> </div>
        <hr>

        <h2>Educations</h2>
        <p v-for="education in this.currentStudent.educations"> {{ education.university_name }} {{ education.start_date }} -  {{ education.end_date }} | {{ education.degree }} <br /> {{ education.details }}</p> 
        <hr>

        <h2>Skills</h2>
        
      <!-- <li v-for="skill in this.currentStudent.skills"> {{ skill[0] }}</li> -->

        <li>{{ this.currentStudent.skills[0].skill_name_1 }}</li>
        <li>{{ this.currentStudent.skills[0].skill_name_2 }}</li>
        <li>{{ this.currentStudent.skills[0].skill_name_3 }}</li>
      </div>
      <div id="two-column-resume" v-if="format === 'two'">
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
                <h4> {{ education.university_name }} </h4>
                <p> 
                  {{ `${education.start_date} - ${education.end_date}` }}
                  <br /> 
                  {{ education.degree }}
                </p>
                <p> 
                  {{ education.details }}
                </p>
              </div>
            </div>
          </div>
          <div id="column 2">
            <div id="experiences">
              <div id="experience" v-for="experience in currentStudent.experiences">
                <h3>
                  Experience
                </h3>
                <h4>
                  {{ `${experience.job_title}, ${experience.company_name}`}}
                </h4>
                <div id="experience-details">
                  <p>
                    {{ `${experience.start_date} - ${experience.end_date}` }}
                  </p>
                  <p>
                    {{ experience.details }}
                  </p>
                </div>
              </div>
            </div>
            <div id="capstones">
              <div id="capstone" v-for="capstone in currentStudent.capstones">
                <h3>
                  Capstones
                </h3>
                 <div id="capstone" v-for="capstone in currentStudent.capstones">
                   <h4>
                     {{ capstone.name }}
                   </h4>
                   <div id="capstone-details">
                    <p>
                      {{ capstone.description }}
                    </p>
                    <p>
                      Capstone URL: {{ capstone.url}}
                      <br />
                      Screenshot URL: {{ capstone.screenshot }}
                      </p>
                    </div>
                 </div>
              </div>
            </div>
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
  float: left;
}

#column2 {
  width: 33%;
  float: left;
}

#bio {
  height: 30%;
}

#skills {
  height: 20%;
}

#educations {
  height: 50%;
}

#experience-details {
  width: 55%;
  margin-left: 3in;
}

#capstone-details {
  width: 55%;
  margin-left: 3in;
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
