/* 
    although named as links.model

    it holds the model for the whole app, including
    AppModel
    LinkCategory
    Link

    ==============================
    update - so this might not work as the stored objects are plain JSON objects
    OK so complete the class implementation first 
    the figgure out a way to convert plain objects
*/

// ok
export const AppModel = class {
    AppData = [];
    constructor(...appDataJson) {
        if(appDataJson) {
            appDataJson.forEach(e => {
                console.log(e)
                this.AppData.push(new LinkCategoryModel(null, e));
            })
        }
    }

    /**
     * add new link group given a new category
     * @param {string} newCategory name;
     */
    addCategory(newCategory) {
        this.AppData.push(new LinkCategoryModel(newCategory));
    }
}

export const LinkCategoryModel = class {
    categoryLabel = '';
    urlList = [];
    #linkID = 0;

    constructor(label, parseObject) {
        if(parseObject) {
            this.categoryLabel = parseObject.categoryLabel;

            if(parseObject.urlList.length > 0)
                parseObject.urlList.forEach(e => {
                    this.urlList.push(new LinkModel(null, null , this.#linkID++ ,e));
                });
        } else {
            this.categoryLabel = label;
        }
    };

    //todo - test new, plain
    addLink(linkLabel, linkUrl) {
        this.urlList.push(new LinkModel(linkLabel, linkUrl, this.#linkID++));
    }

    // todo - test new, test plain
    updateLink(updateId, newLinkLabel, newLinkUrl) {
        const updateObject = this.urlList.find(e => e.id === updateId);

        if(!!updateObject) {
            updateObject.label = newLinkLabel;
            updateObject.url = newLinkUrl;
        }
    }

    //todo, test new, test plain
    deleteLink(deleteId) {
        let deleteObject = this.urlList.find(e => e.id = deleteId);
        let deleteIndex = this.urlList.indexOf(deleteObject)

        if(!!deleteIndex) {
            delete this.urlList.find(e => e.id = deleteId);
            this.urlList.splice(deleteIndex, 1);
        }
    }
};

export const LinkModel = class {
    constructor(label, url, id, parseObject) {
        if(parseObject) {
            this.id = id;
            this.label = parseObject.label;
            this.url = parseObject.url;
        } else {
            this.id = id
            this.label = label;
            this.url = url;
        }
    }

};

