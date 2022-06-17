var x = document.getElementById("form_sample");
var createform = document.createElement("form"); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement("h2"); // Heading of Form
heading.style.fontSize = "18px";
heading.innerHTML = "Форма для зв'язку";
createform.appendChild(heading);

var line = document.createElement("hr"); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement("br");
createform.appendChild(linebreak);

var namelabel = document.createElement("label"); // Create Label for Name Field
namelabel.innerHTML = "Ваше ім'я : "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement("input"); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
inputelement.setAttribute("required", "required");
createform.appendChild(inputelement);

var linebreak = document.createElement("br");
createform.appendChild(linebreak);

var emaillabel = document.createElement("label"); // Create Label for E-mail Field
emaillabel.innerHTML = "Ваша поштова скринька : ";
createform.appendChild(emaillabel);

var emailelement = document.createElement("input"); // Create Input Field for E-mail
emailelement.setAttribute("type", "email");
emailelement.setAttribute("name", "demail");
emailelement.setAttribute("required", "required");
createform.appendChild(emailelement);

var emailbreak = document.createElement("br");
createform.appendChild(emailbreak);

var messagelabel = document.createElement("label"); // Append Textarea
messagelabel.innerHTML = "Ваше повідомлення : ";
createform.appendChild(messagelabel);

var texareaelement = document.createElement("textarea");
texareaelement.setAttribute("name", "dmessage");
texareaelement.setAttribute("required", "required");
createform.appendChild(texareaelement);

var messagebreak = document.createElement("br");
createform.appendChild(messagebreak);

var submitelement = document.createElement("input"); // Append Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Надіслати");
createform.appendChild(submitelement);

submitelement.addEventListener("click", () => {
  if (inputelement.value && emailelement.value && texareaelement.value) {
    window.alert(
      "Дякую що зв'язалися з нами, скоро наші працівники зв'яжуться з вами."
    ),
      window.close(),
      setInterval(window.open("index.html"), 2000);
  }
});
