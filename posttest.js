/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");
        answerContainers.forEach(e => e.style.color = "black");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [{
            question: "1. Boundary Condition at the pinned end", ///// Write the question inside double quotes
            answers: {
                a: "Bending Moment = 0, Shear force equals the spring force", ///// Write the option 1 inside double quotes
                b: "Deflection = 0, Slope = 0", ///// Write the option 2 inside double quotes
                c: "Deflection = 0, Bending moment = 0", ///// Write the option 1 inside double quotes
                d: "Bending moment = 0, Shear Force = 0", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },

        {
            question: "2. Boundary Condition at the elastically restrained end", ///// Write the question inside double quotes
            answers: {
                a: "Bending Moment = 0, Shear force equals the spring force", ///// Write the option 1 inside double quotes
                b: "Deflection = 0, Slope = 0", ///// Write the option 2 inside double quotes
                c: "Deflection = 0, Bending moment = 0", ///// Write the option 1 inside double quotes
                d: "Bending moment = 0, Shear Force = 0", ///// Write the option 2 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

        // {
        //     question: "3. How many mode the experiment was performed", ///// Write the question inside double quotes
        //     answers: {
        //         a: "mode 2 and mode 3", ///// Write the option 1 inside double quotes
        //         b: "mode 1 and mode 3", ///// Write the option 2 inside double quotes
        //         c: "mode 1 and mode 2", ///// Write the option 1 inside double quotes
        //         d: "mode 4 and mode 5", ///// Write the option 2 inside double quotes
        //     },
        //     correctAnswer: "c" ///// Write the correct option inside double quotes
        // },

        // {
        //     question: "4. By this experiment can we study the vibration of thin and thick circular plate?", ///// Write the question inside double quotes
        //     answers: {
        //         a: "Yes", ///// Write the option 1 inside double quotes
        //         b: "No", ///// Write the option 2 inside double quotes
        //         c: "can't say", ///// Write the option 1 inside double quotes
        //         d: "may be", ///// Write the option 2 inside double quotes
        //     },
        //     correctAnswer: "b" ///// Write the correct option inside double quotes
        // },

        // {
        //     question: "5. Is there any change of node takes place in this experiment takes place?", ///// Write the question inside double quotes
        //     answers: {
        //         a: "Yes", ///// Write the option 1 inside double quotes
        //         b: "No", ///// Write the option 2 inside double quotes
        //         c: "can't say", ///// Write the option 1 inside double quotes
        //         d: "None of the above.", ///// Write the option 2 inside double quotes
        //     },
        //     correctAnswer: "b" ///// Write the correct option inside double quotes
        // },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
