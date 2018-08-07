
App = {
  web3Provider: null,
  contracts: {},
  init: function() {
      var partsRow = $('#partsRow');
      var partTemplate = $('#partTemplate');
      $.ajax({
      	type:"get",
      	url:"/home",
      	async:true,
      	success : function(data){
		    for (i = 0; i < data.length; i ++) {
	        partTemplate.find('.panel-title').text(data[i].name);
	        partTemplate.find('img').attr('src', data[i].picture);
	        partTemplate.find('.part-breed').text(data[i].brand);
	        partTemplate.find('.part-quantity').text(data[i].stock);
	        partTemplate.find('.part-surplusstock').text(data[i].surplusstock);
	        partTemplate.find('.part-location').text(data[i].location);
	        partTemplate.find('.btn-adopt').attr('data-id', data[i].partsId);
	        partTemplate.find('img').attr('alt',data[i].name);
	
	        partsRow.append(partTemplate.html());
	      }
      	},
      	error : function(err){
      		console.log(err);
      	}
      });
    return App.initWeb3();
  },

  initWeb3: function() {
  

    return App.initContract();
  },

  initContract: function() {
  

    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-adopt', App.handleAdopt);
  },


  handleAdopt: function(event) {
  	let num=$(this).attr('data-id');
	$.ajax({
		type:"get",
	url:"/details",
	async:true,
	success : function(data){
	},
	error : function(err){
		console.log(err);
		alert('err')
	}
		
	})
   window.location.href= '/details?id='+num;
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
