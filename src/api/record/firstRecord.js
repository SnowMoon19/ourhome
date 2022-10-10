import request from '@/myConfig/request'

/**
 * 查询当前用户id
 * typeId决定任务版
 */
export function getFirstRecordList(recordListId) {
    return request({
        url: `/record/getFirstRecordListByRecordListId`,
        method: 'get',
        param: {
            recordListId
        }
    })
}