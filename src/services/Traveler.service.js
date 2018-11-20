import _helper from '../helper'
import Api from './Api'

const url = 'traveler/'

const Schedule = {

    startSession () {
        let where = _helper.Request.urlFromObject({
            travelerId: Api.TRAVELER_ID
        })
        return Api.post(url + 'start_session' + where).then(res => res.data)
    }

}

export default Schedule