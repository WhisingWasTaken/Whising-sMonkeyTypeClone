const quoteSection = document.getElementById("quote");
const userInput = document.getElementById("quote-input");
let quote = "";
let time = 15; 
let timer = null;
let mistakes = 0;
let testStarted = false;

const quotes = [
    "Life isn’t about getting and having, it’s about giving and being.",
    "Whatever the mind of man can conceive and believe, it can achieve.",
    "Strive not to be a success, but rather to be of value.",
    "Two roads diverged in a wood, and I took the one less traveled by, and that has made all the difference.",
    "I attribute my success to this: I never gave or took any excuse.",
    "If you want to achieve greatness stop asking for permission.",
    "Things work out best for those who make the best of how things work out.",
    "To live a creative life, we must lose our fear of being wrong.",
    "If you are not willing to risk the usual you will have to settle for the ordinary.",
    "Trust because you are willing to accept the risk, not because it's safe or certain.",
    "Take up one idea. Make that one idea your life—think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.",
    "All our dreams can come true if we have the courage to pursue them.",
    "Good things come to people who wait, but better things come to those who go out and get them.",
    "If you do what you always did, you will get what you always got.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    "Successful entrepreneurs are givers and not takers of positive energy.",
    "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
    "Opportunities don't happen, you create them.",
    "Try not to become a person of success, but rather try to become a person of value.",
    "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "If you don't value your time, neither will others. Stop giving away your time and talents—start charging for it.",
    "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "No one can make you feel inferior without your consent.",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.",
    "If you're going through hell, keep going.",
    "The ones who are crazy enough to think they can change the world are the ones that do.",
    "Don't raise your voice, improve your argument.",
    "What seems to us as bitter trials are often blessings in disguise.",
    "The meaning of life is to find your gift. The purpose of life is to give it away.",
    "The distance between insanity and genius is measured only by success.",
    "When you stop chasing the wrong things you give the right things a chance to catch you.",
    "Don't be afraid to give up the good to go for the great.",
    "No masterpiece was ever created by a lazy artist.",
    "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
    "If you can't explain it simply, you don't understand it well enough.",
    "Blessed are those who can give without remembering and take without forgetting.",
    "Do one thing every day that scares you.",
    "What's the point of being alive if you don't at least try to do something remarkable.",
    "Life is not about finding yourself. Life is about creating yourself.",
    "Nothing in the world is more common than unsuccessful people with talent.",
    "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
    "Your problem isn't the problem. Your reaction is the problem.",
    "You can do anything, but not everything.",
    "Innovation distinguishes between a leader and a follower.",
    "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",
    "I find that the harder I work, the more luck I seem to have.",
    "The starting point of all achievement is desire.",
    "Success is the sum of small efforts, repeated day-in and day-out.",
    "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
    "All progress takes place outside the comfort zone.",
    "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.",
    "Courage is resistance to fear, mastery of fear—not absence of fear.",
    "Only put off until tomorrow what you are willing to die having left undone.",
    "People often say that motivation doesn't last. Well, neither does bathing—that's why we recommend it daily.",
    "We become what we think about most of the time, and that's the strangest secret.",
    "The only place where success comes before work is in the dictionary.",
    "The best reason to start an organization is to make meaning; to create a product or service to make the world a better place.",
    "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
    "It's not what you look at that matters, it's what you see.",
    "The road to success and the road to failure are almost exactly the same.",
    "The function of leadership is to produce more leaders, not more followers.",
    "Success is liking yourself, liking what you do, and liking how you do it.",
    "As we look ahead into the next century, leaders will be those who empower others.",
    "A real entrepreneur is somebody who has no safety net underneath them.",
    "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
    "When I dare to be powerful—to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    "The successful warrior is the average man, with laser-like focus.",
    "Take up one idea. Make that one idea your life—think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body be full of that idea, and just leave every other idea alone. This is the way to success.",
    "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    "If you don't design your own life plan, chances are you'll fall into someone else's plan. And guess what they have planned for you? Not much.",
    "If you genuinely want something, don't wait for it—teach yourself to be impatient.",
    "Don't let the fear of losing be greater than the excitement of winning.",
    "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!",
    "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.",
    "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier, wish you were better.",
    "The number one reason people fail in life is because they listen to their friends, family, and neighbors.",
    "The reason most people never reach their goals is that they don't define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.",
    "In my experience, there is only one motivation, and that is desire. No reasons or principle contain it or stand against it.",
    "Success does not consist in never making mistakes but in never making the same one a second time.",
    "I don't want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well.",
    "You must expect great things of yourself before you can do them.",
    "Motivation is what gets you started. Habit is what keeps you going.",
    "People rarely succeed unless they have fun in what they are doing.",
    "There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.",
    "Our greatest fear should not be of failure but of succeeding at things in life that don't really matter.",
    "You've got to get up every morning with determination if you're going to go to bed with satisfaction.",
    "To be successful you must accept all challenges that come your way. You can't just accept the ones you like.",
    "Success is knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.",
    "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.",
    "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.",
    "Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all."
    ];

