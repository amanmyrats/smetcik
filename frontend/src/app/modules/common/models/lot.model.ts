import { BoqItem } from "../../smeta/models/boq-item.model";
import { Trade } from "./trade.model";

export class Lot {
    public id?: string;
    public trade?: Trade;
    public index?: string;
    public code?: string;
    public name_tm?: string;
    public name_ru?: string;
    public name_en?: string;
    public name_original?: string;
    public boq_items?: BoqItem[];

}
