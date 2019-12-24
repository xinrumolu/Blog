 
<template>
<div>
    <div class="header">
        
    <div class="container">
        
  <ul class="nav nav-default justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" href="#">首页</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">页面</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">主体</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">教程</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">文章</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">随笔</a>
  </li>
   </ul>
   </div>
    </div>
    <div class="body container">
        <div class="row">
           <div class="col-sm-10"  style="background-color:#9bb6a4">                        
              <InnerGroup></InnerGroup>
           </div>
           <div class="col-sm-2" style="background-color:green">  22  </div>
        </div>
    </div>
    <div class="footer">
    </div>
    </div>
</template>
<style>
    .header{
        background-color:#f1f7f3;
        height:66px;
    }
    .container{
        line-height:50px;
    }
       .active{
        color:blue
    }
    li>a{
        color:#000000
    }
</style>