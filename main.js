function call(){
	var anwser=$('#formx').serializeArray();
	anwser=anwser[0].value;
        var sum=0
        for (var i = 0, len = anwser.length; i < len; i++) {
            sum=sum+anwser.charCodeAt(i)
         }
        sum=sum%305; 

        $.ajax({ url: "new_epithets", success: function(file_content) {
            
            var epithets=file_content.split(',');
            $('p').empty();
            $('p').append('Рад тебя видеть снова,'+epithets[sum]+' '+anwser+'.');


        }});

    };
