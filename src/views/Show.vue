<template>
  <p>
    <button v-on:click="pdfTest">test</button>
    <br />
    <br />
    <br />
    <br />
    {{ this.document }}
  </p>
</template>

<script>
import axios from "axios";
import { jsPDF } from "jspdf";

export default {
  data: function () {
    return {
      message: "welcome to show page",
      dummythiccdata: {},
      document: "",
      currentStudent: {
        first_name: "ted",
        last_name: "dundy",
        email: "teddundy@example.com",
        phone_number: "555-555-5555",
        short_bio: "I am a human person with human appendages beep boop",
        linkedin_url: "https://linkedin.com/human",
        twitter_handle: "teddundyful",
        personal_website_url: "google.com",
        online_resume_url: "gooooogle.com",
        github_url: "gooooooooogle.com",
        photo: "image.url.com",
        experiences: [
          {
            start_date: "Jan 2021",
            end_date: "May 2021",
            job_title: "Software developer",
            company_name: "Google",
            details: "a lot of text"
          },
          {
            start_date: "Jan 2027",
            end_date: "May 2027",
            job_title: "Software developer GUY MAN PERSON",
            company_name: "Google Glass",
            details: "a wee bit o' text laddy"
          }
        ],
        capstones: [{
            description: "great capstone",
            url: "www.url.com",
            screenshot: "www.screenshot.com",
          },
          {
            description: "okay capstone",
            url: "www.url2.com",
            screenshot: "www.screenshot2.com",
          },
        ],
        educations: [{
            start_date: "2",
            end_date: "3",
            degree: "BS in BS",
            university_name: "Havard University",
            details: "The greatest and finest college in the US"
          },
          {
            start_date: "2222",
            end_date: "33333",
            degree: "BS in BS in BS in BS in BS",
            university_name: "HavRODUniversityssss",
            details: "The greatest and finest college in the US other than that one"
          }
        ],
        skills: [{
            skill_name_1: "very good",
            skill_name_2: "excellent",
            skill_name_3: "good stuff",
            skill_name_4: "good coder"
          }
        ]
      }
    }
  },
  mounted: function () {
    console.log("mounted");
    axios
      .get("/api/products/1")
      .then(response => {
        console.log("hooray!");
        this.dummythiccdata = response.data;
      })
      .catch(error => {
        console.log("uh oh");
      })
  },
  methods: {
    pdfTest: function () {
      console.log("pdftest");
      this.document = new jsPDF();

      this.document.text(this.currentStudent.first_name, 10, 150);
      console.log(this.document);
      this.document.save("a4.pdf");
    }
  }
}
</script>
