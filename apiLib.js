
            $.noConflict
            function apiLib(url) {
                var rtrn
             jQuery.ajax({async:false,url: url, success: function(result){
                if(url.search(".json")!==-1) {rtrn= JSON.parse(result);} else if(url.search(".js")!==-1) {rtrn= eval("function() {"+result+"}");} else {
            rtrn= result;
                }
        }});return rtrn;
            }
