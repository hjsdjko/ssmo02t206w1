<template>
<div class="home-preview" :style='{"width":"100%","margin":"10px auto","flexWrap":"wrap","background":"#fff","display":"flex"}'>



		<!-- 关于我们 -->
		<div id="about" class="animate__animated" :style='{"padding":"30px 0% 0","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 10px","display":"flex","flexWrap":"wrap","background":"url(http://codegen.caihongy.cn/20231115/a14156df9c824f6987541eaa2a4f768a.png)","width":"100%","backgroundSize":"contain","backgroundPosition":"bottom left","position":"relatie","backgroundRepeat":"no-repeat","height":"auto","order":"5"}'>
		  <div :style='{"padding":"0 10%","color":"#F98805","textAlign":"left","width":"100%","lineHeight":"1.5","fontSize":"40px","fontWeight":"bold","order":"1"}'>{{aboutUsDetail.title}}</div>
		  <div :style='{"padding":"0 10%","margin":"0 0 10px","color":"#F98805","textAlign":"left","width":"100%","lineHeight":"3","fontSize":"16px","order":"2"}'>{{aboutUsDetail.subtitle}}</div>
		  <div :style='{"padding":"0 0","flexWrap":"wrap","display":"flex","width":"100%","justifyContent":"flex-end","height":"auto","order":"6"}'>
		    <img :style='{"width":"700px","margin":"-340px 0 100px 10px","objectFit":"cover","display":"block","height":"400px"}' :src="baseUrl + aboutUsDetail.picture1">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + aboutUsDetail.picture3">
		  </div>
		  <div :style='{"minHeight":"300px","padding":"0 0 0 10%","margin":"0 0 10px 0","color":"rgb(102, 102, 102)","width":"59%","lineHeight":"2","fontSize":"16px","order":"3"}' v-html="aboutUsDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px","order":"8"}' @click="toDetail('aboutusDetail',aboutUsDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 关于我们 -->

		<!-- 系统简介 -->
		<div id="system" class="animate__animated" :style='{"padding":"50px 10%","boxShadow":"0 1px 6px rgba(255, 255, 255, .3)","margin":"0 0 0","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","height":"auto","order":"3"}'>
		  <div :style='{"padding":"0 0 30px","color":"#000","textAlign":"left","width":"100%","lineHeight":"1.5","fontSize":"40px","order":"1"}'>{{systemIntroductionDetail.title}}</div>
		  <div :style='{"margin":"0 0 10px","color":"#999","textAlign":"center","display":"none","width":"100%","lineHeight":"1.5","fontSize":"20px"}'>{{systemIntroductionDetail.subtitle}}</div>
		  <div :style='{"padding":"50px","flexWrap":"wrap","background":"#FF961B30","display":"flex","width":"49%","fontSize":"0","height":"auto","order":"3"}'>
		    <img :style='{"margin":"0 20px 0 0","objectFit":"cover","flex":1,"display":"block","height":"200px"}' :src="baseUrl + systemIntroductionDetail.picture1">
		    <img :style='{"margin":"0 0 0 20px","objectFit":"cover","flex":1,"display":"block","height":"200px"}' :src="baseUrl + systemIntroductionDetail.picture2">
		    <img :style='{"margin":"0 10px","objectFit":"cover","flex":1,"display":"none","height":"120px"}' :src="baseUrl + systemIntroductionDetail.picture3">
		  </div>
		  <div :style='{"border":"1px solid #FF961B","padding":"10px 0","margin":"0 2% 0 0","color":"rgb(102, 102, 102)","display":"-webkit-box","minHeight":"300px","overflow":"hidden","borderWidth":"0 0 4px","width":"49%","lineHeight":"2.5","fontSize":"16px","textOverflow":"ellipsis","-webkit-box-orient":"vertical","-webkit-line-clamp":"7","order":"2"}' v-html="systemIntroductionDetail.content"></div>
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"width":"285px","background":"url(http://codegen.caihongy.cn/20201114/7856ba26477849ea828f481fa2773a95.jpg) 0% 0% / cover no-repeat","display":"none","height":"100px"}' />
		  <div :style='{"border":"0","margin":"10px auto","textAlign":"center","background":"#409EFF","display":"none","width":"80px","lineHeight":"32px","order":"4"}' @click="toDetail('systemintroDetail',systemIntroductionDetail)">
		    <span :style='{"color":"#f5f5f5","fontSize":"12px"}'>更多</span>
		    <span class="icon iconfont icon-gengduo1" :style='{"color":"#f5f5f5","fontSize":"12px"}'></span>
		  </div>
		</div>
		<!-- 系统简介 -->
		
	<!-- 新闻资讯 -->
	<div id="animate_newsnews" class="news animate__animated" :style='{"width":"100%","padding":"0 10% 20px","margin":"0 auto 0","position":"relative","background":"#fff","order":"1"}'>
		<div v-if="false" class="idea newsIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
			<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
			<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
			<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		</div>
		
		<div class="title" :style='{"width":"200px","margin":"10px auto 10px 0","lineHeight":"54px","textAlign":"center","background":"none"}'>
			<span :style='{"color":"#F98805","fontSize":"36px","fontWeight":"bold"}'>家电资讯</span>
		</div>
		
			
			
			
			
			
			
			
			
			
			
			<!-- 样式十 -->
		<div v-if="newsList.length" class="list list10 index-pv1" :style='{"width":"100%","padding":"10px 0","background":"#fff","justifyContent":"space-between","display":"flex","height":"auto"}'>
		  <div v-if="newsList.length>0" @click="toDetail('newsDetail', newsList[0])" :style='{"boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","padding":"0 0 20px","margin":"0","flexWrap":"wrap","background":"#fff","display":"flex","width":"49%","position":"relative","height":"auto"}' class="new10-list-item animation-box">
		    <img :style='{"width":"100%","objectFit":"cover","display":"block","height":"500px"}' :src="baseUrl + newsList[0].picture" alt="">
			<div :style='{"padding":"10px 20px 6px","margin":"0 25% 0 0","whiteSpace":"nowrap","overflow":"hidden","color":"#000","width":"75%","fontSize":"16px","lineHeight":"1.5","textOverflow":"ellipsis","fontWeight":"bold"}' class="new9-list-item-title line1">{{newsList[0].title}}</div>
		    <div :style='{"minHeight":"60px","padding":"0 20px 6px","margin":"0 25% 0 0","overflow":"hidden","color":"#4D4D4D","display":"-webkit-box","width":"75%","fontSize":"14px","lineHeight":"2","textOverflow":"ellipsis","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}' class="new9-list-item-descript line2">{{newsList[0].introduction}}</div>
			<div :style='{"padding":"0 10px","position":"absolute","right":"20px","bottom":"20px"}'>
			  <span class="icon iconfont icon-shijian22" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
			  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].addtime}}</span>
			</div>
			<div :style='{"padding":"0 0 0 20px"}'>
			  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
			  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].name}}</span>
			</div>
			<div :style='{"padding":"0 0 0 20px"}'>
			  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
			  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].thumbsupnum}}</span>
			</div>
			<div :style='{"padding":"0 0 0 20px"}'>
			  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
			  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].storeupnum}}</span>
			</div>
			<div :style='{"padding":"0 0 0 20px"}'>
			  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
			  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{newsList[0].clicknum}}</span>
			</div>
			<div :style='{"padding":"0 20px","color":"#fff","top":"510px","background":"#F98805","display":"inline-block","fontSize":"15px","lineHeight":"40px","position":"absolute","right":"20px"}' class="new9-list-item-identification">新闻动态</div>
		  </div>
		  <div v-if="newsList.length>1" :style='{"margin":"0 0 0 ","background":"#fff","flexDirection":"column","display":"flex","width":"49%","position":"relative","justifyContent":"space-between","height":"auto"}'>
		    <div v-for="(item,index) in newsList" v-if="index<4 && index>0" :key="index" @click="toDetail('newsDetail', item)" :style='{"border":"1px solid #F98805","boxShadow":"0px 4px 10px 0px rgba(0,0,0,0.3)","padding":"20px","flexWrap":"wrap","background":"#fff","borderWidth":"2px 0 0 ","display":"flex","width":"100%","position":"relative","height":"auto"}' class="new10-list-item animation-box">
		        <div :style='{"padding":"0 10px","margin":"0 25% 0 0","color":"#000","width":"75%","fontSize":"16px","lineHeight":"28px","fontWeight":"bold"}' class="new9-list-item-title line1">{{ item.title }}</div>
				<div :style='{"minHeight":"60px","padding":"0 10px","margin":"0 25% 0 0","overflow":"hidden","color":"#666","display":"-webkit-box","width":"75%","fontSize":"14px","lineHeight":"2","textOverflow":"ellipsis","-webkit-box-orient":"vertical","-webkit-line-clamp":"2"}' class="new9-list-item-descript line2">{{ item.introduction }}</div>
				<div :style='{"padding":"0 10px","position":"absolute","right":"20px","bottom":"20px"}'>
				  <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
				  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{item.addtime}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-geren16" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
				  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{item.name}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-zan10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
				  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{item.thumbsupnum}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
				  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{item.storeupnum}}</span>
				</div>
				<div :style='{"padding":"0 10px"}'>
				  <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"1.5","fontSize":"12px","color":"#4D4D4D"}'></span>
				  <span class="text" :style='{"color":"#4D4D4D","lineHeight":"1.5","fontSize":"12px"}'>{{item.clicknum}}</span>
				</div>
				<div :style='{"padding":"0 10px","color":"#fff","top":"20px","background":"#F98805","display":"inline-block","fontSize":"15px","lineHeight":"40px","position":"absolute","right":"20px"}' class="new9-list-item-identification">新闻动态</div>
		    </div>
		  </div>
		</div>
		











		<div @click="moreBtn('news')" :style='{"border":"0","cursor":"pointer","margin":"0","top":"10px","textAlign":"center","background":"#409EFF","display":"flex","width":"auto","lineHeight":"54px","position":"absolute","right":"10%"}'>
			<span :style='{"padding":"0 20px","color":"#fff","background":"#000","letterSpacing":"2px","fontSize":"16px","lineHeight":"54px","height":"54px"}'>查看更多</span>
			<i :style='{"padding":"0 20px","fontSize":"16px","color":"#fff","background":"#F98805"}' class="icon iconfont icon-gengduo1"></i>
		</div>
		
		</div>
	<!-- 新闻资讯 -->


