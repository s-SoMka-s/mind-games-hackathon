class User {
    constructor(id, avatar, name, score) {
        this.id = id
        this.avatar = avatar
        this.name = name
        this.score = score
    }
}

var tbodyRef = document
    .getElementById("liderboard")
    .getElementsByTagName("tbody")[0]

let users = Array()
for (var i = 0; i < 10; i++) {
    users.push(
        new User(i, "assets/img/avatar.png", "Andrey Fisher", 300 - i * 5)
    )
}

users.map((user) => {
    console.log(user)
    var newRow = tbodyRef.insertRow()
    var cell1 = newRow.insertCell()
    cell1.innerHTML = user.id
    var cell2 = newRow.insertCell()
    cell2.innerHTML = user.name
    var cell3 = newRow.insertCell()
    cell3.innerHTML = user.score
    var cell4 = newRow.insertCell()
    cell4.innerHTML = "new row"
    var cell5 = newRow.insertCell()
    cell5.innerHTML = "new row"
})
