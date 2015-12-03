fs = require('fs')
fs.readFile('../data/userdata.json', 'utf8', function (err,data)
{
  if (err) {
    return console.log(err);
  }

   console.log(data);
   data = JSON.parse(data);
   console.log(typeof data);
}
);
