/* 
    although named as links.model

    it holds the model for the whole app, including
    AppModel
    LinkCategory
    Link

    ==============================
    update - so this might not work as the stored objects are plain JSON objects
*/

// ok
const AppModel = class {
    constructor() {
        this.categories = [];


    }

    /**
     * add new link group given a new category
     * @param {string} newCategory name
     */
    addCategory(newCategory) {
        this.categories.push(new LinkCategory(newCategory));
    }
}

const LinkCategory = class {
    categoryLabel = '';
    urlList = [];

    constructor(label) {
        this.categoryLabel = label;
    };

    //todo
    addLink(linkLabel, linkUrl) {

    }
    // todo
    updateLink() {}

    //todo
    deleteLink() {}
};

// ok
const Link = class {
    constructor(label, url) {
        this.label = label;
        this.url = url;
    }
};

export { AppModel, LinkCategory, Link };
