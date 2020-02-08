var unirest = require("unirest");

var req = unirest("GET", "https://yummly2.p.rapidapi.com/feeds/search");

req.query({
	"FAT_KCALMax": "1000",
	"maxTotalTimeInSeconds": "7200",
	"allowedAttribute": "diet-lacto-vegetarian%2Cdiet-low-fodmap",
	"q": "chicken soup",
	"start": "0",
	"maxResult": "18"
});

req.headers({
	"x-rapidapi-host": "yummly2.p.rapidapi.com",
	"x-rapidapi-key": "49fd6eb8e7mshe8b18cb14c76ea6p1d9d95jsn7537292cac4f"
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});