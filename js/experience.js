(()=>{
	var provinceList = [
      '浙江省',
      '江西省',
    ];
    var cityList = [
      ['杭州', '绍兴', '宁波'],
      ['南昌', '吉安', '抚州'],
    ];
    var cityList1 = [
	  [
	  ['超级旗舰店', '旗舰店','专卖店'],
	  ['超级旗舰店', '旗舰店','专卖店'],
	  ['超级旗舰店', '旗舰店','专卖店']
	  ],
      [
	  ['超级旗舰店', '旗舰店','专卖店'],
	  ['超级旗舰店', '旗舰店','专卖店'],
	  ['超级旗舰店', '旗舰店','专卖店']
	  ],
    ];
		var $selCts=$("#city");
		var $selShop=$("#shop");
		$("#province").append("<option>"+provinceList.join("</option><option>")+"</option>")
		.change(e=>{
			var i=$(e.target).prop("selectedIndex");
			$selCts.children(":gt(0)").remove();
		  if(i>0){
				$selCts.append("<option>"+cityList[i-1].join("</option><option>")+"</option>")
				.change(e=>{
				var j=$(e.target).prop("selectedIndex");
				console.log(j);
				$selShop.children(":gt(0)").remove();
				$selShop.append("<option>"+cityList1[i-1][j-1].join("</option><option>")+"</option>")
				})
			}	
		});
})();