<!-- 商品推荐 -->
<div id="animate_recommendjiadianshangcheng" class="recommend animate__animated" :style='{"padding":"20px 10%","margin":"0 auto","background":"url(http://codegen.caihongy.cn/20231115/213f8d56e12c4fbcad3723de9d0287ca.png)","width":"100%","backgroundSize":"cover","position":"relative","backgroundPosition":"center center","backgroundRepeat":"no-repeat","order":"2"}'>
	<div v-if="false" class="idea recommendIdea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
    <div class="title" :style='{"border":"1px solid #fff","margin":"10px auto","textAlign":"left","background":"none","borderWidth":"0 0 4px","width":"100%","lineHeight":"60px"}'>
		<span :style='{"color":"#fff","fontSize":"36px"}'>家电商城推荐</span>
	</div>
	
	
	
	
	
	
	
	
	
	



	<div v-if="jiadianshangchengRecommend.length" class="list list12 index-pv1 list12jiadianshangcheng" :style='{"width":"100%","padding":"0","margin":"30px 0 0","background":"none","height":"auto"}'>
	  <div class="tab" :style='{"margin":"0 0 20px","top":"34px","display":"flex","width":"auto","position":"absolute","right":"10%","justifyContent":"center","height":"auto"}'>
	    <template v-for="item,index in recommendList12jiadianshangcheng">
		<div v-if="index < 6" @click="recommendIndexClick12(index + 1, 'jiadianshangcheng')" class="item" :class="index + 1 == recommendIndex12jiadianshangcheng ? 'active' : ''">
			<img v-if="item.image" :style='{"width":"34px","margin":"0 5px 0 0","objectFit":"cover","display":"block","height":"34px"}' :src="baseUrl + (item.image?item.image.split(',')[0]:'')">
			<div :style='{"color":"inherit","fontSize":"14px"}'>{{item[recommendColumn12jiadianshangcheng]}}</div>
		</div>
		</template>
		<div class="more" @click="moreBtn('jiadianshangcheng')">
		  <div :style='{"color":"inherit","fontSize":"14px"}'>更多</div>
		  <span class="icon iconfont icon-jiantou25" :style='{"color":"inherit","margin":"0 0 0 2px","fontSize":"14px"}'></span>
		</div>
	  </div>
	  <div class="list" :style='{"overflow":"hidden","flexWrap":"wrap","background":"none","display":"flex","width":"100%","justifyContent":"space-between","height":"auto"}'>
	    <div :style='{"cursor":"pointer","width":"48%","margin":"0 0 20px","position":"relative","height":"auto"}' class="item list-item animation-box" v-for="item,index in jiadianshangchengRecommend" :key="index" @click="toDetail('jiadianshangchengDetail', item)">
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
			<img :name="item.id" :style='{"width":"100%","objectFit":"cover","display":"block","height":"250px"}' v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="line1" :style='{"padding":"0px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","textAlign":"center","width":"100%","lineHeight":"30px","fontSize":"18px","textOverflow":"ellipsis"}'>家电名称:{{item.jiadianmingcheng}}</div>
			<div class="line1" :style='{"padding":"0px","overflow":"hidden","whiteSpace":"nowrap","color":"#fff","textAlign":"center","width":"100%","lineHeight":"30px","fontSize":"18px","textOverflow":"ellipsis"}'>家电分类:{{item.jiadianfenlei}}</div>
	    </div>
	  </div>
	</div>




	
	<div @click="moreBtn('jiadianshangcheng')" :style='{"border":"0","cursor":"pointer","margin":"0px auto 20px","textAlign":"center","background":"none","display":"flex","width":"140px","lineHeight":"50px"}'>
		<span :style='{"width":"100px","fontSize":"16px","color":"#f5f5f5","background":"#000","display":"block"}'>更多</span>
		<i :style='{"width":"40px","fontSize":"16px","color":"#FE951B","background":"#fff","display":"block"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	
