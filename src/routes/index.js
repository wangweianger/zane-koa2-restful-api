import KoaRouter from 'koa-router'
import controllers from '../controllers'
import { util } from '../tool'

const router = new KoaRouter()

// 请求接口校验中间件
const checkfn = controllers.common.checkRequestUrl;


// 获得公司列表
router.post('/api/getComSysDataList',checkfn, controllers.common.getComSysDataList)

// 发送邮件
router.post('/api/sendEmail',checkfn, controllers.email.sendEmail)


// 所有请求返回
router.all('*' ,checkfn,async function (ctx) {
	ctx.body='接口准备好了额！';
})

module.exports = router




