var uploadEvent = function(dom){
			dom.prokey=new Date().getTime();
			dom.attr("id","file-item-"+dom.prokey);
			
			var f=$("#file-item-"+dom.prokey);
			
			$(".error-msg",f).html("");
			$(".progress-bar",f).css({width:"0%"});
			
			$(".progress-bar span",f).html("");
			
			$("form",dom).after("<iframe style='display:none;' name='upload-result-"+dom.prokey+"'/>");
			$("form",dom).attr({"target":"upload-result-"+dom.prokey,"action":"/UploadTest/web/upload.json?X-Progress-ID="+dom.prokey
				+"&callback=uploadSuccess&iframe=1"}).submit();
			//获取上传进度的方法
			(dom.getProgress=function(){
				$.ajax({
					type:"GET",
					url:"/UploadTest/web/upload/progress.json?callback=?",
					data:{"X-Progress-ID":dom.prokey},
					dataType:"jsonp",
					success:function(data){
						try{
							if(data.finish==1){
								$(".progress-bar",dom).css({width:"100%"});
								$(".progress-bar span",dom).html("上传完毕");
								dom.lastreceived=0;
								clearInterval(dom.timer);
							}else{
								if(data.received&&data.size){
									var prs=[Math.ceil((data.received/data.size)*100),Math];
									$(".progress-bar",dom).css({width:prs[0]+"%"});
									$(".progress-bar span",dom).html("已上传"+prs[0]+"%");
									dom.lastreceived=data.received;
								}else{
									clearInterval(dom.timer);
								}
							}
						}catch(e){
							clearInterval(dom.timer);
						}
					},error:function(){
						clearInterval(dom.timer);
					}
				});
			})();
			
			dom.timer=setInterval(dom.getProress,1000);
		}