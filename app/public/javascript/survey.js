var questions = [
    {
        question: "You find it easy to stay relaxed and focused even when there is some pressure."
        ,
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Generally speaking, you rely more on your experience than your imagination.",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "Your mind is always buzzing with unexplored ideas and plans",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "It is often difficult for you to relate to other people’s feelings",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "You rarely do something just out of sheer curiosity.",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "People can rarely upset you.",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "You rarely get carried away by fantasies and ideas.",
        answers: [1, 2, 3, 4, 5]
    },
    {
        question: "In a discussion, truth should be more important than people’s sensitivities.",
        answers: [1, 2, 3, 4, 5]
    },
];

let answerArr = [];


function renderQuestions(index) {
    let $divCard = $("<div>")
    var $form = $("<form>").attr("data-value", index).addClass("ghost")
    var $question = $("<h5>").text(questions[index].question).addClass("cardText")
    $form.append($question);

    questions[index].answers.forEach(function (answer, i) {
        var $radio = $('<input type="radio">');
        $radio.attr("value", answer).addClass("btnSpace");
        $radio.attr("name", index);
        $form.append($radio);
        $form.append(answer);
    });
    let $div = $("<div>")
    let $button = $("<button>").data("question", index).text("Next").addClass("nextButton")
    $form.append($div);
    $form.append($button)
    $divCard.append($form)
    $("#head").append($divCard);

}

renderQuestions(0)



$(document).on("click", ".nextButton", function () {
    event.preventDefault();
    let index = $(this).data("question")
    let $thatForm = $("form").data("value", index)

    console.log(index)
    console.log($thatForm);

    if (index < 8) {
        $(".ghost").data("value", index).hide(300);
        checkTrivia(index);
        renderQuestions(index + 1)

    } else {
        $("#proceed").show(500)
        $(".nextButton").hide(1000)
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





$("#proceed").on("click", function(event) {
    event.preventDefault();

    var newFriend = {
      name: $("#name").val().trim(),
      photo: $("#photo").val().trim(),
      scores: answerArr
    };
    console.log(newFriend)
    
        // Question: What does this code do??
        $.post("/api/friends", newFriend)
          .then(function(data) {
            console.log(data);
          });
});

