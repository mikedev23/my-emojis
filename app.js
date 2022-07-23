const myEmojis = ["👨🏿‍💻", "🍳", "🏀","🚴🏾‍♂️", "☕"]
const emojiContainer = document.querySelector("#emojiContainer")
const emojiInput = document.querySelector("#emoji-input")
const pushBtn = document.querySelector("#push-btn")
const unshiftBtn = document.querySelector("#unshift-btn")
const popBtn = document.querySelector("#pop-btn")
const shiftBtn = document.querySelector("#shift-btn")

renderEmojis()

function renderEmojis() {
	emojiContainer.innerHTML = ""
	for (const emojiIndex of myEmojis) {
		emojiContainer.innerHTML += `<span>${emojiIndex}</span>`
	}
}

pushBtn.addEventListener("click", () => {
	if (emojiInput.value) {
		myEmojis.push(emojiInput.value)
		emojiInput.value = ""
		renderEmojis()
	}
})

unshiftBtn.addEventListener("click", () => {
	if (emojiInput.value) {
		myEmojis.unshift(emojiInput.value)
		emojiInput.value = ""
		renderEmojis()
	}
})

popBtn.addEventListener("click", () => {
	myEmojis.pop()
	renderEmojis()
})

shiftBtn.addEventListener("click", () => {
	myEmojis.shift()
	renderEmojis()
})
