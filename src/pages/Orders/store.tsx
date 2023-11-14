import { create } from 'zustand'
import { ICompanyInfo, IPermit,IVehicleInfo } from '../../contracts/IPermit';
interface INewPermitStore {
    permits:IPermit[],
    vehicalInfo: IVehicleInfo| null,
    companyInfo:ICompanyInfo|null,
    isPermitStapComplated:()=>boolean,
    isCompanyStapComplated:()=>boolean,
    isVehicalStepCompleted:()=>boolean,
    updatePermits: (newPermits:IPermit[]) => void
    updateVehical: (newVehical:IVehicleInfo)=> void
    updateCompany: (newCompany:ICompanyInfo)=> void
}
export const usePermitStore = create<INewPermitStore>((set,get) => ({
   permits:[],
   vehicalInfo: null,
   companyInfo:null,
   isPermitStapComplated: ()=>{
    const permits: IPermit[] = get().permits
    return !!permits.length
   },
   isCompanyStapComplated:()=>{
    const companyInfo: ICompanyInfo| null = get().companyInfo
    return !!companyInfo
   },
   isVehicalStepCompleted:()=>{
    const vehicalInfo: IVehicleInfo| null = get().vehicalInfo
    return !!vehicalInfo
   },
   updatePermits: (newPermits: IPermit[]) => set((state: INewPermitStore) => ({ permits: newPermits })),
   updateVehical: (newVehicalInfo: IVehicleInfo) => set((state: INewPermitStore) => ({ vehicalInfo: newVehicalInfo })),
   updateCompany:(newCompanyInfo:ICompanyInfo)=>set((state:INewPermitStore)=>({companyInfo:newCompanyInfo}))
  }))