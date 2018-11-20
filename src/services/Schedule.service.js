import _helper from '../helper'
import Api from './Api'

const url = 'schedule/'

const Schedule = {

    get (ligneCode, directionCode, stationCode) {
        let where = _helper.Request.urlFromObject({
            ligneCode: ligneCode,
            directionCode: directionCode,
            stationCode: stationCode,
            travelerId: Api.TRAVELER_ID,
            sessionId: Api.SESSION_ID
        })
        return Api.get(url + 'session_shot_virgin' + where).then(res => res.data)
    }

}

export default Schedule