input.onButtonPressed(Button.A, function () {
    ans = (Quantity - 1) * 5
    basic.showNumber(ans)
})
input.onButtonPressed(Button.B, function () {
    ans = Unit_price + (Quantity + 7)
    basic.showNumber(ans)
})
let ans = 0
let Quantity = 0
let Unit_price = 0
Unit_price = 6
Quantity = 4
basic.forever(function () {
	
})
