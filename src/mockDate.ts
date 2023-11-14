import { v4 as uuid } from 'uuid';
import { ICompanyInfo, IPermit,IVehicleInfo } from './contracts/IPermit';

export const permitInfo:IPermit[] = [
    { 
        type: 'fuel',
        state: 'California',
        stateFee:40,
        serviceFee:30,
        isEdit: false, 
        id: uuid(),
        effectiveDate: new(Date)
    },
    { 
       type: 'trip',
       state: 'Arizona',
       stateFee:40,
       serviceFee:30,
       isEdit: false, 
       id: uuid(),
       effectiveDate: new(Date)
   },
   { 
       type: 'overweigth',
       state: 'Florida',
       stateFee:60,
       serviceFee:50,
       isEdit: false, 
       id: uuid(),
       effectiveDate: new(Date)
   },
   { 
       type: 'oversize',
       state: 'Missouri',
       stateFee:60,
       serviceFee:50,
       isEdit: false, 
       id: uuid(),
       effectiveDate: new(Date)
   },{ 
       type: 'HUT',
       state: 'New York',
       stateFee:45,
       serviceFee:50,
       isEdit: false, 
       id: uuid(),
       effectiveDate: new(Date)
   },{ 
       type: 'KYU',
       state: 'Kentucky',
       stateFee:30,
       serviceFee:55,
       isEdit: false, 
       id: uuid(),
       effectiveDate: new(Date)
   },{ 
       type: 'overweigth',
       state: 'Nevada',
       stateFee:50,
       serviceFee:40,
       isEdit: false, 
       id: uuid(),
       effectiveDate: new(Date)
   },
    { 
         type: 'fuel',
         state: 'California',
         stateFee:40,
         serviceFee:30,
         isEdit: false, 
         id: uuid(),
         effectiveDate: new(Date)
     },
     { 
        type: 'trip',
        state: 'Arizona',
        stateFee:40,
        serviceFee:30,
        isEdit: false, 
        id: uuid(),
        effectiveDate: new(Date)
    },
    { 
        type: 'overweigth',
        state: 'Florida',
        stateFee:60,
        serviceFee:50,
        isEdit: false, 
        id: uuid(),
        effectiveDate: new(Date)
    },
    { 
        type: 'oversize',
        state: 'Missouri',
        stateFee:60,
        serviceFee:50,
        isEdit: false, 
        id: uuid(),
        effectiveDate: new(Date)
    },{ 
        type: 'HUT',
        state: 'New York',
        stateFee:45,
        serviceFee:50,
        isEdit: false, 
        id: uuid(),
        effectiveDate: new(Date)
    },{ 
        type: 'KYU',
        state: 'Kentucky',
        stateFee:30,
        serviceFee:55,
        isEdit: false, 
        id: uuid(),
        effectiveDate: new(Date)
    },{ 
        type: 'overweigth',
        state: 'Nevada',
        stateFee:50,
        serviceFee:40,
        isEdit: false, 
        id: uuid(),
        effectiveDate: new(Date)
    }
]
export const VehicleInfo:IVehicleInfo[] = [
    {
        unit:'AA111AA',
        vinNumber: 'AASASAS7ASAS1234',
        make: 'Dodge',
        model: 'F250',
        year: '',
        licensePlate:'R45476',
        plateState: 'TX',
        axle: 3,
        fuelType:'Disel',
        unladenWeight:'2000',
        gvw:'80000',
        vehicleType:'Track'
    },
    {
        unit:'BB111BB',
        vinNumber: 'AASASAS7ASAS1223',
        make: 'Peterbilt',
        model: 'F251',
        year: '',
        licensePlate:'R45476',
        plateState: 'TX',
        axle: 3,
        fuelType:'Petrol',
        unladenWeight:'2000',
        gvw:'54000',
        vehicleType:'Special Houling Vehicle'
    },
    {
        unit:'CC111CC',
        vinNumber: 'AASASAS7ASAS231234',
        make: 'Freightliner',
        model: 'F252',
        year: '',
        licensePlate:'R45476',
        plateState: 'TX',
        axle: 3,
        fuelType:'Gas',
        unladenWeight:'2000',
        gvw:'8000',
        vehicleType:'Track'
    },
    {
        unit:'DD111DD',
        vinNumber: 'AASASAS7ASAS12435',
        make: 'Ford',
        model: 'F25',
        year: '',
        licensePlate:'R45476',
        plateState: 'TX',
        axle: 3,
        fuelType:'Gas',
        unladenWeight:'2000',
        gvw:'35000',
        vehicleType:'Tractor'
    }
]
export const CompaniesInfo:ICompanyInfo[] = [
{
    legalName: 'Just Trucking LLC',
    dba: 'just',
    USDOT: 1415467,
    adress: '14 15 Linoln rd',
    city: 'Burbank',
    state: 'CA',
    zipCode: '91506',
}   
]
