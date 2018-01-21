
export class handledata {
    static Datasend = "DATASEND";
    static GETDATA = "GETDATA";
    static UPDATEDATA = "UPDATEDATA";


    static submitdata = (payload) => ({
        type: handledata.Datasend,
        payload
    })
    static getdata = (payload) => ({
        type: handledata.GETDATA,
        payload
    }
    )
    static Update = (payload) => ({
        type: handledata.UPDATEDATA,
        payload
    })

}


