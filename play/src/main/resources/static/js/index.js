(function(window) {

	// 初始化部分样式 设置中间区域高度
	var width = $(window).width();
	if (width < 350) {
		$('.footer span').css("font-size", "12px");
	}
	var height = $(window).height();
	var headerH = $('.header').height();
	var footerH = $('.footer').height();
	var ch = height - headerH - footerH - 14;
	$('.content').height(ch);
	// 获取当前坐标 设置区域
	function setMap() {
		var geolocation = new BMap.Geolocation();
		geolocation
			.getCurrentPosition(
				function(r) {
					if (this.getStatus() == BMAP_STATUS_SUCCESS) {
						var point = new BMap.Point(r.point.lng,
							r.point.lat); // 用所定位的经纬度查找所在地省市街道等信息
						var gc = new BMap.Geocoder();
						gc
							.getLocation(
								point,
								function(rs) {
									var addmap = rs.address;
									addmap = addmap.split("市");
									$('.map .addmap')
										.html(
											addmap[1] +
											'<span class="glyphicon glyphicon-menu-down"></span>')
								});
					} else {
						alert('failed' + this.getStatus());
					}
				}, {
					enableHighAccuracy: true
				})
	}
	setMap()

	// 添加元素
	function addItems() {
		for (var i = 0; i < projectData.length; i++) {
			initProject(projectData[i]);
		}
	}

	/**
	 * 三个排序事件
	 */

	function sortClick() {
		// 综合排序
		$('.sort p:eq(0)').click(function() {
			$('.content .projects').html('');
			projectData.sort(function(x, y) {
				return x.synthesize - y.synthesize;
			})
			addItems();
		});
		// 热度排序
		$('.sort p:eq(1)').click(function() {
			$('.content .projects').html('');
			projectData.sort(function(x, y) {
				return x.hot - y.hot;
			})
			addItems();
		});
		// 时间排序
		$('.sort p:eq(2)').click(function() {
			$('.content .projects').html('');
			projectData.sort(function(x, y) {
				return x.waitTime - y.waitTime;
			})
			addItems();
		});
	}

	sortClick(); // 排序的点击事件
	/* addItems(); */ // 初次加载数据

	// 当点击project组件时 跳转到详细信息页面
	$('.content .projects .project').click(
		function() {
			window.location.href = "toPromessage/" +
				projectData[$(this).index()].name;
		})

	// 当点击 确认排队 跳转到online
//	$('.content .projects .project .right button').click(function(e) {
//		e.stopPropagation();
//		var name = projectData[$(this).parent().parent().index()].name
//		window.location.href = "toOnline/" + name;
//
//	})
})(window)
