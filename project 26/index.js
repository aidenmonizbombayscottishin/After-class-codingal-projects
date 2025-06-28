
JS script.js×+
JS script.js > ...
1
2
3
4
5
6
7
8
9
10
11 v
12
13
14 v
15
16
17
18
19
V
20 v
21
function validate(e) {
e.preventDefault();
const email = document.getElementById('email').value; const pass = document.getElementById('password').value; const age = document.getElementById('age').value; const msgBox = document.getElementById('message');
let message =
if (email === '') {
message = 'Enter an email. ' ;
msgBox.style.color = 'red';
} else if (pass === '') {
message = 'Enter a password.'; msgBox.style.color = 'red';
} else if (age === '') {
message = 'Enter your age.'; msgBox.style.color = 'red';
} else {
message= 'Login successful!'; msgBox.style.color = 'green';
22
23
}
24
25
26
}
msgBox.innerText = message;