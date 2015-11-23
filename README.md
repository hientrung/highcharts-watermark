# highcharts-watermark
Add config and render a image in center of chart for Highcharts.com (like as watermark)
#Demo 
http://hientrung.github.io/highcharts-watermark/
#Config
Add a config name 'wartermark' to option when create chart or use Highcharts.setOptions to set watermark is default 

Default: <br/>

  watermark: {
  
    url: '',
    
    width: 200, //width of image
    
    height: 200, //height of image
    
    top: false, //set image to top other elements
    
    opacity: 1 //set opacity of image
    
  }

If config was setup default, it's can disable in charts by set url to empty string
