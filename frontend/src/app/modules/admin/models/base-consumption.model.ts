import { BaseBoqItem } from "./base-boq-item.model";
import { BaseResource } from "./base-resource.model";

export class BaseConsumption {
    public id?: string;
    public boq_item?: string;
    public boq_item_object?: BaseBoqItem;
    public resource?: string;
    public resource_object?: BaseResource;
    public quantity?: string;
}
