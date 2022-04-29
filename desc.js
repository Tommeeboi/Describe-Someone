// why does this look so satisfying
const name = document.getElementById("name");
const looks = document.getElementById("looks");
const smells = document.getElementById("smells");
const feels = document.getElementById("feels");
const want = document.getElementById("want");
const sub = document.getElementById("submit");
const l = document.getElementById("l");
const s = document.getElementById("s");
const f = document.getElementById("f");
const w = document.getElementById("w");

// Submit button functionality
// Version 2: The code is now more efficient and neat now
sub.onclick = function() {
    if (name.value === '' || looks.value === '' || smells.value === '' || feels.value === '' || want.value === '') {
        alert("Make sure everything has a value!")
    } else {
    l.innerHTML = `${name.value} looks ${looks.value}`;
    s.innerHTML = `${name.value} smells ${smells.value}`;
    f.innerHTML = `${name.value} feels ${feels.value}`;
    w.innerHTML = `I want to ${want.value}`;
  }
}