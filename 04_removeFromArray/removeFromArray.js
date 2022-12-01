const removeFromArray = function(array,...targets) {

    for (let i = 0; i < targets.length; i++)
    {
        for (let j = 0; j < array.length; j++) 
        {
            if (array[j] === targets[i]) 
            {
                array.splice(j, 1);
            }
        }
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
