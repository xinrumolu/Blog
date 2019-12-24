 
<template>
<div>
  <nav class="navbar navbar-default"  role="navigation">
      <div class="container-fluid container">
       <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse"
                data-target="#example-navbar-collapse">
               <span class="sr-only">切换导航</span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
               <span class="icon-bar"></span>
            </button>
            <strong class="navbar-brand" href="#">My Blog</strong>
         </div>
       <div  class="collapse navbar-collapse" id="example-navbar-collapse"> 
         <form class="navbar-form navbar-right" role="search">
		       <div class="form-group">
			        <input type="text" class="form-control" placeholder="Search">
              <span class="form-btn">
                 <button type="submit" class="btn btn-default">                
                   <span class="glyphicon glyphicon-search"></span>搜索
                </button>
              </span>
		       </div>	       
	       </form>
          <ul class="nav navbar-nav navbar-right">
           <li><a>首页</a></li>
           <li><a>分类</a></li>
           <li><a>关于</a></li>
          </ul>
       </div>
    </div>
  </nav>
  <div class="body container">
      <div class="row">
          <div class="col-sm-10">                                             
            <InnerGroup></InnerGroup>
            <InnerGroup></InnerGroup>
            <InnerGroup></InnerGroup>
          </div>
          <div class="col-sm-2">    
            <div class="panel panel-info">
               <div class="panel-heading">
                777
               </div>
               <div class="panel-body">
                 菜单栏
               </div>
            </div>
             <div class="panel panel-info">
               <div class="panel-heading">
                 菜单栏-
               </div>
               <div class="panel-body">
                 菜单栏
               </div>
            </div>
             <div class="panel panel-info">
               <div class="panel-heading">
                 菜单栏2
               </div>
               <div class="panel-body">
                 菜单栏3
               </div>
            </div>
          </div>
      </div>
  </div>
  <div class="footer">
    222
  </div>
</div>
</template>
<style>
    .header{
        background-color:#f1f7f3;
        height:66px;
    }
    .active{
        color:blue
    }
    li>a{
        color:#000000
    }
</style>