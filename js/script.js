fs = require('fs')
fs.readFile('../data/userdata.json', 'utf8', function (err,data)
{
  if (err) {
    return console.log(err);
  }
  console.log(typeof data);
   console.log(data);
}
);
