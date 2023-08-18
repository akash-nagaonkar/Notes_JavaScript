// Prototype Inheritance

var human = {
    canFly: false,
    canTalk: true,
    canWalk: true,
    haveEmotions: true,
    hasFourLegs: false
}

var frontEndDeveloper = {
    canMakeAmazingWebsite: true,
    canMakeAnimations: true,
    canMakeAwardedWebsites: true
}

frontEndDeveloper.__proto__= human

console.log(frontEndDeveloper.canFly);
