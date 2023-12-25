import { BaseCompanyBoqItem } from "./base-company-boq-item.model";
import { BaseCompanyTrade } from "./base-company-trade.model";

export class BaseCompanyLot {
    public id?: string;
    public trade?: BaseCompanyTrade;
    public index?: string;
    public code?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public boq_items?: BaseCompanyBoqItem[];
}
