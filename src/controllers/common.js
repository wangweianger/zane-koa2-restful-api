
import { util,mysql,getsql } from '../tool'
 
class common {
	
	constructor(){

	}

	// 验证来源 && 验证签名
    async checkRequestUrl(ctx,next){
        let verSource = util.verSource(ctx)
        let checkSigin = util.checkSiginHttp(ctx);

        if(verSource&&checkSigin){
            return next();
        }else{
        	console.log('域名来源验证有误')
        }
    };

    // 获得公司及其公司下面系统信息
    async getComSysDataList(ctx, next){
        try{
            
            let isUse               =  ctx.request.body.isUse    

            // 调用mysql 示范案例
            let sql  =  getsql.SELECT({
                            table:'company',
                            wheres:[{isUse:0,'!':true}],
                        })
            let companys = await mysql( sql )

            console.log(sql)


            ctx.body = util.result({
                data:companys
            });

        }catch(err){
            console.log(err)
            ctx.body = util.result({
                code:1001,
                desc:"参数错误"
            });
           return ; 
        }

    };

}

module.exports = new common();


