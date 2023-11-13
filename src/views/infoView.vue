

<template>
  <ul id="c"> 

<li><p><strong>1</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>2</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>3</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>4</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>

<li><p><strong>5</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>6</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>7</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>8</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li> 

<li><p><strong>9</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>10</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>11</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li>
<li><p><strong>12</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p></li> 

</ul>
    <div class="">
      <h1>¿Quienes somos?</h1>
    </div>
  </template>

  <style scoped>
  	* {
		box-sizing: border-box;
	}


	body > ul {
		position: absolute;
		top: 50%;
		width: 800px;
		height: 200px; 
		left: 50%;
		margin-left: -400px;
		margin-top: -130px;
	}
 
	ul > li {
		width: 25%;
		list-style-type: none;
		position: absolute;
		top: 0;
		padding: 20px;
		height: 200px; 
		opacity: 0;
		padding-top: 40px;
		text-align: center;
		transition: 1s opacity; 
	}

	.active {
		opacity: 1;
	}
  
	p {
		font-family: sans-serif;
		font-size: 13px;
    color: #646566;
		line-height: 1.5em;
	}

	strong { 
    color: #fff;
    font-weight: 700;
		font-size: 60px; 
    line-height: 100px; 
	}

  h1{
    text-align: center;
  }
</style>
