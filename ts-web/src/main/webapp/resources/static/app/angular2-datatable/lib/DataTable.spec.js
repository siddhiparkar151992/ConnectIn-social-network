"use strict";
var testing_1 = require("angular2/core/testing");
var core_1 = require("angular2/core");
var DataTable_1 = require("./DataTable");
testing_1.describe("DataTable directive tests", function () {
    var datatable;
    testing_1.beforeEach(function () {
        datatable = new DataTable_1.DataTable();
        datatable.inputData = [
            { id: 3, name: 'Poland' },
            { id: 1, name: 'Slovakia' },
            { id: 2, name: 'Czech' },
            { id: 5, name: 'Hungary' },
            { id: 4, name: 'Ukraine' }
        ];
        datatable.ngOnChanges({ inputData: new core_1.SimpleChange(null, datatable.inputData) });
    });
    testing_1.describe("initializing", function () {
        testing_1.it("data should be empty array if inputData is undefined or null", function () {
            var datatable = new DataTable_1.DataTable();
            datatable.ngOnChanges({ inputData: new core_1.SimpleChange(null, null) });
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual([]);
        });
        testing_1.it("data should be equal to inputData", function () {
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual(datatable.inputData);
        });
        testing_1.it("data should be 2 first items", function () {
            datatable.rowsOnPage = 2;
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual([{ id: 3, name: 'Poland' }, { id: 1, name: 'Slovakia' }]);
        });
        testing_1.it("data should be 3. and 4. items", function () {
            datatable.rowsOnPage = 2;
            datatable.activePage = 2;
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual([{ id: 2, name: 'Czech' }, { id: 5, name: 'Hungary' }]);
        });
        testing_1.it("shouldn't recalculate data when no changes", function () {
            datatable.ngDoCheck();
            var data = datatable.data;
            datatable.ngOnChanges({});
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toBe(data);
        });
    });
    testing_1.describe("pagination", function () {
        testing_1.beforeEach(function () {
            datatable.rowsOnPage = 2;
            datatable.ngDoCheck();
        });
        testing_1.it("should return current page settings", function () {
            testing_1.expect(datatable.getPage()).toEqual({ activePage: 1, rowsOnPage: 2, dataLength: 5 });
        });
        testing_1.it("data should be 3. and 4. items when page change", function () {
            datatable.setPage(2, 2);
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual([{ id: 2, name: 'Czech' }, { id: 5, name: 'Hungary' }]);
        });
        testing_1.it("data should be three first items when page change", function () {
            datatable.setPage(1, 3);
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual([{ id: 3, name: 'Poland' }, { id: 1, name: 'Slovakia' }, { id: 2, name: 'Czech' }]);
        });
        testing_1.it("data should be two last items when page change", function () {
            datatable.setPage(2, 3);
            datatable.setPage(2, 3);
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual([{ id: 5, name: 'Hungary' }, { id: 4, name: 'Ukraine' }]);
        });
    });
    testing_1.describe("sorting", function () {
        testing_1.it("id should return current sort setting", function () {
            datatable.setSort("id", "desc");
            testing_1.expect(datatable.getSort()).toEqual({ sortBy: "id", sortOrder: "desc" });
        });
        testing_1.it("shouldn't refresh data when set page with same settings", function () {
            datatable.setSort("name", "asc");
            datatable.ngDoCheck();
            var data = datatable.data;
            datatable.setSort("name", "asc");
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toBe(data);
        });
        testing_1.it("should sort data ascending by name", function () {
            datatable.setSort("name", "asc");
            datatable.ngDoCheck();
            testing_1.expect(datatable.data).toEqual([
                { id: 2, name: 'Czech' },
                { id: 5, name: 'Hungary' },
                { id: 3, name: 'Poland' },
                { id: 1, name: 'Slovakia' },
                { id: 4, name: 'Ukraine' }
            ]);
        });
    });
});
//# sourceMappingURL=DataTable.spec.js.map