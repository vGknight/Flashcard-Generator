function ClozeCard(text, cloze) {

    if (text.includes(cloze)) {

        if (this instanceof ClozeCard) {

            this.fullText = text; // "George Washington was the first president of the United States.
            this.cloze = cloze; // "George Washington"
            this.partial = text.replace(cloze, "....."); // " ... was the first president of the United States.

        } else {

            return new ClozeCard(text, cloze);
        }
    } else {
        console.log("ERROR--- '" + cloze + "' isn't in the full text of: '" + text + "' please try again.");

    }

}
module.exports = ClozeCard;