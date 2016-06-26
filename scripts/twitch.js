$(document).ready(function () {
	$.getJSON('https://api.twitch.tv/kraken/streams', function (data) {
		var items = [];
		for (var i = 0; i < data.streams.length; i++) {
			$.each(data.streams[i].channel, function (key, val) {
				if (key === "display_name")
					items.push("<div class =\"row\"><div class=\"entry\"><a href=\"" + data.streams[i].channel.url + "\">" + val + "</a><img src=\"" + data.streams[i].preview.medium + "</img></div></div>");
			});
		};


		$("<p>", {
			"class": "my-new-list",
			html: items.join("")
		}).appendTo("#channels");
	});
});
