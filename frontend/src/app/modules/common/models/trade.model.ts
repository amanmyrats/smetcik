import { Lot } from "./lot.model";

export class Trade {
    public id?: string;
    public index?: string;
    public code_tm?: string;
    public code_ru?: string;
    public code_en?: string;
    public code_original?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public lots?: Lot[];


}
