var CronJob = require('cron').CronJob;
var job = new CronJob("0 * * * * * *",function(){
    console.log('每秒一次');
});

job.start();
/**
 *  分 小时 日 月 dayofweek
 *  * 每xx一次
 *  a-b 第几秒到第几秒
 *  星/n 每隔多少秒
    a-b/n 第几秒到第几秒，每隔多少秒
 **/