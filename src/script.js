var sanguine = ['Animated', 'Playful', 'Sociable', 'Convincing', 'Refreshing',
                'Spirited', 'Promoter', 'Spontaneous', 'Optimistic', 'Funny',
                'Delightful', 'Cheerful', 'Inspiring', 'Demonstrative', 'Mixes easily',
                'Talker', 'Lively', 'Cute', 'Popular', 'Bouncy',
                'Brassy', 'Undisciplined', 'Repetitious', 'Forgetful', 'Interrupt',
                'Unpredictable', 'Haphazard', 'Permissive', 'Angered easily', 'Naive',
                'Wants credit', 'Talkative', 'Disorganized', 'Inconsistent', 'Messy',
                'Show-off', 'Loud', 'Scatterbrained', 'Restless', 'Changeable']
var choleric = ['Adventurous', 'Persuasive', 'Strong-willed', 'Competitive', 'Resourceful',
                'Self-reliant', 'Positive', 'Sure', 'Outspoken', 'Forceful',
                'Daring', 'Confident', 'Independent', 'Decisive', 'Mover',
                'Tenacious', 'Leader', 'Chief', 'Productive', 'Bold',
                'Bossy', 'Unsympathetic', 'Resistant', 'Frank', 'Impatient',
                'Unaffectionate', 'Headstrong', 'Proud', 'Argumentative', 'Nervy',
                'Workaholic', 'Tactless', 'Domineering', 'Intolerant', 'Manipulative',
                'Stubborn', 'Lord over others', 'Short-tempered', 'Rash', 'Crafty']
var melancholic = ['Analytical', 'Presistent', 'Self-sacrificing', 'Considerate', 'Respectful',
                    'Sensitive', 'Planner', 'Scheduled', 'Orderly', 'Faithful',
                    'Detailed', 'Cultured', 'Idealistic', 'Deep', 'Musical',
                    'Thoughtful', 'Royal', 'Chartmaker', 'Perfectionist', 'Behaved',
                    'Bashful', 'Unforgiving', 'Resentful', 'Fussy', 'Insecure',
                    'Unpopular', 'Hard to please', 'Pessimistic', 'Alienated', 'Negative attitude',
                    'Withdrawn', 'Too sensitive', 'Depressed', 'Introvert', 'Moody',
                    'Skeptical', 'Loner', 'Suspicious', 'Revengeful', 'Critical']
var phlegmatic = ['Adaptable', 'Peaceful', 'Submissive', 'Controlled', 'Reserved',
                    'Satisfied', 'Patient', 'Shy', 'Obliging', 'Friendly', 
                    'Diplomatic', 'Consistent', 'Inoffensive', 'Dry humor', 'Mediator',
                    'Tolerant', 'Listner', 'Contented', 'Pleasant', 'Balanced',
                    'Blank', 'Unenthusiastic', 'Reticent', 'Fearful', 'Indecisive',
                    'Uninvolved', 'Hesitant', 'Plain', 'Aimless', 'Nonchalant',
                    'Worrier', 'Timid', 'Doubtful', 'Indifferent', 'Mumbles',
                    'Slow', 'Lazy', 'Sluggish', 'Reluctant', 'Compromising']

class Personality {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

var sangList = []
var cholList = []
var melList = []
var phlegList = []

var sangCount = 0, cholCount = 0, melCount = 0, phlegCount = 0, questionCount = 0

function parseCharacters() {
    for (var i = 0; i < sanguine.length; i++) {
        var personality = new Personality(sanguine[i], 0)
        sangList.push(personality)
    }
    for (var i = 0; i < choleric.length; i++) {
        var personality = new Personality(choleric[i], 1)
        cholList.push(personality)
    }
    for (var i = 0; i < melancholic.length; i++) {
        var personality = new Personality(melancholic[i], 2)
        melList.push(personality)
    }
    for (var i = 0; i < phlegmatic.length; i++) {
        var personality = new Personality(phlegmatic[i], 3)
        phlegList.push(personality)
    }
}



function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

let options = document.querySelectorAll(".option")
let array = [0, 1, 2, 3]
parseCharacters();
renderOptions();
function clearInput() {
    for (var i = 0; i < 4; i++) {
        options[i].children[0].checked = false
      }
}
function renderOptions() {
    clearInput();
    if(questionCount < sangList.length) {
        var shuffled = shuffle(array);
        options[shuffled[0]].children[1].innerHTML = sangList[questionCount].name
        options[shuffled[0]].children[0].value = sangList[questionCount].type
        options[shuffled[1]].children[1].innerHTML = cholList[questionCount].name
        options[shuffled[1]].children[0].value = cholList[questionCount].type
        options[shuffled[2]].children[1].innerHTML = melList[questionCount].name
        options[shuffled[2]].children[0].value = melList[questionCount].type
        options[shuffled[3]].children[1].innerHTML = phlegList[questionCount].name
        options[shuffled[3]].children[0].value = phlegList[questionCount].type
    }
    else {
        let options = document.querySelectorAll(".option");
        for(let i=0; i<options.length; i++) {
            options[i].classList.add("hide");
        }
        document.querySelector("#next").classList.add("hide");
        document.querySelector("#show-results").classList.remove("hide");
    }
}

let nextBtn = document.querySelector("#quiz-form")

var selected = 20
for (var i = 0; i < 4; i++) {
    options[i].onclick = function () {
        selected = this.children[0].value
    }
}

let warning = document.querySelector(".error-message")
nextBtn.onsubmit = function (event) {
    event.preventDefault();
    console.log("selected " + selected)
    switch (selected) {
        case "0":
            sangCount++; questionCount++; warning.style.display = "none"; renderOptions();
            break;
        case "1":
            cholCount++; questionCount++; warning.style.display = "none"; renderOptions();
            break;
        case "2":
            melCount++; questionCount++; warning.style.display = "none"; renderOptions();
            break;
        case "3":
            phlegCount++; questionCount++; warning.style.display = "none"; renderOptions();
            break;
        default:
            warning.style.display = "block";
            console.log("default")
            break;
    }
    selected = -1;
}

let resultsBtn = document.querySelector("#show-results")
resultsBtn.onclick = function(event) {
    event.preventDefault();
    window.location.href = "src/results.html?sang=" + sangCount + 
                                                "&chol=" + cholCount +
                                                "&mel=" + melCount +
                                                "&phleg=" + phlegCount
}


