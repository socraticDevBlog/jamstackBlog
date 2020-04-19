describe("Sorts object", function () {
  let sorter;

  beforeEach(function () {
    sorter = new Sorter();
  });

  it("should return an array of keys sorted in desc order", function () {
    let aSmolDictionary = { one: 1, three: 3, two: 2 };
    let expectedKeys = ["three", "two", "one"];

    let sortedkeys = sorter.sortKeysByValuesDesc(aSmolDictionary);

    expect(sortedkeys).toEqual(expectedKeys);
  });
});
