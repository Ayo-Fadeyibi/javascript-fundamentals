function maskEmail(email) {
  let index = email.indexOf("@");
  let firstLetter = email[0];
  let restOfEmail = email.slice(index - 1);
  let totalAsterisk = "*".repeat(index - 2);
  let newEmail = firstLetter + totalAsterisk + restOfEmail;
  return newEmail;
}

let email = "fadey@gmail.com";

console.log(maskEmail(email));
