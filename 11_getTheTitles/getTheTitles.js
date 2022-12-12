const getTheTitles = function(books) {
    let i = 0;
    list = [];
    for (title in books){
        list.push(books[i]["title"]);
        i++;
    }
    return list;
};

// Do not edit below this line
module.exports = getTheTitles;
