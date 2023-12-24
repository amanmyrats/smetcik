import { BaseBoqItem } from "./base-boq-item.model";
import { BaseTrade } from "./base-trade.model";

export class BaseLot {
    public id?: string;
    public trade?: BaseTrade;
    public index?: string;
    public code?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public boq_items?: BaseBoqItem[];
}
