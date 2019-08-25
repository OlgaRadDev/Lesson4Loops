// Циклы
// Запросить у пользователя число, которое будет высотой вершины прямоугольного
// треугольника. Весь треугольник
// должен быть одной строкой. Например, console.log(triangle)
// в консоль выведет:
// *
// **
// ***

var height = +prompt("Enter number", '');
var star = '';
for (var i = 0; i<=height; i++){
    for (var j = 0; j<i; j++) {
        star+="*";
    }
    star+='\n';
}
console.log(star+'\n');


