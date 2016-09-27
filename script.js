function nbaPlayer(name, value, offRating, defRating) {
	this.name= name;
	this.userInput= name.toLowerCase();
	this.value= value;
	this.offRating= offRating;
	this.defRating= defRating;
};

// var __players = {
// 	players: [
// 		{
// 			name: 'Lebron James',
// 			dollarValue: 5,
// 			playerOffensiveRating: 116.5
// 		},
// 		{

// 		},
// 		{

// 		}
// 	]
// }
// var __playersObj = {
// 	"Lebron James": {
// 		dollarValue: 5,
// 		playerOffensiveRating: 116.5
// 	},
// 	"Derrick Rose": {
// 		dollarValue: 6

// 	}
// }

var lebronJ = new nbaPlayer("Lebron James", 7, 116.5, 101.9);
var lamarcusA = new nbaPlayer("LaMarcus Aldridge", 5, 114.6, 98.1);
var demarcusC = new nbaPlayer("DeMarcus Cousins", 5, 103.0, 102.1);
var anthonyD = new nbaPlayer("Anthony Davis", 5, 110.1, 104.2);
var blakeG = new nbaPlayer("Blake Griffin", 5, 108.6, 101.4);
var jamesH = new nbaPlayer("James Harden", 5, 115.0, 107.7);
var chrisP = new nbaPlayer("Chris Paul", 5, 119.4, 102.0);
var kawhiL = new nbaPlayer("Kawhi Leonard", 5, 121.5, 94.9);
var russellW = new nbaPlayer("Russell Westbrook", 5, 115.4, 102.4);

var carmeloA = new nbaPlayer("Carmelo Anthony", 4, 106.7, 106.4);
var demarD = new nbaPlayer("Demar Derozan", 4, 112.9, 107.7);
var jimmyB = new nbaPlayer("Jimmy Butler", 4, 116.2, 104.9);
var paulM = new nbaPlayer("Paul Millsap", 4, 108.2, 96.2);
var damianL = new nbaPlayer("Damian Lillard", 4, 113.1, 110.1);
var kyrieI = new nbaPlayer("Kyrie Irving", 4, 109.7, 107.3);
var paulG = new nbaPlayer("Paul George", 4, 106.5, 100.7);
var hassanW = new nbaPlayer("Hassan Whiteside", 4, 116.9, 94.3);
var johnW = new nbaPlayer("John Wall", 4, 102.2, 104.4);
var andreD = new nbaPlayer("Andre Drummond", 4, 102.8, 97.8);
var karlA = new nbaPlayer("Karl Anthony-Towns", 4, 112.0, 105.8);

var giannisA = new nbaPlayer("Giannis Antetokoumpo", 3, 108.7, 106.0);
var ericB = new nbaPlayer("Eric Bledsoe", 3, 107.1, 104.6);
var chrisB = new nbaPlayer("Chris Bosh", 3, 102.2, 104.4);
var derrickF = new nbaPlayer("Derrick Favors", 3, 111.2, 100.4);
var alH = new nbaPlayer("Al Horford", 3, 113.0, 100.9);
var marcG = new nbaPlayer("Marc Gasol", 3, 104.2, 103.9);
var dwightH = new nbaPlayer("Dwight Howard", 3, 111.1, 103.3);
var sergeI = new nbaPlayer("Serge Ibaka", 3, 107.8, 105.0);
var deandreJ = new nbaPlayer("DeAndre Jordan", 3, 121.8, 96.9);
var kevinL = new nbaPlayer("Kevin Love", 3, 102.2, 104.4);
var kyleL = new nbaPlayer("Kyle Lowry", 3, 115.2, 103.9);
var dirkN = new nbaPlayer("Dirk Nowitzki", 3, 110.2, 105.5);
var isaiahT = new nbaPlayer("Isaiah Thomas", 3, 113.0, 106.6);
var dwyaneW = new nbaPlayer("Dwyane Wade", 3, 103.4, 105.2);
var andrewW = new nbaPlayer("Andrew Wiggins", 3, 105.6, 112.8);

