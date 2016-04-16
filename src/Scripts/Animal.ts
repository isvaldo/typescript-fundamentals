interface Animal {
    name: string;
    age?: number;
    say: () => string;
}

var tobias: Animal = {
    name : "Tobias",
    say: function () {
        return "Guau-Guau";
    }
}