const head_instructions = `
1. (in Brown) MR 6 (6) <br>
2. [ inc ]x 6 (12) <br>
3. [ inc, sc ]x 6 (18) <br>
4. sc, [ inc, sc 2 ]x 5, inc, sc (24) <br>
5. [ inc, sc 3 ]x 6 (30) <br>
6. sc 2, [ inc, sc 4 ]x 5, inc, sc 2 (36) <br>
7-10. sc 36 (36) <br>
11. [ inc, sc 5 ]x 6 (42) <br>
12-13. sc 42 (42) <br>
14. [ dec, sc 5 ]x 6 (36) <br>
15. sc 2, [ dec, sc 4 ]x 5, dec, sc 2 (30) <br>
16. [ dec, sc 3 ]x 6 (24)`

const body_instructions = `
1. (in Brown) MR 6 (6) <br>
2. [ inc ]x 6 (12) <br>
3. [ inc, sc ]x 6 (18) <br>
4. sc, [ inc, sc 2 ]x 5, inc, sc (24) <br>
5. [ inc, sc 3 ]x 6 (30) <br>
6-8. sc 30 (30) <br>
9. [ dec, sc 3 ]x 6 (24) <br>
10. sc 24 (24) <br>
11-12. (in Cream) sc 24 (24)`

const leg_instructions = `
1. (in Brown) MR 6 (6) <br>
2. [ inc, sc ]x 3 (9) <br>
3-6. sc 9 (9) <br>
 <br>
Finish off, leaving a tail`

const arm_instructions = `
1. (in Brown) MR 6 (6) <br>
2. [ inc, sc 2 ]x 2 (8) <br>
3-4. sc 8 (8) <br>
5. dec, sc 6, (7) <br>
 <br>
Finish off, leaving a tail`

const ears_instructions = `
1. (in Brown) MR 4 (4) <br>
2. sc 4 (4) <br>
3. [ inc, sc ]x 2 (6) <br>
4. sc 6 (6) <br>
5. [ inc, sc 2 ]x 2 (8) <br>
6-8. sc 8 (8) <br>
9. [ inc, sc 3 ]x 2 (10) <br>
10. [ dec, sc 3 ]x 2 (8) <br>
11. sc 8 (8) <br>
12. [ dec, sc 2 ]x 2 (6) <br>
 <br>
Finish off, leaving a tail<br>
Add felt`

const tail_instructions = `
1. (in Cream) MR 6 (6) <br>
2. sc 6 (6) <br>
3. [ inc, sc ]x 3 (9) <br>
4. [ inc, sc 2 ]x 3 (12) <br>
5. sc 12 (12) <br>
6. (in Brown) [ inc, sc 3 ]x 3 (15) <br>
7. sc 15 (15) <br>
8. [ inc, sc 4 ]x 3 (18) <br>
9-10. sc 18 (18) <br>
11. [ dec, sc ]x 6 (12) <br>
(stuff tail at this point) <br>
12. [ dec ] x 6 (6)`

function update_instructions() {
  var selectElement = document.getElementById("body_part_selection")
  var instructionsElement = document.getElementById("instructions")
  var headingElement = document.getElementById("instructions_heading")

  console.log(selectElement.value)
  switch (selectElement.value) {
    case "head":
      headingElement.textContent = "head"
      instructionsElement.innerHTML = head_instructions
      break;

    case "body":
      headingElement.textContent = "body"
      instructionsElement.innerHTML = body_instructions
      break;

    case "leg":
      headingElement.textContent = "leg"
      instructionsElement.innerHTML = leg_instructions
      break;

    case "arm":
      headingElement.textContent = "arm"
      instructionsElement.innerHTML = arm_instructions
      break;

    case "ears":
      headingElement.textContent = "ears"
      instructionsElement.innerHTML = ears_instructions
      break;

    case "tail":
      headingElement.textContent = "tail"
      instructionsElement.innerHTML = tail_instructions
      break;
  }
}

document.getElementById("body_part_selection").addEventListener("change", function() {
  update_instructions()
})