const changeFont = () => {
    const fontDropdown = document.getElementById("font-dropdown");
    const selectedFont = fontDropdown.value;
    document.body.className = selectedFont;
};


const renderNewQuote = () => {
    let randomIndex = Math.floor(Math.random() * quotes.length);
    quote = quotes[randomIndex];

    quoteSection.innerHTML = "";

    quote.split("").forEach((char) => {
        const span = document.createElement("span");
        span.classList.add("quote-chars");
        span.innerText = char;
        quoteSection.appendChild(span);
    });

    userInput.value = "";
    mistakes = 0;
    document.getElementById("mistakes").innerText = mistakes;

    document.getElementById("timer").innerText = `${time}s`;
};


const startTest = () => {
    if (!testStarted) {
        testStarted = true; 
        mistakes = 0;

        if (timer !== null) {
            clearInterval(timer);
        }
        time = 15; 
        userInput.disabled = false;
        document.querySelector(".result").style.display = "none";
        userInput.focus();
        document.getElementById("stop-test").style.display = "block";

        timer = setInterval(updateTimer, 1000);
    }
};

userInput.addEventListener("input", () => {
    if (!testStarted) {
        startTest();
    }

    let quoteChars = Array.from(document.querySelectorAll(".quote-chars"));
    let userInputChars = userInput.value.split("");

    quoteChars.forEach((char, index) => {
        if (userInputChars[index] == null) {
            char.classList.remove("success", "fail");
        } else if (char.innerText === userInputChars[index]) {
            char.classList.add("success");
            char.classList.remove("fail");
        } else {
            if (!char.classList.contains("fail")) {
                mistakes++;
                document.getElementById("mistakes").innerText = mistakes;
            }
            char.classList.add("fail");
            char.classList.remove("success");
        }
    });

    if (quoteChars.every(char => char.classList.contains("success"))) {
        displayResult();
    }
});

userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        displayResult();
    }
});

const updateTimer = () => {
    if (time <= 0) {
        displayResult();
    } else {
        time--;
        document.getElementById("timer").innerText = `${time}s`;
    }
};


const displayResult = () => {
    clearInterval(timer);
    timer = null; 
    testStarted = false; 
    userInput.disabled = true;
    document.getElementById("stop-test").style.display = "none";

    let timeTaken = 15 - time;
    if (timeTaken <= 0) {
        timeTaken = 1;
    }

    let wpm = Math.round((userInput.value.trim().length / 5) / (timeTaken / 60));
    document.getElementById("wpm").innerText = `${wpm} wpm`;

    let accuracy = Math.round(((quote.length - mistakes) / quote.length) * 100);
    accuracy = accuracy < 0 ? 0 : accuracy;
    document.getElementById("accuracy").innerText = `${accuracy}%`;

    document.querySelector(".result").style.display = "block";
};

const resetTest = () => {
    clearInterval(timer);
    timer = null;
    time = 15; 
    mistakes = 0;
    testStarted = false;
    userInput.disabled = true;
    userInput.value = "";

    document.getElementById("timer").innerText = `${time}s`;
    document.getElementById("mistakes").innerText = mistakes;
    document.getElementById("wpm").innerText = "0 wpm";
    document.getElementById("accuracy").innerText = "0%";
    document.querySelector(".result").style.display = "none";

    document.querySelectorAll(".quote-chars").forEach(char => {
        char.classList.remove("success", "fail");
    });

    renderNewQuote();
};

window.onload = () => {
    resetTest();
    renderNewQuote();
    userInput.focus();
};