var bradleyB = new nbaPlayer("Bradley Beal", 2, 103.8, 107.9);
var mikeC = new nbaPlayer("Mike Conley", 2, 113.9, 107.7);
var tyrekeE = new nbaPlayer("Tyreke Evans", 105.4, 106.8);
var kennethF = new nbaPlayer("Kenneth Faried", 2, 116.4, 107.3);
var pauG = new nbaPlayer("Pau Gasol", 2, 106.9, 99.8);
var rudyG = new nbaPlayer("Rudy Gobert", 2, 112.5, 97.1);
var gordonH = new nbaPlayer("Gordon Hayward", 2, 110.3, 105.6);
var brookL = new nbaPlayer("Brook Lopez", 2, 109.3, 107.9);
var cjM = new nbaPlayer("C.J. McCollum", 2, 107.8, 109.5);
var khrisM= new nbaPlayer("Khris Middleton", 2, 109.1, 109.2);
var chandlerP = new nbaPlayer("Chandler Parsons", 2, 109.9, 107.4);
var kristapsP = new nbaPlayer("Kristaps Porzingis", 2, 103.0, 103.6);
var zachR = new nbaPlayer("Zach Randolph", 2, 107.6, 108.4);
var jonasV = new nbaPlayer("Jonas Valanciunas", 2, 120.7, 103.5);
var nikolaV = new nbaPlayer("Nikola Vucevic", 2, 106.7, 104.5);
var kembaW = new nbaPlayer("Kemba Walker", 2, 111.5, 104.7);

var playerArray=[
	lebronJ,lamarcusA, demarcusC, anthonyD, blakeG, jamesH, chrisP,kawhiL,russellW,carmeloA,demarD, jimmyB,paulM,damianL,kyrieI
	,paulG,hassanW,johnW,andreD,karlA,giannisA,ericB,chrisB,derrickF,alH,marcG,dwightH,sergeI,deandreJ,kevinL,kyleL,
	dirkN,isaiahT,dwyaneW,andrewW,bradleyB,mikeC,tyrekeE,kennethF,pauG,rudyG,gordonH,brookL,cjM,khrisM,chandlerP,kristapsP, jonasV, zachR,nikolaV,kembaW
	];

var userTeamArray = [];
var nameArray=[];

var valueAdder= function(array) {
	var totalValue= 0
	for (var i=0; i<array.length; i++) {
		totalValue += (array[i].value);
	};
	return(totalValue);
};

$(document).ready(function() {
    $(document).on("click","#addButton1",function() {
        var toAdd = $('input[name=checkListItem1]').val();
		var playerSorter = function (array) {
	    	for (var i=0; i<array.length; i++) {
	    		if (array[i].userInput=== toAdd.toLowerCase()) {
	    			$(".form1").replaceWith('<div class="item1a">' +array[i].name + '</div>');
	    			$("#addButton1").replaceWith('<div id="removeButton1">Remove</div>')
	    			$(".value1").append('<div class="item1b">' + "$"+ array[i].value + '</div>');
	    			$(".offRating1").append('<div class="item1c">' + array[i].offRating + '</div>');
	    			$(".defRating1").append('<div class="item1d">' + array[i].defRating + '</div>');
	    			userTeamArray.splice(0,0,array[i]); 
	    			var sum=valueAdder(userTeamArray);
	    			$(".teamTotalRemove").remove();
	    			$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');
	    		};
	    	};
	    };
		playerSorter(playerArray);
	});
});

$(document).on("click", "#removeButton1", function() {
	userTeamArray.splice(0,1);
	var sum=valueAdder(userTeamArray);
	$(".teamTotalRemove").remove();
	$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');
	$("#removeButton1").replaceWith('<div id="addButton1">Add</div>');
	$(".value1").empty();
	$(".offRating1").empty();
	$(".defRating1").empty();
	$(".item1a").replaceWith('<div class="form1"><form name="checkListForm"><input type="text" name="checkListItem1"/></form></div>');
});

$(document).ready(function() {
    $(document).on("click","#addButton2",function() {
        var toAdd = $('input[name=checkListItem2]').val();
		var playerSorter = function (array) {
	    	for (var i=0; i<array.length; i++) {
	    		if (array[i].userInput=== toAdd.toLowerCase()) {
	    			$(".form2").replaceWith('<div class="item2a">' +array[i].name + '</div>');
	    			$("#addButton2").replaceWith('<div id="removeButton2">Remove</div>')
	    			$(".value2").append('<div class="item2b">' + "$"+ array[i].value + '</div>');
	    			$(".offRating2").append('<div class="item2c">' + array[i].offRating + '</div>');
	    			$(".defRating2").append('<div class="item2d">' + array[i].defRating + '</div>');
	    			userTeamArray.splice(1,0,array[i]); 
	    			var sum=valueAdder(userTeamArray);
	    			$(".teamTotalRemove").remove();
	    			$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');
	    		};
	    	};
	    };
		playerSorter(playerArray);
	});
});

