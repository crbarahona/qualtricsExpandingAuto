Qualtrics.SurveyEngine.addOnload(function()
{
	// Load typeahead from external script
	$j("#QID2 input:text[id^='QR\\~QID2\\~']").typeahead(
		[ {
			name: 'organizations',
			prefetch: {
				url:'https://surveys.ucdavis.edu/org.json',
				ttl: '3600000' // One Hour
			},
			valueKey: 'Org Name',
			minLength: '3'
		} ]
	);
	//show non empty fields
	$j("#" + this.getPostTag() + " input:text").filter(function(){
			return this.value.length  !== 0;})
		.parent().parent().parent().show();


	$j("#" + this.getPostTag() + " input:text[id^='QR\~" + this.getPostTag() + "\~']").attr("placeholder","Organization Name");
	$j(this.questionContainer).find("input:text[id^='QR\~" + this.getPostTag() + "\~']").keyup(function(){
		if( $j(this).val().length > 0 ){
    		$j("#QID2 input:text[id^='QR']").filter(function(){

				return this.value.length == 0; }).first().parent().parent().parent().show();
			}
		else if ($j(this).parent().parent().parent().next().find("input:text[id^='QR']").val() == 0){
			$j(this).parent().parent().parent().next().fadeOut();
		}
	});
	$j("#" + this.getPostTag() + " tr:hidden").first().show();
});
