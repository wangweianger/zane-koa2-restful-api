import path from 'path'

// 系统配置
export let SYSTEM = {
  	//允许调用接口的域名，用来检测防盗链
  	ORIGIN        : 'http://127.0.0.1:8000/',  
  	// HTTP服务器端口号
  	PROT          : 1235, 
  	// 分页条数
  	PAGESIZE      : 10,
}

export let DB = {
	// 服务器地址
	HOST          : 'localhost',  
	// 数据库端口号     
	PROT          : 3306,  
	// 数据库用户名              
	USER          : 'root',  
	// 数据库密码    
	PASSWORD      : 'root', 
	// 数据库名称    
	DATABASE      : 'fea',  
	// 默认"api_"
	PREFIX        : 'fea_'       
}

export let NODEMAILER = {
	// SMTP服务提供商域名
  	HOST       : '163',
  	// 用户名/用户邮箱
  	USER          : 'xxx@163.com', 
  	// 邮箱密码
  	PASSWORD      : '132456', 
}


