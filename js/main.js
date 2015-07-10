$(document).ready(function(){
	$(".menu_button").click(function(){
		$(".page_ul").toggleClass("active");
	});
});


// EQUAL HEIGHTS
  // equalheight = function(container){
  // var currentTallest = 0,
  //      currentRowStart = 0,
  //      rowDivs = new Array(),
  //      $el,
  //      topPosition = 0;
  //  $(container).each(function() {
  //    $el = $(this);
  //    $($el).height('auto')
  //    topPostion = $el.position().top;

  //    if (currentRowStart != topPostion) {
  //      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
  //        rowDivs[currentDiv].height(currentTallest);
  //      }
  //      rowDivs.length = 0; // empty the array
  //      currentRowStart = topPostion;
  //      currentTallest = $el.height();
  //      rowDivs.push($el);
  //    } else {
  //      rowDivs.push($el);
  //      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  //   }
  //    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
  //      rowDivs[currentDiv].height(currentTallest);
  //    }
  //  });
  // }

  // $(window).load(function() {
  //   equalheight('.top_blocks');
  // });
  // $(window).resize(function(){
  //   equalheight('.top_blocks');
  // });

  // $('.grid_copy > .absolute').each(function() {
  //   $(this).parent().height('+=' + $(this).height());
  //   $(this).css('position', 'absolute');
  // });
// END EQUAL HEIGHTS