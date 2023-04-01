const verbs = require("./verbs");
const forms = require("./forms");
const formInflections = require("./formInflections");

function inflection(verb, form) {
    let verbStem = verb['stem'];
    let verbEnding = verb['ending'];
    let verbGroup = verb['group'];
    let formColumn = form['column'];

    let verbInflected = verbStem;

    if (verbGroup === '五段') {
        verbInflected = verbStem + formInflections[formColumn][verbEnding];
    }

    return verbInflected;
}

function conjugation(verb, form) {
    let verbInflected = inflection(verb, form);
    let formSuffix = form['suffix'];

    return verbConjugated = verbInflected + formSuffix;
}

function main() {
    let verbIndex = Math.floor(Math.random() * verbs.length);
    let formIndex = Math.floor(Math.random() * forms.length)
    let verb = verbs[verbIndex];
    let form = forms[formIndex];

    let verbConjugated = conjugation(verb, form)

    console.log(verbConjugated)
}

main()