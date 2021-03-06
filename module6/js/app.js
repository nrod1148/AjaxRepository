 (function () {

	'use strict';

	var app = angular.module("LunchCheck", ['ngSanitize']);
	
	app.controller("LunchCheckController", LunchCheckController);

	//  LunchCheckController.$inject = ['$scope'];
	function LunchCheckController($scope, $interpolate) {
		$scope.lunchList = "";
		$scope.message = "";

		$scope.checkIfTooMuch = function () {
			var lunchList = $scope.lunchList;
			lunchList = lunchList.replace(/\s/g, "");
			var lunchListSplit = lunchList.split(",");
			var emptyString = "";

			for(var i = lunchListSplit.length - 1; i >= 0; i--) {
			    if(lunchListSplit[i] === emptyString) {
			       lunchListSplit.splice(i, 1);
			    }
			}

			if (lunchListSplit[0] === undefined) {
				$scope.message = "Please enter data.";
				$scope.TextToUser = $interpolate('<font size="3" color="red">{{message}}</font>')($scope); 
			} else if (lunchListSplit.length <= 3) {
				$scope.message = "Enjoy!";
				$scope.TextToUser = $interpolate('<font size="3" color="green">{{message}}</font>')($scope);
			} else {
				$scope.message = "Too Much!";
				$scope.TextToUser = $interpolate('<font size="3" color="green">{{message}}</font>')($scope);
			}
		}

	};

})();
// (function (global) {

// 	var tc = {};

// 	tc.colorMessage = function () {

// 	  $ajaxUtils.sendGetRequest(
// 	    aboutHtml, 
// 	    function (aboutHtml) {

// 	      insertHtml("#main-content", aboutHtml)

// 	      var randomNum = randomNumber();

// 	      var ratingTextHtml = "{{ratingText}}";
// 	      var randomRatingText = randomNum + "-star rating";
// 	      var ratingText = insertProperty(ratingTextHtml, "ratingText", randomRatingText);
// 	      insertHtml("#ratingText", ratingText);

// 	      for ( var i = 1; i <= 5; i++ ) {

// 	        if ( i <= randomNum) {

// 	          var clsName = document.querySelector("#star" + i).className;
// 	          var starClsName = clsName.replace("", "fa fa-star fa-3x");
// 	          document.querySelector("#star" + i).className = starClsName;

// 	        } else {

// 	          var clsName = document.querySelector("#star" + i).className;
// 	          var starClsName = clsName.replace("", "fa fa-star-o fa-3x");
// 	          document.querySelector("#star" + i).className = starClsName;

// 	        }        
// 	      }  
// 	    }, 
// 	    false)

// 	};

// global.$ajaxUtils = ajaxUtils;


// })(window);




//       var textColorHtml = "{{textColor}}";
//       var randomRatingText = randomNum + "-star rating";
//       var ratingText = insertProperty(ratingTextHtml, "ratingText", randomRatingText);
//       insertHtml("#ratingText", ratingText);

// var classes = document.querySelector("#message").className;
// console.log(classes);