</div>
<!-- 商品推荐 -->


<!-- 特价商品 -->
<div id="animate_listjiadianshangcheng" class="lists animate__animated" :style='{"border":"1px solid #D8D8D8","padding":"40px 10%","margin":"0 0 0","background":"#fff","borderWidth":"0 0 2px","width":"100%","position":"relative","order":"6"}'>
	<div v-if="false" class="idea" :style='{"padding":"20px","flexWrap":"wrap","background":"#efefef","justifyContent":"space-between","display":"flex"}'>
		<div class="box1" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box2" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box3" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box4" :style='{"width":"20%","background":"#fff","height":"80px"}'></div>
		<div class="box5" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box6" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box7" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box8" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box9" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
		<div class="box10" :style='{"width":"20%","background":"#fff","display":"none","height":"80px"}'></div>
	</div>
	
	<div class="title" :style='{"width":"100%","margin":"10px auto","lineHeight":"54px","textAlign":"left","background":"none"}'>
	  <span :style='{"color":"#F98805","fontSize":"30px","fontWeight":"bold"}'>家电商城展示</span>
	</div>
	
	
	
	
	
	
	
	
	
	






	
		<div v-if="jiadianshangchengList.length" :style='{"padding":"0 20px 20px 20px","flexWrap":"wrap","background":"#fff","display":"flex","width":"100%","justifyContent":"flex-start","height":"auto"}' class="list list17 index-pv1">
		  <div v-for="item,index in jiadianshangchengList" :key="index"  @click="toDetail('jiadianshangchengDetail', item)" :style='{"width":"calc(25% - 10px)","margin":"20px 5px 0","overflow":"hidden","position":"relative","background":"#fff","height":"300px"}' class="item">
				<img class="image" v-if="preHttp(item.tupian)" :src="item.tupian.split(',')[0]" alt="" />
				<img class="image" v-else :src="baseUrl + (item.tupian?item.tupian.split(',')[0]:'')" alt="" />
			<div class="content">
		      <div :style='{"overflow":"hidden","color":"#fff","display":"-webkit-box","width":"48%","lineHeight":"21px","fontSize":"14px","textOverflow":"ellipsis","-webkit-box-orient":"vertical","-webkit-line-clamp":"5","order":"2"}'>{{item.jiadianxiangqing}}</div>
		      <div class="info">
				<div :style='{"lineHeight":"2","fontSize":"14px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","color":"#fff"}' class="name ">家电名称:{{item.jiadianmingcheng}}</div>
				<div :style='{"lineHeight":"2","fontSize":"14px","whiteSpace":"nowrap","overflow":"hidden","textOverflow":"ellipsis","color":"#fff"}' class="name ">家电分类:{{item.jiadianfenlei}}</div>
				<div :style='{"padding":"0"}'>
		          <span class="icon iconfont icon-shijian21" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{item.addtime}}</span>
		        </div>
		        <div :style='{"padding":"0"}'>
		          <span class="icon iconfont icon-shoucang10" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{item.storeupnum}}</span>
		        </div>
		        <div :style='{"padding":"0"}'>
		          <span class="icon iconfont icon-chakan9" :style='{"margin":"0 2px 0 0","lineHeight":"2","fontSize":"12px","color":"#fff"}'></span>
		          <span :style='{"color":"#fff","lineHeight":"2","fontSize":"12px"}'>{{item.clicknum}}</span>
		        </div>
		      </div>
		    </div>
		  </div>
		</div>
	
	<div @click="moreBtn('jiadianshangcheng')" :style='{"border":"0","cursor":"pointer","margin":"10px auto","top":"20px","textAlign":"center","background":"#409EFF","display":"flex","width":"120px","lineHeight":"50px","position":"absolute","right":"10%"}'>
		<span :style='{"fontSize":"15px","lineHeight":"50px","color":"#fff","background":"#000","flex":"2","height":"50px"}'>更多</span>
		<i :style='{"fontSize":"15px","lineHeight":"50px","color":"#fff","background":"#F98805","flex":"1","height":"50px"}' class="icon iconfont icon-gengduo1"></i>
	</div>
	

