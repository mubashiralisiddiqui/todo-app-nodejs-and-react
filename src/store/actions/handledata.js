
export class handledata {
    static Datasend = "DATASEND";
    static GETDATA = "GETDATA";
    static UPDATEDATA = "UPDATEDATA";
    static ISLOADING = "ISLOADING";
    static ACTIVE = "ACTIVE";
    static COMPLETED = "COMPLETED";


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
    static load = (payload) => ({
        type: handledata.ISLOADING,
        payload
    })
    static getActive = (payload) => ({
        type: handledata.ACTIVE,
        payload
    })

    static getcompleted = (payload) => ({
        type: handledata.COMPLETED,
        payload
    })


}


