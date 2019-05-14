const fs = require('fs');
const data = require('./db.json');

//Remove the Empty Fields arise using CSV convertor
const obj = data.map(({ FIELD3, FIELD4, FIELD5, ...rest }) => rest);

//Change the key of v1 and v2 to label and text to make more sense 
json1 = JSON.parse(JSON.stringify(obj).split('"v1":').join('"label":'));
json2 = JSON.parse(JSON.stringify(json1).split('"v2":').join('"text":'));


//Rename ham to not spam for simplicity
json2.forEach(a => {
    if (a.label == 'ham') {
        a.label = 'not spam'
    }
});

//Write the preprocessed file to the path
fs.writeFileSync('cleaneddata.json', JSON.stringify(json2, null, 2))