</div>
<!-- 特价商品 -->
	
</div>
</template>

<script>
import 'animate.css'
import Swiper from "swiper";

  export default {
    //数据集合
    data() {
      return {
        baseUrl: '',
        aboutUsDetail: {},
        systemIntroductionDetail: {},
        newsList: [],
        jiadianshangchengRecommend: [],

        jiadianshangchengList: [],


		recommendIndex12jiadianshangcheng: 0,
		recommendList12jiadianshangcheng: [],
		recommendColumn12jiadianshangcheng: '',


      }
    },
    created() {
		this.baseUrl = this.$config.baseUrl;
		this.getNewsList();
		this.getAboutUs();
		this.getSystemIntroduction();
		this.getList();
		this.jiadianshangchengRecommendCate()
    },
	mounted() {
		window.addEventListener('scroll', this.handleScroll)
		setTimeout(()=>{
			this.handleScroll()
		},100)
		
		this.swiperChanges()
	},
	beforeDestroy() {
	  window.removeEventListener('scroll', this.handleScroll)
	},
    //方法集合
    methods: {
		swiperChanges() {
			setTimeout(()=>{
			},750)
		},
		jiadianshangchengRecommendCate(){
			this.$http.get('jiadianfenlei/list',{}).then(res => {
			  if (res.data.code == 0) {
				this.recommendList12jiadianshangcheng = res.data.data.list
			  }
			});
			this.recommendColumn12jiadianshangcheng = 'jiadianfenlei'
		},
		recommendIndexClick12(index, name) {
			this['recommendIndex12' + name] = index
			this.getList()
			
			document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			  el.classList.remove("active")
			})
			setTimeout(() => {
			  document.querySelectorAll('.recommend .list12' + name + ' .list .item').forEach(el => {
			    el.classList.add("active")
			  })
			}, 1);
		},


		handleScroll() {
			let arr = [
				{id:'search',css:'animate__bounceInDown'},
				{id:'about',css:'animate__fadeInDownBig'},
				{id:'system',css:'animate__bounce'},
				{id:'animate_recommendjiadianshangcheng',css:'animate__slideInDown'},
				{id:'animate_listjiadianshangcheng',css:'animate__fadeInBottomRight'},
				{id:'animate_newsnews',css:'animate__fadeInRightBig'},
				{id:'msgs',css:'animate__backInRight'},
				{id:'friendly',css:'animate__fadeInBottomLeft'}
			]
			
			for (let i in arr) {
				let doc = document.getElementById(arr[i].id)
				if (doc) {
					let top = doc.offsetTop
					let win_top = window.innerHeight + window.pageYOffset
					// console.log(top,win_top)
					if (win_top > top && doc.classList.value.indexOf(arr[i].css) < 0) {
						// console.log(doc)
						doc.classList.add(arr[i].css)
					}
				}
			}
		},
      preHttp(str) {
          return str && str.substr(0,4)=='http';
      },
      getAboutUs() {
          this.$http.get('aboutus/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.aboutUsDetail = res.data.data;
            }
          })
      },
      getSystemIntroduction() {
          this.$http.get('systemintro/detail/1', {}).then(res => {
            if(res.data.code == 0) {
              this.systemIntroductionDetail = res.data.data;
            }
          })
      },
		getNewsList() {
			let data = {
				page: 1,
				limit: 6,
                sort: 'addtime',
				order: 'desc'
			}
			this.$http.get('news/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.newsList = res.data.data.list;
					
					
				}
			});
		},
		getList() {
			let autoSortUrl = "";
			let data = {}
          autoSortUrl = "jiadianshangcheng/autoSort";
			data = {
				page: 1,
				limit: 4,
			}
			if(this.recommendIndex12jiadianshangcheng != 0){
				data.jiadianfenlei = this.recommendList12jiadianshangcheng[this.recommendIndex12jiadianshangcheng - 1].jiadianfenlei
			}
			this.$http.get(autoSortUrl, {params: data}).then(res => {
				if (res.data.code == 0) {
					this.jiadianshangchengRecommend = res.data.data.list;
					
					
					// 商品列表样式五
					
				}
			});
			
			data = {
				page: 1,
				limit: 8,
			}
			this.$http.get('jiadianshangcheng/list', {params: data}).then(res => {
				if (res.data.code == 0) {
					this.jiadianshangchengList = res.data.data.list;
					
					// 商品列表样式五
					
				}
			});
		},
		toDetail(path, item) {
			this.$router.push({path: '/index/' + path, query: {id: item.id}});
		},
		moreBtn(path) {
			this.$router.push({path: '/index/' + path});
		}
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
	.home-preview {
		// -------- search --------
		.search .select /deep/ .el-input__inner {
			border: 0;
			border-radius: 30px 0 0 30px;
			padding: 0 30px 0 10px;
			box-shadow: 0 0 0px rgba(64, 158, 255, .3);
			outline: none;
			color: #fff;
			background: #00000050;
			width: 120px;
			font-size: 14px;
			text-align: center;
			height: 60px;
		}
		
		.search .input /deep/ .el-input__inner {
			border: 0;
			border-radius: 0 30px 30px 0;
			padding: 0 10px;
			box-shadow: 0 0 6px rgba(64, 158, 255, .3);
			outline: none;
			color: #fff;
			background: #00000050;
			width: 100%;
			font-size: 14px;
			height: 60px;
		}
		// -------- search --------
		.recommend {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
        }
        
        .list5 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 5px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.05) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
		
		.news {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list6 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list6 .swiper-button-next {
				left: auto;
				right: 10px;
			}
			
			.list6 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	
		.lists {
			.list3 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list3 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list3 .swiper-button-next {
				left: auto;
				right: 10px;
        }
        
        .list3 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-prev {
				left: 10px;
				right: auto;
			}
			
			.list5 .swiper-button-prev::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 .swiper-button-next {
            left: auto;
            right: 10px;
			}
			
			.list5 .swiper-button-next::after {
				color: rgb(64, 158, 255);
			}
			
			.list5 {
				.swiper-slide-prev {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-next {
					position: relative;
					z-index: 3;
				}
		
				.swiper-slide-active {
					position: relative;
					z-index: 5;
				}
			}
			
			.index-pv1 .animation-box {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				z-index: initial;
			}
			
			.index-pv1 .animation-box:hover {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 10px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
				z-index: 1;
			}
			
			.index-pv1 .animation-box img {
				transform: rotate(0deg) scale(1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
			}
			
			.index-pv1 .animation-box img:hover {
				transform: rotate(0deg) scale(1.1) skew(0deg, 0deg) translate3d(0px, 0px, 0px);
				-webkit-perspective: 1000px;
				perspective: 1000px;
				transition: 0.3s;
			}
		}
	}
	







	.home-preview .recommend .list12 .tab .item {
				cursor: pointer;
				border: 0;
				border-radius: 10px;
				padding: 5px 20px;
				margin: 0 10px;
				color: #fff;
				background: #000;
				display: flex;
				width: auto;
				font-size: 16px;
				line-height: 44px;
				align-items: center;
			}
	
	.home-preview .recommend .list12 .tab .item:hover {
				color: #fff;
				background: #F8DB1B;
			}
	
	.home-preview .recommend .list12 .tab .item.active {
				border-radius: 10px;
				color: #fff;
				background: #F8DB1B;
			}
	
	.home-preview .recommend .list12 .tab .more {
				cursor: pointer;
				padding: 5px 10px;
				margin: 0 10px;
				color: #666;
				background: #fff;
				display: none;
				line-height: 44px;
				align-items: center;
			}
	
	.home-preview .recommend .list12 .tab .more:hover {
				color: red;
			}
	
	.home-preview .recommend .list12 .item.active {
	  animation-name: mymove;
	
	  &:nth-of-type(1) {
	    animation-duration: 1s;
	  }
	  &:nth-of-type(2) {
	    animation-duration: 1.2s;
	  }
	  &:nth-of-type(3) {
	    animation-duration: 1.4s;
	  }
	  &:nth-of-type(4) {
	    animation-duration: 1.6s;
	  }
	  &:nth-of-type(5) {
	    animation-duration: 1.8s;
	  }
	  &:nth-of-type(6) {
	    animation-duration: 2s;
	  }
	}
	
	@keyframes mymove
	{
		from {top: 320px;}
		to {top: 0;}
	}



	.home-preview .lists .list17 .item .image {
				object-fit: cover;
				display: block;
				width: 100%;
				transition: 0.3s;
				height: 100%;
			}

	.home-preview .lists .list17 .item:hover .image {
				transform: scale(1.1);
			}
	
	.home-preview .lists .list17 .item .content {
				border: 1px solid #FE951B;
				padding: 30px 20px;
				bottom: -100%;
				display: flex;
				transition: 0.3s;
				left: 0;
				background: rgba(0,0,0,.5);
				width: 100%;
				justify-content: space-between;
				border-width: 2px 0 0;
				align-items: center;
				position: absolute;
				height: 80%;
			}
	
	.home-preview .lists .list17 .item:hover .content {
				bottom: 0;
			}
</style>
