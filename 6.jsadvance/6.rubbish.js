

function City(name){
    this.name = name;
    this.age = 600;
}

var cityFactory = function(name){
    var city = new City(name);
    return function(){
        return city;
    }
}

var beijing = cityFactory('北京');
console.log(beijing());
