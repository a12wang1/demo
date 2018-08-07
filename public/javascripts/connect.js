App = {
 	web3Provider : null,
  	contracts : {},
  	url : '',
  	req : {},
  	init : function() {
	  	let partshow = $('#partshow');
	  	let partTemplate = $('#partTemplate');
	  	let result;
	  	url = window.location.search;
		if (url.indexOf("?")!=-1) {
		   result = url.substr(url.indexOf("=")).split("=")[1];
		}
		req = {
			partsId : result
		};
		$.ajax({
			type: "post",
			url: "/detail",
			async: true,
			dataType : 'json',
			data: req,
			success: function(data){
				req.name = data[0].name;
				partshow.find('.panel-title').text(data[0].name);
		        partshow.find('img').attr('src', data[0].picture);
		        partshow.find('.part-breed').text(data[0].brand);
		        partshow.find('.part-quantity').text(data[0].surplusstock);
		        partshow.find('.part-location').text(data[0].location);
				partshow.find('.part-price').text(data[0].price);
		        partshow.find('img').attr('alt',data[0].name);
				partTemplate.append(partshow.html());
			},
			error: function(err){
				console.log(err);
			}
		});
	
    	return App.initWeb3();
  	},

  	initWeb3: function() {
		App.web3Provider = web3.currentProvider;
		web3 = new Web3 (App.web3Provider); 
	    return App.initContract();
  	},

  	initContract: function() {
		$.ajax({
			type:"post",
			url:"/json",
			async:true,
			success : function(msg){
				let purchase = msg;
				App.contracts.Purchase = TruffleContract(purchase);
				App.contracts.Purchase.setProvider(App.web3Provider);
			},
			error : function(err){
				console.log("失败"+ err)
			}
		});
    	return App.bindEvents();
  	},

  	bindEvents: function() {
	    $(document).on('click', '.btn-adopt', App.handleAdopt);
	    $(document).on('click', '.add', App.handleAdd);
	    $(document).on('click', '.min', App.handleMin);
	    $(document).on('input propertychange','.text_box' ,App.handleChange);
	    $(document).on('blur','.text_box' ,App.handleBlur);
  	},

  	handleAdopt: function(event) {
  		event.preventDefault();
  		var purchaseInstance;
		web3.eth.getAccounts(function(error,accounts){
			if(error){
				console.log(error);
			}else{
				App.contracts.Purchase.deployed().then(function(instance){
					purchaseInstance = instance;
					$.ajax({
						type:"post",
						url:"/account",
						async:false,
						dataType : 'json',
						data : req,
						success : function(msg){
							req.price = msg[0].price;
							req.merchantaccount = msg[0].merchantaccount;
							req.merchantId = msg[0].merchantId;
							req.num = $(".text_box").val();
							req.amount = req.price * req.num;
						},
						error : function(err){
							alert('失败');
							console.log("失败"+ err)
						}
					});
					
//					return purchaseInstance.transfer(req.merchantaccount,req.amount*1e18);
					return purchaseInstance.Purchase(req.merchantaccount,req.amount*1e2,req.partsId,req.num,"'"+req.amount+"'");

			  }).then(function(result) {
			   		req.txHash = result.tx;
			   		req.blockNumber = result.receipt.blockNumber;
			  		App.contracts.Purchase.deployed().then(function(ins){
						return ins.getMessage.call();
					}).then(function(res){
//						console.log(res);
						req.userId = res;
						$.ajax({
						type:"post",
						url:"/buy",
						async:false,
						dataType : 'json',
						data : req,
						success : function(msg){
							console.log(req);
							$("#modal-default").iziModal({
						        title: "购买成功",
//						        subtitle: "小标题",
						        iconClass: 'icon-announcement',
						        width: 500,
						        padding: 20
						   });
						   	$('#modal-default').find('.panel-name').text(req.name);
						   	$('.panel-num').text(req.num);
						    $('.panel-amount').text(req.amount);
						    $('#modal-default').iziModal('open');
					       console.log($('#modal-default').iziModal('open'));
//					      	window.location.href= '/';
						},
						error : function(err){
							alert('失败');
							console.log("失败"+ err)
						}
					});
			  		})
			    }).catch(function(err) {
			    	console.log(err.message);
			    });
			}
   	})
//}
       
  	},
  	handleAdd : function(event){
    	$(this).prev().val(parseInt($(this).prev().val()) + 1);
	    if (parseInt($(this).prev().val()) > parseInt($(".part-quantity").html())) {
	
  			$(this).prev().val($(".part-quantity").html());
	    }
  	},
  	handleMin : function (event){
    	$(this).next().val(parseInt($(this).next().val()) - 1);
	    if ($(this).next().val()<1) {
	    	$(this).next().val(1);
	    }
	},
  	handleChange : function(){
	    if (parseInt($(".text_box").val()) >= parseInt($(".part-quantity").html())) {
        	$(".text_box").val($(".part-quantity").html());
	    }else if (parseInt($(".text_box").val()) <=0) {
	        $(".text_box").val(1);
	    }else{
	        let reg = /^[1-9]+?[0-9]*$/;
	        $(".text_box").val($(".text_box").val().match(reg));
	    }
	},
	handleBlur : function(){
  		if ($(".text_box").val() == '') {
    		$(".text_box").val(1)
  		}else{
    		$(".text_box").val(Math.floor($(".text_box").val()));
  		}
	}

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});





