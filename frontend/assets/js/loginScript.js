class User {
    constructor(username, email, password) {
      this.username = username;
      this.email = email;
      this.password = password;
    }
  
    displayInfo() {
      return `Username: ${this.username}, Email: ${this.email}`;
    }
  }

  const users = [
    new User('enes', 'enes@test.com', 'enes123'),
    new User('<h1>test</h1>', 'enes@test.com', 'enes123'),
    new User('lehrer', 'lehrer@test.com', 'lehrer123')
  ];

  (function() {
    'use strict';
    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');
      Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          } else {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            const message = document.getElementById('message');
  
        
            const user = users.find(user => user.username === username && user.email === email && user.password === password);
  
            if (user) {
              message.innerText = user.displayInfo();
              message.classList.remove('alert-danger');
              message.classList.add('alert-success');
              window.location.href = "./weekly-overview.html"
            } else {
              message.innerText = 'Falsche Anmeldedaten. Bitte versuchen Sie es erneut.';
              message.classList.remove('alert-success');
              message.classList.add('alert-danger');
            }
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();

let inputUsername = document.getElementById("username");
let btnSubmit = document.getElementById("btnSubmit");
btnSubmit.addEventListener("click", () => {
  document.cookie = `username=${inputUsername.value}`;
})
