import { Unit } from "../../common/models/unit.model";
import { BoqItem } from "./boq-item.model";
import { Resource } from "./resource.model";

export class Consumption {
    public id?: string;
    public boq_item?: string;
    public boq_item_object?: BoqItem;
    public resource?: string;
    public resource_object?: Resource;
    public quantity?: string;

}
