var questions = [
    {
        question: `Which movie contains the quote "Say hello to my little friend"?`,
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Scarface"
    },
    {
        question: `Which actress was part of the movie "Suicide Squad"?`,
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Margot Robbie"
    },
    {
        question: "What was the first monster to appear alongside Godzilla?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Aguirus"
    },
    {
        question: "Which of these movies did Jeff Bridges not star in?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "The Hateful Eight"
    },
    {
        question: "Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-III?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Ewan McGregor"
    },
    {
        question: "Who is the frontman of the band 30 Seconds to Mars?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Jared Leto"
    },
    {
        question: "Which Twitch streamer is the vocalist for Red Vox?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Vinesauce"
    },
    {
        question: "Who is the lead singer of Pearl Jam?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Eddie Vedder"
    },
    {
        question: "Ringo Starr of The Beatles mainly played what instrument?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Drums"
    },
    {
        question: "According to the American rapper Nelly, what should you do when its hot in here?",
        answers: [1, 2, 3, 4, 5],
        answerIndex: "Take off all your clothes"
    },
];

let answerArr = [];


function renderQuestions(index) {



    // questions.forEach(function (question, index) {
    var $form = $("<form>").attr("data-value", index)
    var $question = $("<h3>").text(questions[index].question)
    $form.append($question);

    questions[index].answers.forEach(function (answer, i) {
        var $input = $('<input type="radio">');
        $input.attr("value", answer);
        $input.attr("name", index);
        $form.append($input);
        $form.append(answer);
    });
    let $button = $("<button>").data("question", index).text("Next").addClass("nextButton")
    $form.append($button)
    $("#questions").append($form);

    // });
}

renderQuestions(0)



$(document).on("click", ".nextButton", function () {
    event.preventDefault();
    let index = $(this).data("question")
    console.log(index)

    if (index < 8) {

        $("form").data("value", index).addClass("hidden");
        checkTrivia(index);
        renderQuestions(index + 1)
    } else {
        end();
    }

})

function checkTrivia(index) {
    let $thatForm = $("form").data("value", index)

    console.log($thatForm[$thatForm.length - 1])



    $($thatForm[$thatForm.length - 1]).find("input:checked").each(function (i, elem) {

        answer = (elem.getAttribute("value"));
        answerArr.push(parseInt(answer))
        console.log(answer)
        console.log(answerArr)


        // console.log(answer)
        // console.log(questions[0].answerIndex)
        // for (var i = 0; i < questions.length; i++) {

        //     if (answer === questions[i].answerIndex) {
        //         console.log("winning")
        //         score++;
        //         console.log(score)
        //     }
        // }
    });

}

function end() {
    console.log("working")
}