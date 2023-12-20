export class Paginated<T> {
    public count?: string;
    public next?: string;
    public previous?: string;
    public results?: T[];
}
