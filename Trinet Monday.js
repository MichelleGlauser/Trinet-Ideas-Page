var apiBaseURL = 'http://api.getsatisfaction.com/companies/trinet/';
jQuery.ajax({
    type: 'GET',
    url: apiBaseURL + 'products.json?callback=addTitleAndURL',
    dataType: 'jsonp',
    success: function(results) {
        for (var i=0;i < results.data.length; i++) {
            var object = results.data[i];
            if (object.canonical_name && object.name) {
                var productTitle = object.name;
                var productURL = "getsatisfaction.com/trinet/products/" + object.canonical_name;
                jQuery('ul.products').append('<li><a href="' + productURL + '">' + productTitle + '</a></li>');
                    console.log(productTitle);
                    console.log(productURL);
                jQuery.ajax({
                    type: 'GET',
                    url: apiBaseURL + 'topics.json?product=' + object.canonical_name,
                    dataType: 'jsonp',
                    success: function(results2) {
                        var numProductTopics = results2.total;
                        jQuery('ul.products li').prepend('<span>' + numProductTopics + '</span>');
                        console.log(numProductTopics);
                    }
                });
            }
        }
    }
});


THIS PRINTS ALL THE PRODUCTS FOR EACH ONE



// jQuery('ul.products').append('<li><span>10000</span><a href="/user/messages">Message Center</a></li>');


jQuery('ul.products').append('<li><span>' + numProductTopics + '<a href="' + productURL + '">' + productTitle + '</a></li>');