$(document).on("click", "#removeButton2", function() {
	userTeamArray.splice(1,1);
	var sum=valueAdder(userTeamArray);
	$(".teamTotalRemove").remove();
	$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');
	$("#removeButton2").replaceWith('<div id="addButton2">Add</div>');
	$(".value2").empty();
	$(".offRating2").empty();
	$(".defRating2").empty();
	$(".item2a").replaceWith('<div class="form2"><form name="checkListForm"><input type="text" name="checkListItem1"/></form></div>');
});    

// 	$("#addButton2").click(function() {
//         var toAdd = $('input[name=checkListItem2]').val();
// 	var playerSorter = function (array) {
//     	for (var i=0; i<array.length; i++) {
//     		if (array[i].userInput=== toAdd.toLowerCase()) {
//     			$(".form2").replaceWith('<div class="item2">' + array[i].name + '</div>');
//     			$("#addButton2").css("background-color","#80ffaa")
//     			$(".value2").append('<div class="item2">' +"$"+ array[i].value + '</div>');
//     			$(".offRating2").append('<div class="item2">' + array[i].offRating + '</div>');
//     			$(".defRating2").append('<div class="item2">' + array[i].defRating + '</div>'); 
//     			valueArray.push(array[i].value)
//     			var sum=valueAdder(valueArray);
//     			$(".teamTotalRemove").remove();
//     			$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');
//     		};
//     	};
//     };
// 	playerSorter(playerArray);
//     }); 

// 	$("#addButton3").click(function() {
//         var toAdd = $('input[name=checkListItem3]').val();
// 	var playerSorter = function (array) {
//     	for (var i=0; i<array.length; i++) {
//     		if (array[i].userInput=== toAdd.toLowerCase()) {
//     			$(".form3").replaceWith('<div class="item3">' + array[i].name + '</div>');
//     			$("#addButton3").css("background-color","#80ffaa")
//     			$(".value3").append('<div class="item3">' +"$"+ array[i].value + '</div>');
//     			$(".offRating3").append('<div class="item3">' + array[i].offRating + '</div>');
//     			$(".defRating3").append('<div class="item3">' + array[i].defRating + '</div>'); 
//     			valueArray.push(array[i].value)
//     			var sum=valueAdder(valueArray);
//     			$(".teamTotalRemove").remove();
//     			$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');

//     		};
//     	};
//     };
// 	playerSorter(playerArray);
//     });   

// 	$("#addButton4").click(function() {
//         var toAdd = $('input[name=checkListItem4]').val();
// 	var playerSorter = function (array) {
//     	for (var i=0; i<array.length; i++) {
//     		if (array[i].userInput=== toAdd.toLowerCase()) {
//     			$(".form4").replaceWith('<div class="item4">' + array[i].name + '</div>');
//     			$("#addButton4").css("background-color","#80ffaa")
//     			$(".value4").append('<div class="item4">' +"$"+ array[i].value + '</div>');
//     			$(".offRating4").append('<div class="item4">' + array[i].offRating + '</div>');
//     			$(".defRating4").append('<div class="item4">' + array[i].defRating + '</div>'); 
//     			valueArray.push(array[i].value)
//     			var sum=valueAdder(valueArray);
//     			$(".teamTotalRemove").remove();
//     			$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');

//     		};
//     	};
//     };
// 	playerSorter(playerArray);
//     });   

// 	$("#addButton5").click(function() {
//         var toAdd = $('input[name=checkListItem5]').val();

// 	var playerSorter = function (array) {
//     	for (var i=0; i<array.length; i++) {
//     		if (array[i].userInput=== toAdd.toLowerCase()) {
//     			$(".form5").replaceWith('<div class="item5">' + array[i].name + '</div>');
//     			$("#addButton5").css("background-color","#80ffaa")
//     			$(".value5").append('<div class="item5">' +"$"+ array[i].value + '</div>');
//     			$(".offRating5").append('<div class="item5">' + array[i].offRating + '</div>');
//     			$(".defRating5").append('<div class="item5">' + array[i].defRating + '</div>'); 
//     			valueArray.push(array[i].value)
//     			var sum=valueAdder(valueArray);
//     			$(".teamTotalRemove").remove();
//     			$(".teamTotal").append('<div class="teamTotalRemove">' + "Total:$" +sum + '</div>');

//     		};
//     	};
//     };
// 	playerSorter(playerArray);
// 	});
   	
// });





