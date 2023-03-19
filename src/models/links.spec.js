import { LinkCategoryModel, LinkModel } from "./links.model";

let plainJsonList = [

]

describe("LinkModel model class testing", () => {
    it('initializing class object normally', () => { 
        let linkObject = new LinkModel("label", "url", 3);

        let expectedObject = {
            id: 3,
            label: 'label',
            url: 'url',
        }

        expect(linkObject).toMatchObject(expectedObject);
    })


    it('initializing class object via plain object', () => { 
        let expectedObject = {
            id: 3,
            label: 'label',
            url: 'url',
        }

        let linkObject = new LinkModel(null, null, null, expectedObject);

        expect(linkObject).toMatchObject(expectedObject);
    })
})

describe("LinkCategory model class testing", () => {
    describe('initializing class object normally', () => { 
        it('addLink', () => {
            let testCategory = new LinkCategoryModel('testCategory');
            testCategory.addLink('testLabel', 'testUrl');

            const expectedObject = {
                categoryLabel: 'testCategory',
                urlList: [
                    {
                        id: 0,
                        label: 'testLabel',
                        url: 'testUrl'
                    }
                ]
            }

            expect(testCategory).toMatchObject(expectedObject);
        });

        it('updateLink', () => {
            let testCategory = new LinkCategoryModel('testCategory');
            testCategory.addLink('testLabel', 'testUrl');
            testCategory.updateLink(0, 'updatedLabel', 'updatedUrl');

            const expectedObject = {
                categoryLabel: 'testCategory',
                urlList: [
                    {
                        id: 0,
                        label: 'updatedLabel',
                        url: 'updatedUrl'
                    }
                ]
            }

            expect(testCategory).toMatchObject(expectedObject);
        });

        it('deleteLink', () => {
            let testCategory = new LinkCategoryModel('testCategory');
            testCategory.addLink('testLabel', 'testUrl');
            testCategory.deleteLink(0);

            const expectedObject = {
                categoryLabel: 'testCategory',
                urlList: []
            }

            expect(testCategory).toMatchObject(expectedObject);
        });
    })

    describe('initializing class object via plain object', () => {
        it('deep object parsing', () => {
            const expectedObject = {
                categoryLabel: 'testCategory',
                urlList: [
                    {
                        id: 0,
                        label: 'testLabel',
                        url: 'testUrl'
                    },
                    {
                        id: 1,
                        label: 'testLabel',
                        url: 'testUrl'
                    },
                    {
                        id: 2,
                        label: 'testLabel',
                        url: 'testUrl'
                    }
                ]
            }

            const testObject = new LinkCategoryModel(null, expectedObject);

            expect(testObject).toMatchObject(expectedObject);
        }); 


        it('addLink', () => {
            const expectedCategory = {
                categoryLabel: 'testCategory',
                urlList: [
                ]
            }

            const expectedLink = {
                id: 0,
                label: 'testLabel',
                url: 'testUrl'
            }

            let testCategory = new LinkCategoryModel(null, expectedCategory);
            testCategory.addLink(expectedLink.label, expectedLink.url);

            expectedCategory.urlList = [expectedLink]
            expect(testCategory).toMatchObject(expectedCategory);
        });

        it('updateLink', () => {
            let expectedCategory = {
                categoryLabel: 'testCategory',
                urlList: []
            }

            let expectedLink = {
                label: 'testLabel',
                url: 'testUrl'
            }

            let testCategory = new LinkCategoryModel(null, expectedCategory);
            testCategory.addLink(expectedLink.label, expectedLink.url);
            testCategory.updateLink(0, 'updatedLabel', 'updatedUrl');

            expectedCategory.urlList = [{
                id: 0,
                label: 'updatedLabel',
                url:  'updatedUrl'
            }]

            expect(testCategory).toMatchObject(expectedCategory);
        });

        it('deleteLink', () => {
            let expectedCategory = {
                categoryLabel: 'testCategory',
                urlList: []
            }

            let expectedLink = {
                label: 'testLabel',
                url: 'testUrl'
            }

            let testCategory = new LinkCategoryModel(null, expectedCategory);
            testCategory.addLink(expectedLink.label, expectedLink.url);
            testCategory.deleteLink(0);

            expect(testCategory).toMatchObject(expectedCategory);
        });
    });
})

describe("AppData model class testing", () => {
    test('should one', () => { 
        expect(1).toBe(1);
    })
})