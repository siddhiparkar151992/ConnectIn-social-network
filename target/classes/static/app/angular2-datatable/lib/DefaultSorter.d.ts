import { DataTable } from "./DataTable";
export declare class DefaultSorter {
    private mfTable;
    private sortBy;
    private isSortedByMeAsc;
    private isSortedByMeDesc;
    constructor(mfTable: DataTable);
    private sort();
}
