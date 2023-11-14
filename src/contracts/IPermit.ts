export  interface IPermit  {
    type: string,
    state: string,
    stateFee:number,
    serviceFee:number,
    isEdit: boolean, 
    id: string,
    effectiveDate: Date,
    }
   export interface IVehicleInfo{
    unit: string,
    vinNumber: string,
    vehicleType: string
    make: string,
    model?: string,
    year: string,
    licensePlate: string,
    plateState:string,
    axle?: number,
    fuelType:string,
    unladenWeight:string,
    gvw:string,
   }
   export interface ICompanyInfo{
    name?: string,
    dba:string,
    USDOT?:number,
    adress?: string,
    city: string,
    state: string,
    zipCode: string,
    legalName:string,
    physicalStreetAddress?:string
   }