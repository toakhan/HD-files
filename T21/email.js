//Compulsory Task T-21

// An Email Simulation

//create your email class here

class Email {
	constructor(fromAddress, emailContents) {
	  this.hasBeenRead = false;
	  this.emailContents = emailContents;
	  this.isSpam = false;
	  this.fromAddress = fromAddress;
	}
  
	markAsRead() {
	  this.hasBeenRead = true;
	}
  
	markAsSpam() {
	  this.isSpam = true;
	}
  }
  
  const inbox = [];
  
  function addEmail(fromAddress, emailContents) {
	const email = new Email(fromAddress, emailContents);
	inbox.push(email);
  }
  
  function getCount() {
	return inbox.length;
  }
  
  function getEmail(index) {
	const email = inbox[index];
	email.markAsRead();
	return email.emailContents;
  }
  
  function getUnreadEmails() {
	return inbox.filter(email => !email.hasBeenRead);
  }
  
  function getSpamEmails() {
	return inbox.filter(email => email.isSpam);
  }

addEmail("john@example.com", "Hello, how are you?");
addEmail("jane@example.com", "Reminder: Meeting tomorrow at 2pm");
addEmail("spam@example.com", "Get rich quick!");

  userChoice = "";
while (userChoice != "7") {
  userChoice = prompt("What would you like to do:\n 1. Read email\n 2. Mark spam\n3. Send email\n4. Delete email\n5. View spam emails\n6. View unread emails\n7. quit?");

  if (userChoice == "1") {
    const index = prompt("Enter the index of the email you want to read:");
    const emailContents = getEmail(index);
    console.log(`Email contents: ${emailContents}`);
  } else if (userChoice == "2") {
    const index = prompt("Enter the index of the email you want to mark as spam:");
    const email = inbox[index];
    email.markAsSpam();
    console.log(`Email from ${email.fromAddress} marked as spam.`);
  } else if (userChoice == "3") {
    const fromAddress = prompt("Enter your email address:");
    const emailContents = prompt("Enter the email contents:");
    addEmail(fromAddress, emailContents);
    console.log("Email sent!");
  } else if (userChoice == "4") {
    const index = prompt("Enter the index of the email you want to delete:");
    inbox.splice(index, 1);
    console.log("Email deleted.");
  } else if (userChoice == "5") {
    const spamEmails = getSpamEmails();
    console.log("Spam emails:");
    spamEmails.forEach((email, index) => {
      console.log(`${index}: From ${email.fromAddress} - ${email.emailContents}`);
    });
  } else if (userChoice == "6") {
    const unreadEmails = getUnreadEmails();
    console.log("Unread emails:");
    unreadEmails.forEach((email, index) => {
      console.log(`${index}: From ${email.fromAddress} - ${email.emailContents}`);
    });
  } else if (userChoice == "7") {
    console.log("Goodbye");
  } else {
    console.log("Oops - incorrect input");
  }
}


