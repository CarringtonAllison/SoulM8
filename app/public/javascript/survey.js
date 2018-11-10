


var questions = [
    {
        question: `Which movie contains the quote "Say hello to my little friend"?`,
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: `Which actress was part of the movie "Suicide Squad"?`,
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "What was the first monster to appear alongside Godzilla?",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Which of these movies did Jeff Bridges not star in?",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Which actor plays Obi-Wan Kenobi in Star Wars Episodes I-III?",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Who is the frontman of the band 30 Seconds to Mars?",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Which Twitch streamer is the vocalist for Red Vox?",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Who is the lead singer of Pearl Jam?",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Ringo Starr of The Beatles mainly played what instrument?",
        answers: [1, 2, 3, 4, 5]
    },
];

let answerArr = [];


function renderQuestions(index) {
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

}

renderQuestions(0)



$(document).on("click", ".nextButton", function () {
    event.preventDefault();
    let index = $(this).data("question")
    let $thatForm = $("form").data("value", index)

    console.log(index)
    console.log($thatForm);

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
    let prettyForm = $thatForm[$thatForm.length - 1]

    $(prettyForm).find("input:checked").each(function (i, elem) {
        answer = (elem.getAttribute("value"));
        answerArr.push(parseInt(answer))
        console.log(answer)
        console.log(answerArr)

    });
}

function end() {
    console.log("working")
}





$("#proceed").on("click", function(event) {
    
    event.preventDefault();

    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
    };
    console.log(newFriend)

    
});

    // // Question: What does this code do??
    // $.post("/api/friends", newFriend)
    //   .then(function(data) {
    //     console.log(data);
    //   });