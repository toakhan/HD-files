// create a class Courses with the attributes courseName and contactWebsite
class Courses {
    constructor(courseName, contactWebsite) {
      this.courseName = courseName;
      this.contactWebsite = contactWebsite;
    }
  // method to display the contact website
    displayContactWebsite() {
      console.log(`The contact website for ${this.courseName} is ${this.contactWebsite}.`);
    }
  }
  // create subclass Subjects
  class Subjects extends Courses {
    constructor(courseName, contactWebsite, subjectName, subjectCode) {
      super(courseName, contactWebsite);
      this.subjectName = subjectName;
      this.subjectCode = subjectCode;
    }
   // method to display the subject information
    displaySubjectInfo() {
      console.log(`The ${this.subjectName} course (code: ${this.subjectCode}) is part of the ${this.courseName} course.`);
      console.log(`The contact website for ${this.subjectName} is ${this.contactWebsite}.`);
    }
  }
  // Create 3 instances of the Subjects class
  const subject1 = new Subjects("English", "www.scienceswebsite.com", "Grammar", "ENG01");
  const subject2 = new Subjects("Mathematics", "www.mathwebsite.com", "Calculus", "MATH02");
  const subject3 = new Subjects("Physics", "www.physicswebsite.com", "Mechanics", "PHYS03");
  // Call methods on the instances to display details
  subject1.displaySubjectInfo();
  subject2.displaySubjectInfo();
  subject3.displaySubjectInfo();
  